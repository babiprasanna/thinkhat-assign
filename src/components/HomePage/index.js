import {AiFillPlusSquare} from "react-icons/ai"
import {v4 as uuidv4} from 'uuid'
import Header from "../header"
import React, { useState } from 'react';
import {AiTwotoneStar} from "react-icons/ai"
import DataContext from "../../context/DataContext";
import "./index.css"

const HomePage = React.memo(() => {
  const [formData, setFormData] = useState({
    id:uuidv4(),
    cityName: '',
    weather: '',
  })
;
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return(<DataContext.Consumer>
  {value => {
    const {activeData,addNewData} = value

    const handleSubmit =(e) => {
      e.preventDefault();
      if (formData.cityName.length > 2 && formData.weather.length >1){
        addNewData(formData)
      }
      console.log(formData)
    }
  
    return(<div className="home-container p-5">
    <div className='container-fluid'>
        <div className='row'>
           <Header />
      <div className='col-9 col-md-9 p-5'>
      <div className='favorite-cites-header'>
        <h1 className='favorite-cities-heading m-0'>My Favorite cities</h1>
        <button type="button" className="add-city-button" data-toggle="modal" data-target="#exampleModal">
        Add new City <AiFillPlusSquare className='plus-icon'/>
    </button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add new City</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="modal-body m-3" style={{
          display: 'flex',
          flexDirection:"column",
        }}>
            <input type="text" placeholder="enter city name" id="cityName" name="cityName"  className="form-control m-3" value={formData.cityName} onChange={handleChange}/>
            <input type="text" placeholder="enter city weather" id="weather" name="weather"  className="form-control m-3" value={formData.weather} onChange={handleChange}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Save changes</button>
          </div>
          </form>
        </div>
      </div>
    </div>
      </div>
      <ul className='cities-container p-0'>
        {activeData.map(item => (
          <li key={item.id} className='city-item'>
            <div className='city-item-header'>
            {item.cityName}
            <AiTwotoneStar className='star-icon'/>
            </div>
            <div className='weather-container'>
                <h1 className='weather-heading'>Weather Information {item.weather} c</h1>
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

export default HomePage;