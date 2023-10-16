import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import CitiesPage from './components/CitiesPage';
import CityAddModel from "./components/CityAddModel";
import DataContext from "./context/DataContext";
import { Component } from "react";
import './App.css';

const initialData = [
  { id: 1, cityName: 'Hyderabad', weather: 25 },
  { id: 2, cityName: 'kakinada', weather: 30 },
  { id: 3, cityName: 'Bangalore', weather: 22 },
  { id: 4, cityName: 'Pune', weather: 22 },
];

class App extends Component{
  state={activeData:initialData}

   addNewData = (data) => {
    // const {activeData} = this.state
    // const newData = [...activeData,data]
    // console.log(newData)
    this.setState(prevState => ({activeData: [...prevState.activeData, data]}))
    
  }

  render(){
    const {activeData} = this.state
  return (
     <BrowserRouter>
     <DataContext.Provider value={{activeData , addNewData:this.addNewData}}>
         <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/citiesPage" element={<CitiesPage />} />
            <Route exact path="/cityAddModel" element={<CityAddModel />} />
         </Routes>
         </DataContext.Provider>
    </BrowserRouter>

  );
  }
}


export default App;
