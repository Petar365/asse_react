function E_Banking() {
    return (<div className="wrapper">
            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span style={{fontFamily: "Raleway"}}>E-Banking</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>
            <div className="wrapper-content-inner pt-4 ">

                <div className="pb-5">
                    <h2 className="text-center p-3 pb-4 "><span className="bluefont">Како </span>да <span className="bluefont">станете</span> корисник
                    </h2>
                    <div>
                        <p>E-банкарството е систем кој им овозможува на клиентите на банка или друга финансиска
                            институција да спроведат низа финансиски трансакции преку веб-страницата на финансиската
                            институција или мобилната апликација.</p>
                        <span>За да станете корисник на E-Banking потребно е :</span>
                        <ul>
                            <li>Да се информирате дали вашата банка е корисник на сервисниот центар
                            </li>
                            <li>Потребно е да имате отворено сметка во банка
                            </li>
                            <li>Во најблиската филијала да потполните формулар за електронски пристап на вашата сметка
                            </li>
                        </ul>
                    </div>
                </div>


                <h2 className="text-center p-3  pt-5 font-weight-bold">Банки за работа со физички и правни лица
                </h2>
                <div className="text-center">
                    <h4 className="text-center pt-3 pb-3 font-weight-bold">Правни лица:</h4>

                    <div className="pb-5 row">
                        <div className="col-lg-4 col-md-12 col-sm-12 clients-img">
                            <a className="p-3 " href="https://www.nlbproklik.com.mk/Account/Login">
                                <img className="img-content" src="/images/NLB%20BANK%20FULL%20COLOR.png"
                                     alt="NLB Bank"/>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 clients-img">
                            <a className="p-3 " href="https://www.netbanking.mk/Stopanstvo/Account/Login">
                                <img className="img-content" src="/images/sparkase_fullcolor-removebg.png"
                                     alt="SPARKASSE"/>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 clients-img">
                            <a className="p-3 " href="https://silkroad.24x7.com.mk/Corporate/Account/Login">
                                <img className="img-content" src="/images/silkroad.png"
                                     alt="Silk Road Bank"/>
                            </a>
                        </div>


                    </div>
                    <div>
                        <h4 className="text-center pt-3 pb-3 font-weight-bold">Физички лица:</h4>
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <a className="p-3 clients-img"
                                   href="https://www.nlbklik.com.mk/LoginModule/LoginUP.aspx?ReturnUrl=%2fdefault.aspx">
                                    <img className="img-content" src="/images/NLB%20BANK%20FULL%20COLOR.png"
                                         alt="NLB Bank"/></a>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <a className="p-3 clients-img" href="https://www.netbanking.mk/Naselenie/Account/Login">
                                    <img className="img-content" src="/images/sparkase_fullcolor-removebg.png"
                                         alt="SPARKASSE"/></a>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-12">
                                <a className="p-3 clients-img" href="https://silkroad.24x7.com.mk/Retail/Account/Login">
                                    <img className="img-content" src="/images/silkroad.png"
                                         alt="Silk Road Bank"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default E_Banking;