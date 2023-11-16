import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './delevery.css'
import img1 from '../../assets/images/elementsSwiper/img1.png'
import img2 from '../../assets/images/elementsSwiper/img2.png'
import img3 from '../../assets/images/elementsSwiper/img3.png'
import img4 from '../../assets/images/elementsSwiper/img4.png'
import img5 from '../../assets/images/elementsSwiper/img5.png'
import img6 from '../../assets/images/elementsSwiper/img6.png'
import img7 from '../../assets/images/elementsSwiper/img7.png'
const elementItems = [
    {
        "imgSrc": img1
    },
    {
        "imgSrc": img2
    },
    {
        "imgSrc": img3
    },
    {
        "imgSrc": img4
    },
    {
        "imgSrc": img5
    },
    {
        "imgSrc": img6
    },
    {
        "imgSrc": img7
    },
    {
        "imgSrc": img1
    },
    {
        "imgSrc": img2
    },
    {
        "imgSrc": img3
    },
    {
        "imgSrc": img4
    },
    {
        "imgSrc": img5
    },
    {
        "imgSrc": img6
    },
    {
        "imgSrc": img7
    }
]
export default function DeleverySec() {
    return (
        <div className='delivering__handler'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="delivering__tit">
                            Delivering
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="delivering__subTit ">
                            Your Project With The Newest<br />
                            Technologies Used
                        </div>
                    </div>
                </div>
                <div className="slider__Elements ">
                    <Swiper
                        slidesPerView={7.5}
                        spaceBetween={177}
                        pagination={{
                            clickable: true,
                        }}

                        className="mySwiper adjust__swiper__pad"
                    >
                        {
                            elementItems.map((ele) => {
                                return (<SwiperSlide>
                                    <div className="boxElement">
                                        <img src={ele.imgSrc} alt="" />
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
