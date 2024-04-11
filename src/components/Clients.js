import '../css/style.css'


function Clients() {

    return (<div>
        <div className="headers">
            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span style={{fontFamily: "Raleway"}}>Наши Клиенти</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>

            <div className="clients-background">
                <div className="container px-4 pt-5 pb-5 text-center">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-3 clients-img">
                                <a href="https://nlb.mk/" target="_blank" rel="noreferrer">
                                    <img className="img-content" src="/images/NLB%20BANK%20FULL%20COLOR.png"
                                         alt="NLB Bank"/>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 clients-img">
                                <a href="https://sparkasse.mk/" target="_blank" rel="noreferrer">
                                    <img className="img-content" src="/images/sparkase%20fullcolor.png"
                                         alt="SPARKASSE"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr style={{borderTopColor: "rgba(0, 0, 0, 0.3)"}}/>
                    <div className="row gx-5 pt-5">
                        <div className="col">
                            <div className="p-3 clients-img">
                                <a href="https://silkroadbank.com.mk/" target="_blank" rel="noreferrer">
                                    <img className="img-content" src="/images/silkroad.png"
                                         alt="Silk Road Bank"/>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 clients-img">
                                <a href="" target="_blank" rel="noreferrer">
                                    <img className="img-content" src=""
                                         alt="Open Banking 1"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr style={{borderTopColor: "rgba(0, 0, 0, 0.3)"}}/>

                    <div className="row gx-5 pt-5">

                        <div className="col">
                            <div className="p-3 clients-img">
                                <a href="" target="_blank" rel="noreferrer">
                                    <img className="img-content" src=""
                                         alt="Open Banking 2"/>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="p-3 clients-img">
                                <a href="" target="_blank" rel="noreferrer">
                                    <img className="img-content" src=""
                                         alt="Open Banking 3"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Clients;