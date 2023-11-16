import React from 'react'
import './MapSec.css'
import map from '../../assets/images/mapSec/map.png'
export default function MapSec() {
    return (
        <div className='mapHandler'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center team__margin">
                        <div className="delivering__tit">
                            Around teh world!
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="delivering__subTit sucess_subTit">
                            Look around you we are every where!
                        </div>
                    </div>
                </div>
                <div className="map__handler">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    )
}
