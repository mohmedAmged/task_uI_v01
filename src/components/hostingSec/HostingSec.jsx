import React from 'react'
import './hostingSec.css'
import server from '../../assets/images/hosting/server.png'
import arrow from '../../assets/images/svg/Arrow-Right.svg'
export default function HostingSec() {
    return (
        <div className='container-fluid hosting__sec'>
            <div className="hosting__handler">
                <div className="row justify-content-center p-0 m-0">
                    <div className="col-lg-12 p-0 m-0 d-flex justify-content-center">
                        <div className="delivering__tit">
                            need a Web hosting
                        </div>
                    </div>
                    <div className="col-lg-12 p-0 m-0 d-flex justify-content-center">
                        <div className="delivering__subTit hosting__subTit">
                            50% Off On Any Shared Hosting Packages
                        </div>
                    </div>
                    <div className="col-lg-12 p-0 m-0 d-flex justify-content-center">
                        <div class="btnTalk d-flex justify-content-center align-items-center">
                            <span class="btnTalk__text">lets talk</span>
                            <span class="btnTalk__svg">
                                <img src={arrow} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="serverImg__handler">
                    <div className="row p-0 m-0 justify-content-center">
                        <div className="col-lg-12 p-0 m-0 d-flex justify-content-center">
                            <div className="img__handler">
                                <img src={server} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
