import React from 'react'
import './teamSec.css'
import teamImg from '../../assets/images/teamSec/team1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const teamItems = [
    {
        "imgSrc": teamImg,
        "name": "M.ATEF",
        "job": "UI UX Designer"
    },
    {
        "imgSrc": teamImg,
        "name": "M.ATEF",
        "job": "UI UX Designer"
    },
    {
        "imgSrc": teamImg,
        "name": "M.ATEF",
        "job": "UI UX Designer"
    },
    {
        "imgSrc": teamImg,
        "name": "M.ATEF",
        "job": "UI UX Designer"
    },
    {
        "imgSrc": teamImg,
        "name": "M.ATEF",
        "job": "UI UX Designer"
    },
]
export default function TeamSec() {
    return (
        <div className='teamSec__handler'>
            <div className="container">
                <div className="row team__title_bg">
                    <div className="col-lg-12 d-flex justify-content-center team__margin">
                        <div className="delivering__tit">
                            OUR TEAM
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="delivering__subTit sucess_subTit">
                            Creative And Talented
                        </div>
                    </div>
                </div>
                <div className="team__slider__handler d-flex justify-content-center">
                    <Swiper
                        slidesPerView={4.2}
                        spaceBetween={120}
                        pagination={{
                            clickable: true,
                        }}

                        className="mySwiper "
                    >
                        {
                            teamItems.map((el) => {
                                return (<SwiperSlide>
                                    <div className="team__box d-flex justify-content-center">
                                        <div className="team__box__item">
                                            <div className="team__avatar">
                                                <img src={el.imgSrc} alt="" />
                                            </div>
                                            <div className="team__Title">
                                                {el.name}
                                            </div>
                                            <div className="team__Info">
                                                {el.job}
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>)
                            })
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
