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
            <div style={{ background: "white" }}>
              Test
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.propositions}>
          <Proposition imgName="drive" altText="Installer" title="Installable without a manual">
            Our wiki and forums are there when you need them.
          </Proposition>
          <Proposition imgName="gpu" altText="GPU" title="Open by nature, proprietary when needed">
            Easy access to multimedia codecs and NVIDIA drivers.
          </Proposition>
          <Proposition imgName="relieved" altText="Relaxed person" title="Free, with no strings attached">
            Relax. There are no upsells, ads or mandatory accounts.
          </Proposition>
          <Proposition imgName="controlPanel" altText="Hammer and wrench" title="GUI- and TUI-based configuration tools">
            Our sysadmin suite YaST also works on the command line.
          </Proposition>
          <Proposition imgName="company" altText="Office building" title="Backed by tech companies">
            Industry funding sustains our development.
          </Proposition>
        </div>
      </div>
    </div >
  );
}
