import React from "react";
import Card from "../Components/Card";
import Link from "next/link";

export default function About() {
    return (
        <main className="container is-fluid">
            <div className="hero v-centered animate__animated animate__fadeInUp">
                <div className="hero-body has-text-centered">
                    <h1 className="title">
                        About me
                    </h1>
                    <h2 className="subtitle">
                        Who am I?
                    </h2>
                </div>
            </div>
            <div className="container animate__animated animate__fadeInUp">
                <section className="section columns">
                    <div className="column is-one-quarter has-text-centered">
                        <img src="/img/me.jpg" className="round"/>
                    </div>
                    <div className="column">
                        <p className="content is-large has-text-justified">
                            Hello there! I'm Clément, a full-stack and mobile developer based in Grenoble, France.
                            I mainly use Symfony 2, 3 and 4 as back-end technologies and I work with React and Vue.js as front-end
                            technologies. I also had the opportunity to use Angular and Ionic through my studies and tried my hands at Node.js and
                            Electron when working on small personal projects.
                        </p>
                        <p className="content is-large has-text-justified">
                            Check out an overview of my skills and experiences below.
                        </p>
                    </div>
                </section>
            </div>
            <div className="animate__animated animate__fadeInUp">
                <div className="animate__animated animate__fadeInUp">
                    <div className="hero v-centered">
                        <div className="hero-body has-text-centered">
                            <h1 className="title">
                                Skills
                            </h1>
                            <h2 className="subtitle">
                                What can I do?
                            </h2>
                        </div>
                    </div>
                    <section className="section columns is-centered">
                        <Card title="Full-stack developer" image="/img/web-dev.svg">
                            <div className="my-2">
                                <img src="/img/symfony.svg" alt="Symfony" className="card-element-image"/>
                                <h6>
                                    Symfony 2/3/4
                                </h6>
                            </div>
                            <div className="my-2">
                                <img src="/img/react.svg" alt="React" className="card-element-image"/>
                                <h6>
                                    React
                                </h6>
                            </div>
                            <div className="my-2">
                                <img src="/img/vue-js.svg" alt="Vue.js" className="card-element-image"/>
                                <h6>
                                    Vue.js
                                </h6>
                            </div>
                        </Card>
                        <Card title="Mobile developer" image="/img/mobile-dev.svg">
                            <div className="my-2">
                                <img src="/img/android.png" alt="Native Android (Java)" className="card-element-image"/>
                                <h6>
                                    Native Android (Java)
                                </h6>
                            </div>
                            <div className="my-2">
                                <img src="/img/apachecordova.svg" alt="Apache Cordova" className="card-element-image"/>
                                <h6>
                                    Cordova
                                </h6>
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
            <div className="animate__animated animate__fadeInUp">
                <div className="animate__animated animate__fadeInUp">
                    <div className="hero v-centered">
                        <div className="hero-body has-text-centered">
                            <h1 className="title">
                                Past experiences
                            </h1>
                            <h2 className="subtitle">
                                Who I worked for?
                            </h2>
                        </div>
                    </div>
                    <section className="section columns is-centered">
                        <Card title="APAVE" image="/img/APAVE.png">
                            <div className="my-2">
                                <h6>
                                    Mobile Development with Native Android
                                </h6>
                            </div>
                        </Card>
                        <Card title="Prospectiva" image="/img/Prospectiva.png">
                            <div className="my-2">
                                <h6>
                                    Video Games
                                </h6>
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
            <div className="animate__animated animate__fadeInUp">
                <div className="hero v-centered">
                    <div className="hero-body has-text-centered">
                        <h1 className="title">
                            Day to day activities
                        </h1>
                        <h2 className="subtitle">
                            I enjoy lots of things...
                        </h2>
                    </div>
                </div>
                <section className="section columns is-centered">
                    <Card title="Gaming" image="/img/computer-game.svg">
                        <div className="my-2">
                            <img src="/img/video-game.svg" alt="Video games" className="card-element-image"/>
                            <h6>
                                Video Games
                            </h6>
                        </div>
                        <div className="my-2">
                            <img src="/img/dice.svg" alt="Video games" className="card-element-image"/>
                            <h6>
                                Role Play Games
                            </h6>
                        </div>
                    </Card>
                    <Card title="Music" image="/img/music.svg">
                        <div className="my-2">
                            <img src="/img/headset.svg" alt="Music listening" className="card-element-image"/>
                            <h6>
                                Music listening
                            </h6>
                        </div>
                    </Card>
                    <Card title="Art" image="/img/art.svg">
                        <div className="my-2 v-centered">
                            <img src="/img/microphone.svg" alt="3D" className="card-element-image"/>
                            <h6>
                                Story telling / Voice dubbing
                            </h6>
                        </div>
                        <div className="my-2 v-centered">
                            <img src="/img/cooking-pot.svg" alt="3D" className="card-element-image"/>
                            <h6>
                                Cooking
                            </h6>
                        </div>
                    </Card>
                </section>
            </div>
            <section className="section is-centered animate__animated animate__fadeInUp">
                <div className="hero v-centered">
                    <div className="hero-body has-text-centered">
                        <h1 className="title">
                            Want to have a chat?
                        </h1>
                    </div>
                    <Link href="/contact">
                        <a className="button is-primary is-outlined">
                            Contact me
                        </a>
                    </Link>
                </div>
            </section>
        </main>
    );
}