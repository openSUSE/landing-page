#!/usr/bin/ruby
# Copyright (c) 2015-2016 SUSE LLC
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

require 'rubygems'
require 'nokogiri'
require 'json'
require 'gettext'
require 'tmpdir'
require 'fileutils'

include GetText

pot = <<-END
msgid ""
msgstr ""
"Project-Id-Version: PACKAGE VERSION\\n"
"Report-Msgid-Bugs-To: \\n"
"POT-Creation-Date: #{Time.now}\\n"
"PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE\\n"
"Last-Translator: FULL NAME <EMAIL@ADDRESS>\\n"
"Language-Team: LANGUAGE <LL@li.org>\\n"
"MIME-Version: 1.0\\n"
"Content-Type: text/plain; charset=UTF-8\\n"
"Content-Transfer-Encoding: 8bit\\n"

END

cfg = JSON.load(open('po/config.json', 'r'))

package_name = cfg['name']
pot_file = "po/#{package_name}.pot"
pot_file_stamp = File.stat(pot_file).mtime
newest_stamp = pot_file_stamp

strings = Hash.new
listed_langs = Hash.new

cfg['pages'].each do |page|
  f = open(page, 'r')
  if f.stat.mtime > newest_stamp
    newest_stamp = f.stat.mtime
  end
  page = Nokogiri::HTML(f)

  page.xpath('//*[@lang="en"]').each do |t|
    next if t.name == 'html'
    text = t.text
    if text.empty?
      text = t.attribute('placeholder').to_s
      text = t.attribute('value').to_s if text.empty?
      next if text.empty?
    end
    strings[text] ||= []
    strings[text].push(t.line)
    if t.name == 'a' && !t.attribute('href').to_s.empty?
      href = t.attribute('href').to_s
      strings[href] ||= []
      strings[href].push(t.line)
    end
  end
  page.xpath('//*[@class="change-language"]').each do |t|
    lang=t.attribute('data-language-value').value
    listed_langs[lang] = t.text
  end
end

if pot_file_stamp < newest_stamp
  puts("updating #{pot_file}")
  strings.each_pair do |text, lines|
    pot += "#: "
    pot += lines.map { |l| "index.html:#{l}"}.join(' ')
    pot += "\n"
    pot += "msgid \"#{text}\"\n"
    pot += "msgstr \"\"\n"
    pot += "\n"
  end

  f = IO.popen("msgcat -F - -o #{pot_file}", "w").puts(pot)
  pot_file_stamp = File.stat(pot_file).mtime
end

Dir.mktmpdir do |localedir|
  Dir.glob("po/*.po").sort.each do |po|
    language = %r(po/([^.]+).po).match(po)[1]
    target_file = "assets/js/langpack/#{language}.json"
    system("msgmerge -q -U #{po} #{pot_file}")
    if File.exists?(target_file) && File.stat(po).mtime < File.stat(target_file).mtime
      next
    end
    domain = "#{language}_landing"
    mofile="#{localedir}/#{language}/LC_MESSAGES/#{domain}.mo"
    GetText.locale = language
    FileUtils.mkpath("#{localedir}/#{language}/LC_MESSAGES")
    system("msgfmt -o #{mofile} #{po}")
    GetText.bindtextdomain(domain, path: localedir)
    GetText.textdomain(domain)
    translations={}
    strings.keys.sort.each do |string|
      next if string.empty?
      translation = gettext(string)
      translations[string] = gettext(string) if string != translation
    end
    if translations.count < 5
      puts("#{language} has only #{translations.count} translations, skipping")
      next
    end
    if not listed_langs.has_key?(language)
      puts("missing #{language} in index.html, don't forget assets/js/opensuse-theme.js")
    end
    puts("updating #{target_file} ...")
    hash = {}
    hash['WARNING'] = 'Please see the README.md - this is generated'
    hash['token'] = translations
    open(target_file, "w") do |f|
      f.write(JSON.pretty_generate(hash))
    end
  end
end
