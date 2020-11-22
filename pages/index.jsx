import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="container is-fluid v-centered">
            <section className="section animate__animated animate__zoomIn hero has-text-centered">
                <figure className="image is-128x128 centered">
                    <img src="img/ToP-logo.jpg" alt="logo"/>
                </figure>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Bienvenue sur l'index Tales of Pi
                        </h1>
                        <h2 className="subtitle">
                            Petit projet réalisé pour s'entraîner avec Next.js
                        </h2>
                    </div>
                </div>
                <div>
                    <Link href="/aboutProject">
                        <a className="button is-primary is-outlined">
                            Le projet
                        </a>
                    </Link>
                </div>
            </section>
        </main>
    )
}
