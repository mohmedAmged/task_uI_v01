import React from 'react'
import './myHerosSce.css'
import { Nav, Offcanvas } from 'react-bootstrap'
import hero1 from '../../assets/images/heroImgs/image22.png'
import logo1 from '../../assets/images/logo/logo1.png'
import innerRoundedSvg from '../../assets/images/heroImgs/play.svg'
import EndHeroSec from '../endHeroSec/EndHeroSec'
export default function MyHeroSec({ show, setShow }) {
    return (
        <>
          <div className='heroSec position-relative'>
            <div className="container-fluid">
                <div className="hero__handler">
                    <div className="row m-0">
                        <div className="col-lg-12  col-md-12 col-sm-12 d-flex justify-content-center">
                            <div className="icons__handler ">
                                <img src={hero1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                            <div className="hero__text__handler ">
                                <p className='hero__text '>
                                    we build <span className='color__diff'>apps!</span> <br />
                                    <span className='size__diff'>that users love!</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                            <div className="hero__subText__handler ">
                                <p className='hero__subText'>
                                    We believe that we succeed when our clients succeed Which is why we never stop learning
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                            <div className="hero__Rounded__handler">
                                <div className="hero__Rounded__img">
                                    <div className="inner__Rounded__img">
                                        <img src={innerRoundedSvg} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
            <Offcanvas show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                    <Nav className='mb-4'>
                        <Nav.Link className='logo__nav__handler'>
                            <img className='logo__svg' src={logo1} alt="" />
                        </Nav.Link>
                    </Nav>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
        <EndHeroSec/>
        </>
      
    )
}
