import React, { useState } from 'react';
import Header from '../header';
import {AiTwotoneStar} from "react-icons/ai"
import DataContext from '../../context/DataContext';
import {AiOutlinePlusSquare} from "react-icons/ai"
import "./index.css"

const initialData = [
    { id: 1, cityName: 'Hyderabad', weather: 25, mouseHoved:false},
    { id: 2, cityName: 'kakinada', weather: 30 , mouseHoved:false},
    { id: 3, cityName: 'Bangalore', weather: 22 , mouseHoved:false},
    { id: 4, cityName: 'Pune', weather: 22 , mouseHoved:false},
  ];


const CitiesPage = React.memo(() => {
    const [data, setData] = useState(initialData);
    const [isHoveredBtn4, setIsHoveredBtn4] = useState(false);

    const handleMouseOverBtn4 = () => {
      setIsHoveredBtn4(true);
    };
  
    const handleMouseOutBtn4 = () => {
      setIsHoveredBtn4(false);
    };
    

    const handleMouseOver = (item) => {
        initialData.map(item1 =>
            item1.id === item ? { ...item, mouseHoved:true } : item1
          );
    };
  
    const handleMouseOut = (item) => {
        const filteredData = initialData.filter(item1 => item1.id === item);
        const data = {...filteredData[0],mouseHoved:false}
        setData([data]);
    };

  
    const applyFilter = (weather) => {
      const filteredData = initialData.filter(item => item.cityName === weather);
      const data = {...filteredData[0],mouseHoved:true}
      setData([data]);
    };

    return(<DataContext.Consumer>
      {value => {
        const {activeData} = value
    
    return(<div className="home-container p-5">
    <div className='container-fluid'>
        <div className='row'>
           <Header />
            <div className='col-7 col-md-3 mb-3'>
      <div className='filter-buttons-container'>
        <div id="filter-cities">
            <h1>Cities</h1>
            <AiOutlinePlusSquare className={isHoveredBtn4 ? "plue-blue-icon2 m-3":"plue-blue-icon m-3"} onMouseOver={handleMouseOverBtn4} onMouseOut={handleMouseOutBtn4}/>
    
        </div>
        <hr />
        {activeData.map(eachItem => (<div onClick={() => applyFilter(eachItem.cityName)} key={eachItem.id} 
        className={eachItem.mouseHoved ? "city-button2":"city-button"}
         onMouseOver={() => handleMouseOver(eachItem.id)} onMouseOut={()=>handleMouseOut(eachItem.id)} 
       
        >
        <button >{eachItem.cityName}</button> 
        <p className='m-0 p-0'>{eachItem.weather}°C</p>
        </div>))}
        </div>
     </div>
      <div className='col-12 col-md-6 m-0'>
      <ul >
        {data.map(item => (
          <li key={item.id} className='filter-city-item'>
            <div className='filter-city-item-header p-3 m-0'>
            <p className='city-name m-0'>{item.cityName}</p>
            <AiTwotoneStar className='star-icon m-0'/>
            </div>
            <hr />
            <div className='filter-weather-container p-3'>
                <h1 className='weather-heading-text'>Weather Information {item.weather}°C</h1>
                <h1 className='weather-heading-text'>Temperate </h1>
                <h1 className='weather-heading-text'>humidity </h1>
                <h1 className='weather-heading-text'>Air Quality </h1>
                <h1 className='weather-heading-text'>{item.weather} </h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
)
}}
</DataContext.Consumer>)
});

export default CitiesPage;