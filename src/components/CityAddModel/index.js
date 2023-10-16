import React, { useState} from 'react';
import {AiTwotoneStar} from "react-icons/ai"
import {AiOutlinePlusSquare} from "react-icons/ai"
import Header from '../header';
import {AiFillPlusSquare} from "react-icons/ai"
import DataContext from '../../context/DataContext';
import "./index.css"

const initialData = [
    { id: 1, cityName: 'Hyderabad', weather: 25 },
    { id: 2, cityName: 'kakinada', weather: 30 },
    { id: 3, cityName: 'Bangalore', weather: 22 },
    { id: 4, cityName: 'Pune', weather: 22 },
  ];

const searchItems =[
    {id:21, addModelCityName:"Channei"},
    {id:22, addModelCityName:"Surat"},
    {id:23, addModelCityName:"Delhi"},
    {id:24, addModelCityName:"goa"},
    {id:25, addModelCityName:"vizag"},
    {id:26, addModelCityName:"kirlampudi"},
    {id:27, addModelCityName:"prathipadu"},
]

const CityAddModel = React.memo(() => {
    const [data, setData] = useState(initialData);
    const [isHoveredOverSearchItem, setIsHoveredOverSearchItem] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(searchItems);
    const [isHoveredBtn5, setIsHoveredBtn5] = useState(false);

    const handleMouseOverBtn5 = () => {
      setIsHoveredBtn5(true);
    };
  
    const handleMouseOutBtn5 = () => {
      setIsHoveredBtn5(false);
    };

      const handleMouseEnterOverSearchitem = () => {
        setIsHoveredOverSearchItem(true);
      };
    
      const handleMouseLeaveOversearchitem = () => {
        setIsHoveredOverSearchItem(false);
      };
    

    return(<DataContext.Consumer>
        {value => {
          const {activeData} = value
      
          const handleSubmit =(e) => {
            e.preventDefault();
          }

          const applyFilter = (weather) => {
            const filteredData = activeData.filter(item => item.cityName === weather);
            const data = {...filteredData[0],mouseHoved:true}
            setData([data]);
          };
    
          const handleChange = (e) => {
            const searchTerm1 = e.target.value.toLowerCase();
            setSearchTerm(searchTerm);    
            const filteredItems = searchItems.filter(
                (item) => item.addModelCityName.toLowerCase().includes(searchTerm1)
              );
          
              // Update the state with the filtered items
              setFilteredData(filteredItems);
         
            //   if (searchItems.length > 1){
            //     const filterDataitems = searchItems.filter((each)=> each.addModelCityName.toLocaleLowerCase().includes(searchItems) )
            //     setFilterItemData(filterDataitems)
            // }
            console.log(filteredData)
          };

    return(<div className="home-container p-5">
    <div className='container-fluid'>
        <div className='row'>
           <Header />
            <div className='col-7 col-md-3 mb-3'>
      <div className='filter-buttons-container'>
        <div id="filter-cities">
            <h1>Cities</h1>
            <AiOutlinePlusSquare className={isHoveredBtn5 ? "plue-blue-icon2 m-3":"plue-blue-icon m-3"} onMouseOver={handleMouseOverBtn5} onMouseOut={handleMouseOutBtn5} data-toggle="modal" data-target="#exampleModal"/>
        </div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add City model</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="modal-body m-3" style={{
          display: 'flex',
          flexDirection:"column",
        }}>
            <input type="search" placeholder="search cities" id="search" name="search"  className="form-control m-3" onChange={handleChange}/>
          </div>
          <ul className={`hover-div ${isHoveredOverSearchItem ? 'scroll-item search-items' : 'scroll-search-item search-items'}`}
      onMouseEnter={handleMouseEnterOverSearchitem}
      onMouseLeave={handleMouseLeaveOversearchitem}>
              {filteredData.map((each) => <li className='search-item' key={each.id}>
                <p className='search-item-heading'>{each.addModelCityName}</p>
                <AiFillPlusSquare className='search-item-plus-icon'/>
              </li>)}
          </ul>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
          </form>
        </div>
      </div>
    </div>
        <hr />
        {activeData.map(eachItem => (<div onClick={() => applyFilter(eachItem.cityName)} key={eachItem.cityName} 
        className={eachItem.mouseHoved ? "city-button2":"city-button"}
        >
        <button >{eachItem.cityName}</button> 
        <p className='m-0 p-0'>{eachItem.weather}°C</p>
        </div>))}
        </div>
     </div>
      <div className='col-12 col-md-6'>
      <ul >
        {data.map(item => (
          <li key={item.id} className='filter-city-item'>
            <div className='filter-city-item-header p-3 m-0'>
            <p className='city-name m-0'>{item.cityName} </p>
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
});;

export default CityAddModel;