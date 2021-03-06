import React, {useState} from 'react';
import Link from "next/link";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbar" onClick={() => setShowNavbar(!showNavbar)}>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>

            <div id="navbar" className={`navbar-menu ${showNavbar ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <Link href="/">
                        <a className="navbar-item">
                            Home
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="navbar-item">
                            A propos du projet
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="navbar-item">
                            A propos de Tales of Pi
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a className="navbar-item">
                            Contact
                        </a>
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="https://www.youtube.com/channel/UCSAVwJLLLVK_D5Qs8e9th3w" target="_blank">
                                <img src="/img/youtube.svg" className="logo-link" alt="Youtube" height="32" width="32"/>
                            </a>
                            <a href="https://github.com/Kormir38" target="_blank">
                                <img src="/img/github.svg" className="logo-link" alt="GitHub" height="32" width="32"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}