
function M_Banking() {
    return (<div className="wrapper">
        <div className="headers">
            <hr className="invisibleHr"/>
            <div className="wrapper-content-inner pt-2 pb-2">
                <h2><span style={{fontFamily: "Raleway"}}>Asseba m-Banking</span></h2>
            </div>
            <hr className="invisibleHrBottom"/>
        </div>
        <div className="wrapper-content-inner pt-4">
            <h2 className="text-center p-3"><span className="bluefont">Asseba</span> m-Banking</h2>
            <div>
                <p>
                    Операторот за потребите на крајните клиенти на Корисникот ќе овозможи достапност на банкарските
                    сервиси и услуги преку апликацијата ЈiMBA Standard Edition за мобилно банкарство која е наменета
                    за физички лица, клиенти на банката (Корисникот). Истата ги нуди следниве функционалности за
                    крајните корисници:
                </p>
                <p className="font-weight-bold">Информативни услуги :</p>
                <ul>
                    <li>Увид во состојбата и основни информации на трансакциски и/или сметки, во домашна и/или
                        странска валута.
                    </li>
                    <li>Увид во прометот за трансакциски и/или сметки во домашна и/или странска валута за последните
                        n трансакции (n-број по избор на крајниот корисник) или пак во временски период по избор.
                    </li>
                    <li>Увид во состојбата и основни информации на картичките на клиентот дебитни или кредитни. Увид
                        во прометот за трансакции со картичка според поделените n трансакции (н- број по избор на
                        крајниот корисник) или пак во временски период по избор.
                    </li>
                </ul>

                <p className="font-weight-bold">Плаќања:</p>
                <ul>
                    <li>Пренос на средства во платен промет од трансакциска сметка на клиентот во домашна валута на
                        друга трансакциска сметка. Подржани се налог ПП30, ПП50, ПП53 за платен промет.
                    </li>
                    <li>Можност за снимање на шаблони на налози како и задавање на шаблони од страна на банката
                        (плаќање на сметки за комуналии, Режиски трошоци и останато...)
                    </li>
                    <li>Менувачко работење – Пренос на средства од сопствена трансакциска сметка на сметка на
                        сопствена трансакциска сметка во друга валута – откуп и продажба на девизи во рамките на
                        сопствените трансакциски сметки
                    </li>
                </ul>

                <p className="font-weight-bold">Курсна листа:</p>
                <ul>
                    <li>преглед на менувачката курсна листа на Банката за тековниот датум.</li>
                </ul>

                <p className="font-weight-bold">Информативни пресметки:</p>
                <ul>
                    <li>Кредитен калкулатор</li>
                    <li>Калкулатор на штедење</li>
                </ul>

                <p className="font-weight-bold">Системски функционалности:</p>
                <ul>
                    <li>Промена на PIN-от на апликацијата
                    </li>
                    <li>Измена на јазичната поддршка за апликацијата
                    </li>
                    <li>Биометриска автентикација</li>
                    <li>Интегриран м-Токен</li>
                </ul>
            </div>
        </div>
    </div>);
}

export default M_Banking;