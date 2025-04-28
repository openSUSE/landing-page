'use client';

import { useEffect, useState } from 'react';
import styles from './topNav.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function ImageLinks({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (value: boolean) => void }) {
    return <div className={styles.imageLinks}>
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
            <Image width={20} height={20} src="/img/monochrome/menu.svg" alt="Open menu" />
        </button>
        <Link className={styles.logo} href="/">
            <Image width={60} height={60} src="/img/monochrome/logo-with-wordmark.svg" alt="openSUSE logo" />
        </Link>
    </div>;
}

function MenuOverlay({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (value: boolean) => void }) {
    return <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuOverlayOpen : ''}`}>
        <ImageLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={styles.textLinks}>
            <TextLinks />
        </div>
    </div>
}

function TextLinks() {
    return <>
        <a className={styles.textLink} href="https://get.opensuse.org/">Download</a>
        <a className={styles.textLink} href="https://forums.opensuse.org/">Forums</a>
        <a className={styles.textLink} href="https://en.opensuse.org/Main_Page">Wiki</a>
        <a className={styles.textLink} href="https://doc.opensuse.org/">Docs</a>
    </>;
}

export default function TopNav() {
    function handleScroll() {
        setHasScrolled(typeof window !== "undefined" && window?.pageYOffset !== 0);
    }

    const [hasScrolled, setHasScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    });

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('modalOpen');
        } else {
            document.body.classList.remove('modalOpen');
        }
    }, [menuOpen]);

    return <>
        <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={`${styles.topNav} ${hasScrolled ? styles.hasScrolled : ""}`}>
            <div className="container">
                <div className={styles.topNavInner}>
                    <ImageLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <TextLinks />
                </div>
            </div>
        </div>
    </>;
}
