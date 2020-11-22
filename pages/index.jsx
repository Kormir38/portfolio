import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="container is-fluid bg-img">
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
                <div>
                    <iframe className="is-primary is-outlined" width="600" height="340" src="https://www.youtube.com/embed/+lastest?list=UUSAVwJLLLVK_D5Qs8e9th3w" frameborder="0" allowfullscreen></iframe>
                </div>
            </section>
        </main>
    )
}