
function WebApp() {
    return (
        <div className="wrapper back_color">

            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span style={{fontFamily: "Raleway"}}>Web Апликации</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>


            <div className="wrapper-content-inner pt-4">
                <div className="text-center p-3">
                    <h2 className=""><span className="bluefont">Aseba</span> fxWeb 3.0</h2>
                </div>
                <div >
                    <div>
                        <p>Aseba fxWeb 3.0 претставуа новата генерација на web платформата за
                            електронско банкарство
                            е направена во најсовремена Microsoft развојна технологија, при тоа
                            имплементирајќи ги
                            последните безбедносни стандарди. Истата е тестирана од независна, странска
                            сигурносна
                            компанија и доби највисоки позитивни сигурносни оценки.</p>

                        <p className="font-weight-bold p18b">Технолошки предости:</p>

                        <ul>
                            <li>Internet Browser independent. iBanking web решението може да се користи
                                преку сите
                                денеска најзастапени интернет преслитувачи: Microsoft Edge, Mozilla
                                Firefox,
                                Google Chrome, Safari.
                            </li>
                            <li>OS Independent – Овозможува користење на решението и од Windows i Linux
                                платформи.
                            </li>
                            <li>Не бара инсталација на ActiveX Компоненти. Користењето на дигиталните
                                сертификати за
                                сигурноста автентикација и авторизација на налозите, конкретно работата
                                со
                                криптографските функции е сместено во Java applet.
                            </li>
                            <li>Кориснички ориентиран, олеснета навигација
                            </li>
                        </ul>

                        <p className="font-weight-bold p18b">Функционални предности:</p>

                        <ul>
                            <li>
                                Поддржани се сите постоечки инструменти за плаќање ПП30, ПП50, ПП53
                            </li>
                            <li>
                                Поддржано е плаќање режишки трошци(пр: сметки на А1, ЕВН, Телеком,Парно и др)
                            </li>
                            <li>
                                Подржано е купопродажба на девизи
                            </li>
                            <li>
                                Порджано Интерна Трансакција помеѓу трансакциски сметки и штедни сметка од иста валута
                            </li>
                            <ul>
                                <li>
                                    Плаќање со м-Токен преку "push Нотификација"
                                </li>
                                <li>
                                    Можност за импорт на налози од txt датотека
                                </li>
                                <li>
                                    Можност за анализа на трошоците, поставување цели за штедење, креирање на будџет
                                </li>
                                <li>
                                    Користење на услугата од страна на клиентите со можност за
                                    дефинирање на
                                    повеќе рољи за работа:
                                </li>
                                <ul>
                                    <li>Право само на снимање на налозите, со можност истите
                                        потоа да бидат
                                        потпишани од страна на овластените користници со
                                        дигитален
                                        сертификат.
                                    </li>
                                    <li>
                                        Креирање на именик со вашите клиетни и контакти
                                    </li>
                                    <li>
                                        Календар: потсетник, креирање на настани
                                    </li>
                                    <li>
                                        Локатор на банкомати и експозитури
                                    </li>
                                </ul>
                                <li>
                                    Повеќенивовски привилегии за потпис:
                                </li>
                                <ul>
                                    <li>поединечно потпишување
                                    </li>
                                    <li>двојно потпишување
                                    </li>
                                    <li>групно потпишување
                                    </li>
                                </ul>
                            </ul>
                        </ul>

                        <div style={{textAlign: "left"}}>
                            <img src="/images/Services/NlbLoginPage.png"
                                 style={{maxWidth: "75%", maxHeight: "100%", float: "left"}}
                                 className="pr-3" alt={"NLB Login Pages"}/>
                            <span>Исечок од корисничките интерфејси. Изгледот на страната е прилагодлив и
                                се адаптира
                                на заштитините бои и логоа на клиентот (Банката). Најавата е возможна со
                                дигитални
                                сертификати, сместени на USB PKI медиум или на Smart card, со корисничко
                                име
                                и лозинка,како и автентикација и авторизација со мобилен токен(за
                                физички
                                лица)s.</span>
                        </div>

                        <div style={{clear: "both"}}></div>

                        <div>
                            <p>За <span className="font-weight-bold">правните</span> лица за најава со токен
                                со сертификат подребно е да се исталираат :</p>
                            <ul>
                                <li>Компонента за токен</li>
                                <li>Екстензија за вашиот прелистувач</li>
                                <li><a href="/Downloads/Assee/aseba-crypto-signer-1.0.1.15.msi">Компонента
                                    за подпишување</a></li>
                            </ul>
                            <p>Компонента за токен може да ја најдете на "Упатство за инсатлација на
                                компонента за токен" или во <a href="/Drivers">драјвери</a></p>
                            <img src="/images/Services/nlbproToken.png" style={{width: "100%"}} alt={"nlbproToken.png"}/>
                            <p>Со кликање на копчето "Најава со токен со сертификат" доколку ги немате
                                инсталирано потребните компоненти ви се отвара прозорец со можност
                                истите да ги превземете</p>
                            <img src="/images/Services/nlbproklikSertifikat.png"
                                 style={{maxWidth: "100%"}} alt={"nlbproklikSertifikat.png"}/>
                        </div>
                        <div className={"text-center"}>
                            <p className="p18b">Страничен панел</p>
                            <img src="/images/Services/nlbStranicePanel.png"
                                 className="pb-3 text-center" alt={"nlbStranicePanel.png"}/>
                        </div>

                        <div style={{clear: "both"}}></div>

                        <div className="pt-4">
                            <p className="p18b text-center">Контролен панел</p>
                            <img src="/images/Services/nlbKontrolenPanel.png"
                                 style={{maxWidth: "75%", float: "left"}}
                                 className="pr-3" alt={"nlbKontrolenPanel.png"}/>
                            <p>Контролниот панел е првата страница на апликацијата што се отвора по
                                успешната
                                најава.
                                На оваа страница се прикажуваат повеќе различни информации за различни
                                типови
                                сметки, организирани во т.н. функционални блокови. На овој начин
                                добивате брз
                                пристап до информациите што најчесто ги барате и ги користите.<br/>
                                Вашата банка одредува еден иницијален комплет од функционални блокови,
                                но Вие можете
                                да ја персонализирате оваа страница, уредувајќи ја според своите
                                потреби.
                            </p>
                        </div>

                        <div style={{clear: "both"}}></div>

                        <div className="pt-5">
                            <p>Сите извештаи можат да се печатат или download-ираат како pdf или excel
                                датотеки или
                                пак директно да се испечатат.</p>
                            <img className="pb-3" src="/images/Services/nlbSmetki.png"
                                 style={{maxWidth: "100%"}}
                             alt={"nlbSmetki.png"}/>
                        </div>

                        <div className={"pt-3"}>
                            <p className="mb-0 p18b">Истот така може да се пребаруваат налозите со користење
                                на разни филтри
                                односно критериуми:</p>
                            <ul>
                                <li>датум на валута</li>
                                <li>насока (приливи/одливи)</li>
                                <li>по износ</li>
                                <li>сметка на праќачот</li>
                                <li>сметка на примач</li>
                                <li>назив на примачот</li>
                            </ul>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebApp;