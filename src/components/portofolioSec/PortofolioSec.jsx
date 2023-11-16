import React from 'react'
import './portofolioSec.css'
import img1 from '../../assets/images/portofolioImg/img1.png'
import img2 from '../../assets/images/portofolioImg/img2.png'
import img3 from '../../assets/images/portofolioImg/img3.png'
import phoneImg from '../../assets/images/portofolioImg/phoneImg.png'
const portofolioItems = [
    {
        "imgSrc": img1,
        "title": "Vat Services",
        "subTit": "ANDROID & IOS"
    },
    {
        "imgSrc": img2,
        "title": "Breeze",
        "subTit": "ANDROID & IOS"
    },
    {
        "imgSrc": img3,
        "title": "HIV Academy",
        "subTit": "ANDROID & IOS"
    },
]
export default function PortofolioSec() {
    return (
        <div className='portofolio__Handler'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="delivering__tit">
                            OUR PORTFOLIO
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="delivering__subTit ">
                            Latest Projects Have Been Done
                        </div>
                    </div>
                </div>
                <div className="portofolio__filter__handler">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                {
                                    portofolioItems.map((item) => {
                                        return (<div className="col-lg-12 border__Bottom">
                                            <div className="portofolio__box">
                                                <div className="portofoli__img">
                                                    <img src={item.imgSrc} alt="" />
                                                </div>
                                                <div className="portofolio__text">
                                                    <span className='tilte'>
                                                        {item.title}
                                                    </span> /
                                                    <span className='subTitle'>
                                                        { item.subTit}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="rightSideImg">
                                <img src={phoneImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
