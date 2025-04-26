import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import styles from './layout.module.scss';
import { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "openSUSE ­— Freedom for your desktop",
  description: "openSUSE is an opensource operating system based on Linux.",
};

function SocialAccount({ name, href }: { name: string, href: string }): ReactNode {
  return <a href={href} target="_blank">
    <img src={`/img/monochrome/${name.toLowerCase()}.svg`} alt={`${name} logo`} />
  </a>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
        <div className={styles.footerHolder}>
          <div className="container">
            <footer>
              <ul className={styles.links}>
                <li><a href="https://news.opensuse.org/">News</a></li>
                <li><a href="https://doc.opensuse.org/">Documentation</a></li>
                <li><a href="https://en.opensuse.org/Main_Page">Wiki</a></li>
                <li><a href="https://software.opensuse.org/">Get software</a></li>
                <li><a href="https://forums.opensuse.org/">Forums</a></li>
                <li><a href="https://lists.opensuse.org/">Mailing lists</a></li>
                <li><a href="https://shop.opensuse.org/">Merch store</a></li>
                <li><a href="https://planet.opensuse.org/">Blogs</a></li>
                <li><a href="mailto:press@opensuse.org">Press inquiries</a></li>
                <li><a href="https://en.opensuse.org/openSUSE:Artwork_brand#Trademark">Trademark</a></li>
              </ul>
              <div className={styles.bottomBar}>
                <div className={styles.legalDisclaimer}>
                  <img className={styles.wordmark} alt="openSUSE wordmark" src="/img/monochrome/wordmark.svg" />
                  &copy; 2015-{new Date().getFullYear()} SUSE LLC. All Rights Reserved.
                  <a href="https://en.opensuse.org/Imprint">Imprint</a>
                </div>
                <div className={styles.socials}>
                  <SocialAccount name="Mastodon" href="https://fosstodon.org/@opensuse" />
                  <SocialAccount name="Reddit" href="https://www.reddit.com/r/openSUSE/" />
                  <SocialAccount name="YouTube" href="https://www.youtube.com/user/opensusetv" />
                  <SocialAccount name="Facebook" href="https://www.facebook.com/en.openSUSE" />
                  <SocialAccount name="Twitter" href="https://twitter.com/opensuse" />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
