import Image from "next/image";
import React, { ReactNode } from 'react';
import styles from "./page.module.scss";

function Proposition({ imgName, altText, title, children }: {
  imgName: string, altText: string, title: string, children: ReactNode
}) {
  return <div className={styles.proposition}>
    <div className={styles.image}>
      <Image src={`/img/monochrome/${imgName}.svg`} width={48} height={48} alt={altText} />
    </div>
    <div className={styles.text}>
      <h3>{title}</h3>
      <div className={styles.description}>{children}</div>
    </div>
  </div>;
}

export default function Home() {
  return (
    <div className="page">
      <div className={styles.introHolder}>
        <div className="container">
          <div className={styles.intro}>
            <div className={styles.introPrimary}>
              <div className={styles.logo}>
                <Image width={64} height={64} src="/img/monochrome/logo.svg" alt="openSUSE logo" />
              </div>
              <h1>Free your desktop</h1>
            </div>
            <div className={styles.screenshot}>
              <Image width={600} height={375} src="/img/screenshots/kde-light.png" alt="openSUSE KDE desktop" unoptimized />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.propositions}>
          <Proposition imgName="drive" altText="Disk" title="Lean back while the installer does the work">
            Deep dives into wiki articles and forums are optional.
          </Proposition>
          <Proposition imgName="gpu" altText="GPU" title="Open by nature, proprietary when needed">
            Easy access to multimedia codecs and NVIDIA drivers.
          </Proposition>
          <Proposition imgName="relieved" altText="Relaxed person" title="Free to use, with no strings attached">
            Relax. There are no upsells, ads or mandatory accounts.
          </Proposition>
          <Proposition imgName="controlPanel" altText="Hammer and wrench" title="GUI- and TUI-based configuration tools">
            Our sysadmin suite YaST also works on the command line.
          </Proposition>
          <Proposition imgName="company" altText="Office building" title="Backed by industry, supported by volunteers">
            Corporate grants and volunteer work sustain our operations.
          </Proposition>
          <Proposition imgName="iceCreamCone" altText="Ice cream cone" title="Available in several different flavors">
            Rolling release? Immutable distro? We&apos;ve got you covered.
          </Proposition>
        </div>
        <div className={styles.builtins}>
          <div className={styles.builtinsPrimary}>
            <h3>Supported by the installer</h3>
          </div>
          <ul className={styles.builtinsSecondary}>
            <li>KDE, GNOME and XFCE</li>
            <li>Desktop and server configurations</li>
            <li>Full disk encryption</li>
            <li>Btrfs with snapshots</li>
            <li>LVM partitions</li>
            <li>Secure Boot</li>
          </ul>
        </div>
      </div>
    </div >
  );
}
