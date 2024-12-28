import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
        return (
                <>
                        <div
                                style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                }}
                        >
                                <Header />
                                <h2 className="splash">Hi, I am a web developer from Sarasota, Florida</h2>
                                <h3 className="splash">
                                        &emsp; I have been programming since I was a kid and I am very glad to finally
                                        be able to take my hobby and turn it into something I enjoy doing for a living,
                                        and benefitting other people and their businesses. Please take a moment to look
                                        at the some of the components below that I could make a part of your
                                        organization's website.
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                </h3>
                        </div>
                        <div className="hero">
                                <Quiz />
                                <Login />
                        </div>

                        <div className="hero" style={{ color: "black" }}>
                                <p>
                                        Lorem ipsum odor amet, consectetuer adipiscing elit. Nec ornare natoque urna per
                                        feugiat egestas. Maximus dolor ultricies ut justo magnis dictumst vivamus
                                        phasellus. Nunc odio nisl porta posuere nullam tincidunt. Efficitur curabitur
                                        molestie quisque litora neque. Tortor nisl dui consequat scelerisque augue
                                        porta; arcu ante eros. Litora ad ornare litora augue; placerat finibus. Metus
                                        tincidunt gravida odio ante vivamus. Diam per congue dis volutpat laoreet
                                        aliquet. Ultricies elit consequat donec fames rhoncus vulputate quis habitant.
                                        <br />
                                        <br />
                                        Accumsan curae suscipit in ante tellus posuere inceptos ut. Venenatis suscipit
                                        tincidunt tincidunt habitasse dictum nibh amet dapibus. Lacus condimentum
                                        ridiculus quam fames metus mi ipsum. Et curabitur sit aliquam habitasse eget
                                        auctor habitasse orci non. Ac mus placerat pulvinar, parturient mauris nunc
                                        mollis. Mollis duis class, tellus dolor volutpat proin. Vel dis integer habitant
                                        dapibus; facilisi mus lobortis. Sociosqu sed penatibus tortor sociosqu pulvinar
                                        malesuada phasellus augue viverra.
                                        <br />
                                        <br />
                                        Enim elit hac at maximus tellus fusce ante aptent. Sit malesuada tincidunt
                                        sociosqu fringilla non faucibus ultricies nisi. Praesent ullamcorper commodo
                                        sociosqu nam dictum euismod hac. Semper natoque euismod class mi cursus; dapibus
                                        consectetur dis felis. Diam hendrerit erat egestas leo interdum augue urna.
                                        Donec in maximus justo ante suspendisse nullam. Consectetur class eget platea
                                        suscipit tristique iaculis. Adipiscing augue imperdiet torquent eget ipsum
                                        aliquam conubia!
                                        <br />
                                        <br />
                                        Urna eu eget consequat justo non purus quisque varius neque. Donec condimentum
                                        nam faucibus mi mauris class hendrerit primis. Pretium mollis arcu tempor
                                        maecenas nibh vivamus vulputate turpis. Eu tempus pharetra commodo orci risus,
                                        pretium ornare non. Purus molestie ullamcorper imperdiet nostra justo. Donec
                                        ultrices netus ex; id posuere orci. Dapibus cursus quisque habitasse feugiat
                                        suscipit integer congue pellentesque.
                                        <br />
                                        <br />
                                        Convallis augue eget orci torquent hac et consectetur. Nec litora leo sagittis
                                        nisi, congue consequat. Habitant ipsum suspendisse elementum ligula cursus cras
                                        pulvinar sodales praesent. Eleifend sollicitudin nostra id metus varius vitae.
                                        Ante ridiculus lacinia sit, fames pretium tellus sed dis. Bibendum pulvinar
                                        magna accumsan faucibus est ad purus turpis. Duis orci mattis fames accumsan
                                        commodo at a taciti. Eleifend taciti aenean purus lorem sociosqu; erat maecenas
                                        urna. Lobortis laoreet convallis enim faucibus eu nunc curabitur.
                                </p>
                        </div>
                        <Footer />
                </>
        );
}
