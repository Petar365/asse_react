import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";

function CollapsibleExample() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " fixed={"top"}>
                <Container>
                    <Navbar.Brand href="/">
                        <img className="site-logo site-logo-width" src="/images/asseco_southeasterneurope_logo.svg"
                             alt="Asse"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>

                            <NavDropdown title="Продукти" id="collapsible-nav-dropdown" className="nav-item-padding">
                                <NavDropdown.Item href="/products_webapp">Web
                                    Апликации</NavDropdown.Item><NavDropdown.Divider/>
                                <NavDropdown.Item href="/products_m-token">Asseba
                                    m-Token</NavDropdown.Item><NavDropdown.Divider/>
                                <NavDropdown.Item href="/products_m-banking">Asseba
                                    m-Banking</NavDropdown.Item><NavDropdown.Divider/>
                                <NavDropdown.Item href="/products_e-banking">E-Banking</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Корисничка Подршка" id="collapsible-nav-dropdown"
                                         className="nav-item-padding">
                                <NavDropdown.Item
                                    href="/instructions">Упатстава</NavDropdown.Item><NavDropdown.Divider/>
                                <NavDropdown.Item href="/faq">Често поставувани прашања</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/drivers"
                                      className={"nav-item-padding font-weight-bold"}>Драјвери</Nav.Link>

                            <NavDropdown href="/services" title="Услуги" align={{lg: 'end'}}
                                         id="collapsible-nav-dropdown" className="nav-item-padding">
                                <NavDropdown.Item href="/services-internet" className="head_menu">Интернет
                                    банкарство</NavDropdown.Item><NavDropdown.Divider/>
                                <NavDropdown.Item href="/services-mobile">Мобилно
                                    банкарство</NavDropdown.Item><NavDropdown.Divider/>
                                <NavDropdown.Item href="/services-sms">СМС банкарство</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <button className="topbtn">Top</button>

        </div>

    );
}

export default CollapsibleExample;