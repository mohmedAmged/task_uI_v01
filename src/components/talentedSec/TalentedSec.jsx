import React, { useState } from 'react'
import './talented.css'
import arrow from '../../assets/images/svg/Arrow-Right.svg'
import svg1 from '../../assets/images/filterSvg/google-paly.svg'
import svg2 from '../../assets/images/filterSvg/apple.svg'
import svg3 from '../../assets/images/filterSvg/PHP.svg'
import svg4 from '../../assets/images/filterSvg/Wordpress.png'
import svg5 from '../../assets/images/filterSvg/React.svg'
import svg6 from '../../assets/images/filterSvg/vr-3d.svg'
const filterTitles = [
    {
        "title": "Development",
        "id": 1
    },
    {
        "title": "Digital Marketing",
        "id": 2
    },
    {
        "title": "Creative Design",
        "id": 3
    }
]
const filterItems = [
    {
        "icon": svg1,
        "title": "Android Apps",
        "info": "We provide the best UI/UX Design by following the latest.",
        "filterId": 1
    },
    {
        "icon": svg2,
        "title": "IOS Apps",
        "info": "We provide the best UI/UX Design by following the latest.",
        "filterId": 1
    },
    {
        "icon": svg3,
        "title": "PHP",
        "info": "We provide the best UI/UX Design by following the latest.",
        "filterId": 1
    },
    {
        "icon": svg4,
        "title": "WordPress",
        "info": "We provide the best UI/UX Design by following the latest.",
        "filterId": 2
    },
    {
        "icon": svg5,
        "title": "React JS",
        "info": "We provide the best UI/UX Design by following the latest.",
        "filterId": 2
    },
    {
        "icon": svg6,
        "title": "VR",
        "info": "We provide the best UI/UX Design by following the latest.",
        "filterId": 3
    },
]
export default function TalentedSec() {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const filteredItems = selectedFilter ? filterItems.filter(item => item.filterId === selectedFilter) : filterItems;

    const handleFilterClick = (id) => {
        setSelectedFilter(id);
    };
    return (
        <div className='talented__Handler'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8">
                        <div className="talented__tit">
                            CREATIVE AND TALENTED
                        </div>
                        <div className="talented__subTit ">
                            We Work On Different Fields
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 d-flex justify-content-end">
                        <div class="btnTalk d-flex justify-content-center align-items-center">
                            <span class="btnTalk__text">lets talk</span>
                            <span class="btnTalk__svg">
                                <img src={arrow} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="talented__filter__Handler">
                    <div className="filter__titles">
                        <div className="row">
                            {
                                filterTitles.map((el) => {
                                    return (<div key={el.id} className="col-lg-4 col-md-4">
                                        <div className={`filter__title 
                                        ${selectedFilter === el.id ? 'tit__active' : ''}`}
                                        onClick={() => handleFilterClick(el.id)}
                                        >
                                            {el.title}
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="talented__filter__items__Handler">
                    <div className="filter__items">
                        <div className="row">
                            {
                                filteredItems.map((obj) => {
                                    return (<div key={obj.title} className="col-lg-4 col-md-6">
                                        <div className="filter__box__item">
                                            <div className="overlay"></div>
                                            <div className="filterBox p-4 text-center">
                                                <div className="filterIcon__Handler">
                                                    <div className="filterIcon">
                                                        <img src={obj.icon} alt="" />
                                                    </div>
                                                </div>
                                                <div className="filterItemTit">
                                                    <span>{obj.title}</span>
                                                </div>
                                                <div className="filterItemInfo px-4">
                                                    <span>
                                                        {obj.info}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
