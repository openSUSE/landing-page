import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import styles from './layout.module.scss';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const poppinsBold = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "openSUSE ­— Freedom for your desktop",
  description: "openSUSE is an opensource operating system based on Linux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppinsBold.variable}`}>
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
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
