import Accordion from 'react-bootstrap/Accordion';
import {clear} from "@testing-library/user-event/dist/clear";

function Services_Sms() {
    return (
        <div className="wrapper">
            <div className="headers">
                <hr className="invisibleHr"/>
                <div className="wrapper-content-inner pt-2 pb-2">
                    <h2><span style={{fontFamily: "Raleway"}}>СМС банкарство</span></h2>
                </div>
                <hr className="invisibleHrBottom"/>
            </div>
            <div className="wrapper-content-inner pt-4">
                <h2 className="text-center p-3">SMS канал</h2>
                <div>
                    <p>
                        Овој канал им овозможува на банките, на своите коминтенти да им понудат информации поврзани со
                        нивните сметки или информации за кампањите и останатите сервиси на банката преку испраќање на
                        SMS пораки.
                        Содржината на SMS пораките е прилагоденa на формалните барања на банката.
                        Со користење на овој канал коминтентот може да добива SMS порака за секој прилив и/или одлив на
                        својата сметка, а може да закаже точно време кога во денот сака да добива SMS порака со
                        информација за состојбата на својата сметка. Покрај во закажаното време, корисникот може кога
                        сака во текот на денот да се информира за моменталната состојбата на сметката, едноставно со
                        праќање на порака со содржина СОСТ, банката преку Сервисниот Центар ќе му прати СМС порака со
                        одговор за состојбата на сметка или сметки во банката.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services_Sms;