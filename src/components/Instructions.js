
function Instructions() {

    return (
        <div className="wrapper ">
            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span>Упатствa</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>

            <div className="wrapper pt-3 pb-5 back_color">
                <div className="wrapper-content-inner pt-5 p18b">
                    <ul>
                        <li>
                            <p><a
                                href="/files/Упатство%20за%20користење%20на%20web%20апликацијата%20за%20правни%20лица.pdf"
                                target="_blank">Упатство за користење на web апликацијата за правни лица</a></p>
                        </li>
                        <hr style={{borderTopColor: "rgba(0, 0, 0, 0.3)"}}/>

                        <li>
                            <p><a
                                href="/files/Упатство%20за%20користење%20на%20web%20апликацијата%20за%20физички%20лица.pdf"
                                target="_blank">Упатство за користење на web апликацијата за физички лица</a></p>
                        </li>
                        <hr style={{borderTopColor: "rgba(0, 0, 0, 0.3)"}}/>
                        <li>
                            <p><a href="/files/install_manual_macos.pdf" target="_blank">Упатство за инсталација на
                                компоненти за токен Gemalto и Java на MAC OS Snow Lepard</a></p>
                        </li>
                        <hr style={{borderTopColor: "rgba(0, 0, 0, 0.3)"}}/>
                        <li>
                            <p><a href="/files/install_manual_ubuntu.pdf" target="_blank"> Упатсво за инсталација на
                                компоненти за токен Gemalto и Java за Ubuntu Linux</a></p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
        ;
}

export default Instructions;