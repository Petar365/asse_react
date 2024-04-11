import Accordion from 'react-bootstrap/Accordion';
import {clear} from "@testing-library/user-event/dist/clear";

function Services_MobileBanking() {
    return (
        <div className="wrapper">
            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span style={{fontFamily: "Raleway"}}>Мобилно банкарство</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>
            <div className="wrapper-content-inner pt-4">
                <h2 className="text-center p-3">m-Banking канал</h2>
                <div>
                    <p>
                        ASEBSA m-banking решението овозможува брз и сигурен пристап на финансиските информации и сервиси
                        преку мобилните уреди ( повеќе од 10000 мобилни телефони што ја подржуваат оваа услуга,Android,
                        iPhone, Pad, Јm, 2МЕ мобилни телефони, Blackberry, Windows Mobile). Може лесно да се
                        интегрира со core banking или internet banking апликациите со што станува глобален и широко
                        достапен канал за доставување на банкарски продукти и сервиси. Тој овозможува уникатно решение
                        независно од производителот на мобилниот телефон и мобилниот оператор , со интегриран мобилен
                        токен за автентикација со што се достигнува висока сигурност и брзо процесирање на трансакции.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services_MobileBanking;