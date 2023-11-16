import React from 'react'
import './sucessSec.css'
import arrow from '../../assets/images/svg/Arrow-Right.svg'
import avatar from '../../assets/images/sucessSec/avatar.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const sucessItems = [
    {
        "imgSrc": avatar,
        "title": "Great company and great team thanks a lot !",
        "info": "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >><< Dico is finally addressing a long time problem",
        "name": "Martin Goutry",
        "job": "Web Developer"
    },
    {
        "imgSrc": avatar,
        "title": "Great company and great team thanks a lot !",
        "info": "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >><< Dico is finally addressing a long time problem",
        "name": "Martin Goutry",
        "job": "Web Developer"
    },
    {
        "imgSrc": avatar,
        "title": "Great company and great team thanks a lot !",
        "info": "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >><< Dico is finally addressing a long time problem",
        "name": "Martin Goutry",
        "job": "Web Developer"
    },
    {
        "imgSrc": avatar,
        "title": "Great company and great team thanks a lot !",
        "info": "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >><< Dico is finally addressing a long time problem",
        "name": "Martin Goutry",
        "job": "Web Developer"
    },
    {
        "imgSrc": avatar,
        "title": "Great company and great team thanks a lot !",
        "info": "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >><< Dico is finally addressing a long time problem",
        "name": "Martin Goutry",
        "job": "Web Developer"
    },
    {
        "imgSrc": avatar,
        "title": "Great company and great team thanks a lot !",
        "info": "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >><< Dico is finally addressing a long time problem",
        "name": "Martin Goutry",
        "job": "Web Developer" 
    },
]
export default function SucessSec() {
  return (
    <div className='sucess_handler'>
      <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 mb-2 d-flex align-items-center">
                <div className="row">
                <div className="col-lg-12 d-flex justify-content-start">
                        <div className="delivering__tit">
                        testimonials
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-start">
                        <div className="delivering__subTit sucess_subTit">
                        Our Success Stories!
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-start">
                        <div class="btnTalk d-flex justify-content-center align-items-center">
                            <span class="btnTalk__text">lets talk</span>
                            <span class="btnTalk__svg">
                                <img src={arrow} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
                <div className="sucessHandler__slider">
                <Swiper
                        slidesPerView={3.1}
                        spaceBetween={250}
                        pagination={{
                            clickable: true,
                        }}

                        className="mySwiper "
                    >
                        {
                            sucessItems.map((el)=>{
                                return(<SwiperSlide>
                                    <div className="sucess__box">
                                        <div className="success__Title">
                                            {el.title}
                                        </div>
                                        <div className="success__Info">
                                            {el.info}
                                        </div>
                                        <div className="success__avatar">
                                            <img src={el.imgSrc} alt="" />
                                        </div>
                                        <div className="success__Name">
                                            {el.name}
                                        </div>
                                        <div className="success__Job">
                                            {el.job}
                                        </div>
                                    </div>
                        </SwiperSlide>)
                            })
                        }
                       
                    </Swiper>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}
