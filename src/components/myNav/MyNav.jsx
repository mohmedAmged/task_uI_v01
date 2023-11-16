import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo1 from '../../assets/images/logo/logo1.png'
import menu from '../../assets/images/svg/menu.svg'
import moon from '../../assets/images/svg/moon.svg'
import translate from '../../assets/images/svg/translate.svg'
import Arrow1 from '../../assets/images/svg/Arrow-Right.svg'
import './myNav.css'
export default function MyNav({ handleToggle, show }) {
    return (
        <>
            <Navbar className="d-flex justify-content-between align-items-center nav__container">
                <div className="container-fluid">
                    <Nav>
                        <Nav.Link className='toggle__handler' onClick={handleToggle}>
                            <img className='menu__svg' src={menu} alt="" />
                        </Nav.Link>
                    </Nav>
                    <Nav className='mx-auto noneInSmallDevice'>
                        <Nav.Link className='logo__nav__handler'>
                            <img className='logo__svg' src={logo1} alt="" />
                        </Nav.Link>
                    </Nav>
                    <Nav className="">
                        <Nav.Link href="#home" className='d-flex justify-content-center align-items-center lang__handler'>
                            <span className='text__Nav'>اللغة العربية</span>
                            <img className='trasnlate__svg' src={translate} alt="" />
                        </Nav.Link>
                        <Nav.Link className='d-flex justify-content-center align-items-center' href="#features">
                            <div className='rectangular '>
                                <img className='moon__svg' src={moon} alt="" />
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#pricing" className='d-flex justify-content-center align-items-center'>
                            <div className="btnTalk d-flex justify-content-center align-items-center">
                                <span className='btnTalk__text'>lets talk</span>
                                <span className='btnTalk__svg'>
                                    <img src={Arrow1} alt="" />
                                </span>
                            </div>
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}
