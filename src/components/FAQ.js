import Accordion from "react-bootstrap/Accordion";

function Instructions() {

    return (
        <div className="wrapper ">
            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span>Често поставувани прашања</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>

            <div className="wrapper pt-3 pb-5 back_color">
                <div className="wrapper-content-inner">


                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Што значи пораката „Погрешен активациски код“?</Accordion.Header>
                            <Accordion.Body>
                                Проверете дали точно го внесовте вашиот активациски код. Ако активацискиот код содржи
                                карактери
                                проверете да не е вклучено Caps Lock на тастатурата.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Добив порака „Корисникот е веќе активиран“?</Accordion.Header>
                            <Accordion.Body>
                                Активација на вашиот профил се прави само еднаш, истиот активациски код не може да биде
                                искористен за повторна активација.
                                Пробајте да се најавите со вашето корисничко име, лозинка и токен. Доколку сте ја
                                заборавиле
                                својата лозинка, ќе мора да ја повторите постапката “Ја заборавив лозинката“.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Зашто добив порака „Непознат корисник“?</Accordion.Header>
                            <Accordion.Body>
                                Проверете дали точно го внесовте вашето корисничко име. Ако корисничкото име е точно
                                внесено
                                ве молиме контактирајте ја службата за техничка поддршка.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Откако го внесов пинот добив порака „Погрешен пин“?</Accordion.Header>
                            <Accordion.Body>
                                Проверете дали точно го внесовте ПИН-от од вашиот токен кој секогаш се состои од
                                нумерички
                                карактери. Проверете дали ви е вклучено 'Num Lock' или 'Caps Loc' на тастатурата.

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Зашто ми е одбиен налогот ?</Accordion.Header>
                            <Accordion.Body>
                                За да видите причината поради која е одбиен налогот потребно е да го проверите неговиот
                                статус на менито Плаќања -> Преглед на е-налози во колоната Статус на налог.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Каде да проверам каде ми е налогот кој го пратив ?</Accordion.Header>
                            <Accordion.Body>
                                Сите налози пратени електронски т.е. преку web апликацијата откако ќе ги пратите кон
                                банка
                                нивниот статус за успешно или не успешно прифаќање во банката го проверувате во менито
                                Плаќања -> Преглед на е-налози во колоната Статус на налог. Статусот на налогот откако е
                                прифатен во банка го следите преку страната Преглед на плаќања од менито Преглед

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Што значи пораката „Одбиен налог: корисникот нема право за трансакции“
                                ?</Accordion.Header>
                            <Accordion.Body>
                                Потребно е да го контактирате Help Desk центарот за проверка на вашиот профил.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Што значи статус на налог „Се Праќаат...“ ?</Accordion.Header>
                            <Accordion.Body>
                                Налозите кои сте ги пратиле и кои имаат статус на налог “Се праќаат” не треба да се
                                препраќаат повторно. Овој статус на налог е привремен.

                                Освежете го прегледот Плаќања -> Преглед на е-налози

                                Доколку се уште налогот стои во статус “Се праќа...” проверете го статусот на налог
                                подоцна
                                со тоа што ќе кликнете на менито Плаќања -> Преглед на е-налози
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="8">
                            <Accordion.Header>Дали треба да се препрати налог кој има статус „Се праќаат...“
                                ?</Accordion.Header>
                            <Accordion.Body>
                                Не го препраќајте налогот. Проверете го статусот на налогот подоцна на менито Плаќања ->
                                Преглед на е-налози. Исклучиво налогот кој има статус “Одбиен” може да биде пратен
                                повторно.

                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="9">
                            <Accordion.Header>Дали може да го препратам одбиениот налог ?</Accordion.Header>
                            <Accordion.Body>
                                Налог со статус одбиен не може да биде препратен. За да го испратите повторно потребно е
                                да
                                се креира и испрати нов налог. Најбрз начин да креирате ист налог како одбиениот е да
                                кликнете на линкот “Креирај нов налог“ и
                                пробајте да го пратите ново креираниот налог.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Instructions;