import React from 'react'
import './partener.css'
import logo1 from '../../assets/images/partenerLogo/logo1.svg'
import logo2 from '../../assets/images/partenerLogo/logo2.svg'
import logo3 from '../../assets/images/partenerLogo/logo3.svg'
import logo4 from '../../assets/images/partenerLogo/logo4.svg'
const partenerLogo=[
    {
        "imgSrc": logo1
    },
    {
        "imgSrc": logo2
    },
    {
        "imgSrc": logo3
    },
    {
        "imgSrc": logo4
    },
]
export default function PartenrSec() {
    return (
        <div className='partener__handler'>
            <div className="container-fluid">
                    <div className="row justify-content-center">
                            <div className="col-lg-12 d-flex justify-content-start">
                                <div className="delivering__tit">
                                our partners
                                </div>
                            </div>
                    </div>
                    <div className="partener__icons__handler">
                        <div className="row">
                            {
                                partenerLogo.map((el)=>{
                                    return( <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-between">
                                    <div className="partener__icon__handler mx-3">
                                        <img src={el.imgSrc} alt="" />
                                    </div>
                                </div>)
                                })
                            }
                        </div>
                    </div>
            </div>
            </div>
    )
}
