function M_Banking() {
    return (
        <div className="wrapper back_color">
            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span style={{fontFamily: "Raleway"}}>Мобилно банкарство</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>
            <div className="wrapper-content-inner pt-4">
                <h2 className="text-center p-3">Asseba m-Token</h2>
                <div>
                    <p className="font-weight-bold">Отсега м-Токен е интегриран во самата банкарска апликација и не е
                        потребно инсаталација на посебна апкликација</p>

                    <p>Целта на измената е да се постигнат две фунционали унапредувања: Да се интегрираат фунциите на
                        м-токен
                        апликацијата која во основа служи како автентикаторска алатака за крајниот корисник со
                        банкарската
                        апликација, на начин што основните операции:
                    </p>

                    <ul>
                        <li>OTP автентикација</li>
                        <li>MAC поптис</li>
                    </ul>
                    <p>Ќе бидат заменети со автоматизиран процес односно механизам подржан со push нотификации и
                        истовремено
                        интегрирани со решението за Web Banking. За овој начин на најава е изработен нов тип на најава и
                        како таков е достапен за избор на веб страната од аспект на конфигурација. Ваквиот тип на најава
                        е
                        достапен за Web Retal. Web контролата се состои од input само на корисничко име на клиентот.
                    </p>
                    <div className="text-center p-3" style={{fontSize: "18px"}}>
                        <p className="p18b">Интеграција на м-Токен во банкарската апликација</p>
                        <img src="/images/app/MToken.PNG" style={{maxWidth: "30%"}}/>
                    </div>
                    <p>Можностите на Asseba m-Token во функција на безбедна автентикација или пак авторизација на
                        одредена
                        активност (електронски налози) се следниве:</p>

                    <ul>
                        <li>
                            Push нотификација
                        </li>
                        <li>ОТP кодовите можат да бидат базирани на временски интервали Time-based или на настан односно
                            клиентска активност Event-based
                        </li>
                        <li>Mac Потпис</li>
                        <li>6+ цифарска дожина на кодовите (по озбор)</li>
                        <li>3DES & MasterCard CAP compliant</li>
                        <li>PIN заштита (4+ цифри)</li>
                        <li>опција за промена на корисничкиот PIN</li>
                        <li>Повеќејазичност</li>
                        <li>Rich GUI support (Touch Screen Support)</li>
                    </ul>

                    <p>Asseba m-Token може да се прилагодува по желба на клиентот и тоа од повеќе аспекти:</p>

                    <ul>
                        <li>Јазик</li>
                        <li>Брендирање</li>
                        <li>Колор шеми</li>
                        <li>MDS полиња (од 1 до 10)</li>
                    </ul>

                    <p>Asseba m-Token се карактеризира со високо ниво на безбедност во работењето и тоа конкретно:
                    </p>

                    <ul>
                        <li>PIN бројот за пристап до токенот го дефинира/избира крајниот корисник</li>
                        <li>On-line активација на токенот</li>
                        <li>Со користење на IMEI се зголемува заштитата од клонирање</li>
                        <li>Енкриптирана автентикација со Host серверот</li>
                        <li>Дигитално потпишана Java апликација</li>
                    </ul>

                    <p className="p18b">Во продолжение се неколку екрани од изгледот на самата апликација</p>

                    <div className="text-center">
                        <div className="p-3">
                            <p className="p18b">Login со PIN</p>
                            <img src="/images/app/pin.PNG" style={{maxWidth: "30%"}}/>
                            <p>Login – се внесува PIN, број кој што клиентот самиот го избира при иницијалниот чекор на
                                активација.</p>
                        </div>
                    </div>

                    <div>
                        <p className="p18b">Во продолжение се неколку екрани од новиот начин на логирање на iBanking web
                            платформа со м-Токен</p>

                        <div className="text-center">
                            <div className="p-3">
                                <p className="p18b">Login на iBanking web платформа со м-Токен</p>
                                <img src="/images/app/login_mtoken.png" style={{maxWidth: "30%"}} className="pb-3 pt3"/>
                                <p> Со внесување на корисничко име и кликање на копчето "Најава" во банкарската
                                    апликацијата пристигнува барање за авторизација
                                </p>
                                <img src="/images/app/loginNotification.PNG" style={{maxWidth: "30%"}}
                                     className="pb-3 pt3"/>
                                <img src="/images/app/loginNotificationConfirm.PNG" style={{maxWidth: "30%"}}
                                     className="pb-3 pt3"/>
                                <p> Oткога ќе се потврди барањето добиваме порака "Успешно одобрено барање" и корисникот
                                    е логиран во iBanking web платформата
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default M_Banking;