import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main style="background-image: url('/public/img/ToP-banner.jpg')" className="container is-fluid v-centered">
            <section className="section animate__animated animate__zoomIn hero has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Bienvenue sur l'index Tales of Pi
                        </h1>
                        <h2 className="subtitle">
                            Projet non affilié avec la chaîne Tales of Pi, 100% fanmade
                        </h2>
                    </div>
                </div>
                <div>
                    <Link href="/aboutProject">
                        <a className="button is-primary is-outlined">
                            A propos du projet
                        </a>
                    </Link>
                </div>
            </section>
        </main>
    )
}