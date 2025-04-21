import styles from './topNav.module.scss';
import Image from 'next/image';

export default function TopNav() {
    return <div className={styles.topNav}>
        <div className="container">
            <div className={styles.topNavInner}>
                <a className={styles.logo} href="/">
                    <Image width={32} height={32} src="/img/monochrome/logo.svg" alt="openSUSE logo" />
                </a>
                <a className={styles.textLink} href="https://get.opensuse.org/">Download</a>
                <a className={styles.textLink} href="https://forums.opensuse.org/">Forums</a>
                <a className={styles.textLink} href="https://en.opensuse.org/Main_Page">Wiki</a>
                <a className={styles.textLink} href="https://doc.opensuse.org/">Docs</a>
            </div>
        </div>
    </div>;
}
