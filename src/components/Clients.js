import '../css/style.css'


function Clients() {

    return (
        <div>
            <div className="headers">
                <div className="headers">
                    <hr className="invisibleHr"/>
                    <div className="wrapper-content-inner pt-2 pb-2">
                        <h2><span style={{fontFamily: "Raleway"}}>Наши Клиенти</span></h2>
                    </div>
                    <hr className="invisibleHrBottom"/>
                </div>

                <div style={{background: "white"}}>
                    <div className="container px-4 pt-5 pb-5 text-center">
                        <div className="row gx-5">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="p-lg-3 clients-img">
                                    <a className="colortobw" href="https://nlb.mk/" target="_blank" rel="noreferrer">
                                        <img className="img-content" src="/images/NLB%20BANK%20FULL%20COLOR.png"
                                             alt="NLB Bank"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="p-lg-3 clients-img">
                                    <a className="colortobw" href="https://sparkasse.mk/" target="_blank"
                                       rel="noreferrer">
                                        <img className="img-content" src="/images/sparkase_fullcolor-removebg.png"
                                             alt="SPARKASSE"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr style={{borderTopColor: "rgba(0, 0, 0, 0.3)"}}/>
                        <div className="row gx-5 pt-lg-5">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="p-lg-3 clients-img">
                                    <a className="colortobw" href="https://silkroadbank.com.mk/" target="_blank"
                                       rel="noreferrer">
                                        <img className="img-content" src="/images/silkroad.png"
                                             alt="Silk Road Bank"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="p-lg-3 clients-img">
                                    <a className="colortobw" href="https://halkbank.mk/" target="_blank"
                                       rel="noreferrer">
                                        <img className="img-content" src="/images/halkbank2.png"
                                             alt="HalkBank"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;