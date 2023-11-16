import React from 'react'
import './numberSec.css'
import servIcon1 from '../../assets/images/sercviceIcon/Gallery.png'
import servIcon2 from '../../assets/images/sercviceIcon/Work.png'
import servIcon3 from '../../assets/images/sercviceIcon/Vector.svg'
import overlayImg from '../../assets/images/sercviceIcon/overlayImg.png'
const numberItems = [
    {
        "number": 410,
        "title": "Completed Projects"
    },
    {
        "number": 17,
        "title": "Winning Awards"
    },
    {
        "number": 233,
        "title": "Happy Clients"
    },
    {
        "number": 12,
        "title": "Countries Served"
    }
]
const servItems = [
    {
        "icon": servIcon1,
        "title": "Unique Designs",
        "class": "yellowBg",
        "info": "We provide the best UI/UX Design by following the latest trends of the market."
    },
    {
        "icon": servIcon2,
        "title": "Fitting Your Business ",
        "class": "redBg",
        "info": "We create and innovate, with us you can guarantee the highly standards of inventions"
    },
    {
        "icon": servIcon3,
        "title": "Fresh Ideas",
        "class": "blueBg",
        "info": "We provide the best UI/UX Design by following the latest trends of the market."
    }
]
export default function NumberSec() {
    return (
        <div className="numberSec">
            <div className='container-fluid'>
                <div className="row border__Bottom p-0 m-0 justify-content-center">
                    {
                        numberItems.map((item) => {
                            return (<div className="col-lg-3 col-md-6 col-sm-12 border__Right d-flex justify-content-center p-0 m-0">
                                <div className="numberBox p-4 text-center">
                                    <div className="numberText">
                                        <span className='number'>{item.number}+</span>
                                    </div>
                                    <div className="numberInfo">
                                        <span className='info'>{item.title}</span>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
                <div className="row p-0 m-0 justify-content-center">
                    {
                        servItems.map((obj) => {
                            return (<div className="col-lg-4 col-md-6 col-sm-12 servBox__Handler  border__Right d-flex justify-content-center p-0 m-0">
                                <div className="overlay">
                                    <img src={overlayImg} alt="Logo" className="overlay__Img"/>
                                </div>
                                <div className="servBox p-4 text-center">
                                    <div className="servIcon__Handler">
                                        <div className={`servIcon ${obj.class}`}>
                                            <img src={obj.icon} alt="" />
                                        </div>
                                    </div>
                                    <div className="servTit">
                                        <span>{obj.title}</span>
                                    </div>
                                    <div className="servInfo px-4">
                                        <span>
                                            {obj.info}
                                        </span>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
