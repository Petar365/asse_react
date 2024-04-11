import '../css/style.css'


function DiagonalDiv() {

    return (
        <div>
            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span style={{fontFamily: "Raleway"}}>Контакт</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>

            <div className="container px-4 text-left wrapper-content-inner" style={{textAlign: "left"}}>
                <div className="row gx-5 pt-5 pb-5">
                    <div className="col-lg-6 border-type">
                        <div className="p-3 contact">
                            <div className="contact-header">
                                <span className="bluefont">Call</span> <span>Us</span>
                            </div>
                            <p >Доколку не најдете одговор на вашето прашање на оваа
                                страница,
                                меѓу најчестите прашања или во упатствата,
                                Центарот за повици е достапен во работните денови од 8 до 20 часот и во сабота од 9 до
                                15
                                часот.</p>

                            <p ><b>24x7 Сервисен центар</b></p>

                            <p >
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                                     className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                </svg>
                                <span> Location: </span>

                                <a href="https://maps.app.goo.gl/667iJmKkVGcyryoe6"> Народен Фронт 17,Скопје 1000</a>
                            </p>

                            <p >
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                                     className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>

                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <span> Tel<span style={{fontFamily: "Roboto"}}>: <a href="tel:+38923248004">(+389) 2 3248
                                    004</a></span></span>
                            </p>

                            <p >
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                                     className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>

                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <span> Tel<span style={{fontFamily: "Roboto"}}>2: <a href="tel:+38923216621">(+389) 2 3216
                                    621</a></span></span>
                            </p>

                            <p >
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                                     className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                </svg>
                                <span> Email: </span>
                                <a href="mailto:pomos@24x7.com.mk"> pomos@24x7.com.mk</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="p-3 map-content">
                            <div className="contact-header ">
                                <span className="bluefont" >Find </span> <span>Us</span>
                            </div>
                            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.3078967565143!2d21.414984776565866!3d41.99366725816991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541437c484c347%3A0x52f84ea5657ab52d!2sAsseco%20SEE!5e0!3m2!1sen!2smk!4v1711968673189!5m2!1sen!2smk"
                                width="450" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiagonalDiv;