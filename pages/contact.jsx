import React from "react";

export default function Contact() {
    return(
        <main className="container is-fluid">
            <div className="hero v-centered">
                <div className="hero-body has-text-centered">
                    <h1 className="title">
                        Contactez moi
                    </h1>
                </div>
            </div>
            <section className="section container v-centered">
                <div className="hero v-centered">
                    <div className="hero-body has-text-centered">
                        <h1 className="title">
                            Par mail
                        </h1>
                        <h2 className="subtitle">
                            <a href="mailto:clement.alexandre@protonmail.com">clement.alexandre@protonmail.com</a>
                        </h2>
                    </div>
                </div>
                <div className="hero">
                    <div className="hero-body has-text-centered">
                        <h1 className="title">
                            Par discord
                        </h1>
                        <h2 className="subtitle">
                            Terruyu#0001
                        </h2>
                    </div>
                </div>
            </section>
        </main>
    );
}