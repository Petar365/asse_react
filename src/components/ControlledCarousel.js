import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/style.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="d-block w-100  c-img" src="/images/office.jpg" alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Интеграција на м-Токен</h3>
                    <p>Отсега функционалноста на м-Токен апликацијата е интегрирана во самата банкараска
                        апликацијата</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100  c-img" src="/images/family-living-room.webp" alt="Third slide"/>

                <Carousel.Caption>
                    <h3>Компанијата АССЕКО СЕЕ го промени името во АСЕЕ</h3>
                    <p>Oд 3 октомври 2023 година, компанијата функционира под нов правен назив – AСЕЕ ДООЕЛ Скопје,
                        скратено AСЕЕ ДООЕЛ Скопје. Оваа промена е дел од стратегијата на групацијата ASSECO SEE за
                        унификација на брендовите и проширување кон глобалниот пазар.Новото име, AСЕЕ ДООЕЛ Скопје,
                        означува нова ера за нас како компанија и индустријата во целост.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100  c-img"
                     src="/images/open-banking-financial-technology-fintech-concept-virtual-screen-200694813.webp"
                     alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;