import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/style.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={"wrapper"}>
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100  c-img" src="/images/office.jpg" alt="Third slide"/>
                    <Carousel.Caption>
                        <h3 className={"font-weight-bold"}>Интеграција на мобилниот токен</h3>
                        <p>Отсега функционалноста на мобилниот токен апликацијата е интегрирана во самата мобилна
                            апликацијата</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100  c-img" src="/images/family-living-room.webp" alt="Third slide"/>

                    <Carousel.Caption>
                        <h3 className={"font-weight-bold"}>Компанијата АССЕКО СЕЕ го промени името во АСЕЕ</h3>
                        <p>Оваа промена е дел од стратегијата на групацијата ASSECO SEE за
                            унификација на брендовите и проширување кон глобалниот пазар.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100  c-img"
                         src="/images/open-banking-financial-technology-fintech-concept-virtual-screen-200694813.webp"
                         alt="Third slide"/>
                    <Carousel.Caption>
                        <h3 className={"font-weight-bold"}>Апликација за мобилно банкарство со опција за онлајн апликација за кредит..</h3>
                        <p>
                            Апликацијата за мобилно банкарство сега беспрекорно се поврзува со системите на банката,
                            овозможувајќи полесно проширување и воведување на Open Banking. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;