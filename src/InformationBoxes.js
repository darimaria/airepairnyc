import React from 'react';
import './App.css'

const InformationBoxes = () => {
    return(
        <div className="infoBoxContainer">
            <div>
                <h1>Repairs</h1>
                <ul>
                    <li>Refrigerator Repair: Fast and efficient service for all refrigerator issues,
                        ensuring your food stays fresh.
                    </li>
                    <li>Air Conditioner Repair: Comprehensive repairs for all types of 
                        air conditioning units, providing you comfort in every season.
                    </li>
                    <li>Oven Repair: Timely repairs for electric ovens so you can get back to cooking your
                        favorite meals.
                    </li>
                    <li>
                        Small Appliance Repair: Expert diagnosis and repair for various small appliances
                        to keep them running smoothly.
                    </li>
                </ul>
            </div>
            <div>
                <h1>Installations</h1>
                <ul>
                    <li>
                        Air Conditioner Installation: Expert installation of air conditioning units, tailored to
                        your home's needs.
                    </li>
                    <li>
                        Portable AC Installation: Professional installation services for portable air conditioners,
                    </li>
                    <li>
                        Oven Installation: Professional installation services for all oven models, ensuring
                        safe and optimal performance.
                    </li>
                </ul>
            </div>
            <div>
                <h1>Assembly</h1>
                <ul>
                    <li>
                        Bookcase assembly
                    </li>
                    <li>
                        Bedframe assembly 
                    </li>
                    <li>
                        Desk assembly
                    </li>
                    <li>
                        Cabinet assembly
                    </li>
                    <li>
                        Anything you can think of!
                    </li>
                </ul>
            </div> 
        </div>
    )
};

export default InformationBoxes;