import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function UserList() {

    const [listOfUSer, setList] = useState([])
    // Utilisation axios pour obtenir des données de  l'API jsonplaceholder à l'intérieur des hooks useEffect
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setList(res.data)).catch(err => console.log(err))
    }, [])
    return (
      <div className="App">
        {/* Mapper la list listOfUser pour afficher la liste  */}
        {listOfUSer.map(el => <div>
  
          <div class="ag-format-container">
            <div className="ag-courses_box">
              <div class="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>
  
                  <div className="ag-courses-item_title">
                    <h1>{el.name}</h1>
                  </div>
                  <div className="ag-courses-item_title">
                    <h1>{el.username}</h1>
                  </div>
  
                  <div className="ag-courses-item_date-box">
                    Email:
                    <span className="ag-courses-item_date">
                      {el.email}
                    </span>
                  </div>
                  <div className="ag-courses-item_date-box">
                    address:
                    <span className="ag-courses-item_date">
                      {el.address.street}
                    </span>
                    <span className="ag-courses-item_date">
                      {el.address.suite}
                    </span>
                    <span className="ag-courses-item_date">
                      {el.address.city}
                    </span>
                    <div className="ag-courses-item_title">
                      Zipcode: {el.zipcode}
                    </div>
                    <div className="ag-courses-item_title">
                      Geo-lat: {el.address.geo.lat}
                    </div>
                    <div className="ag-courses-item_title">
                      geo-lng: {el.address.geo.lng}
                    </div>
                    <div className="ag-courses-item_title">
                      Phone: {el.phone}
                    </div><div className="ag-courses-item_title">
                      Website: {el.website}
                    </div><div className="ag-courses-item_title">
                      Company-name: {el.company.name}
                    </div>
                    <div className="ag-courses-item_title">
                      Company-catchPhrase: {el.company.catchPhrase}
                    </div>
                    <div className="ag-courses-item_title">
                      Company-bs: {el.company.bs}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
  
  
          
  
        </div>)}
  
      </div>
    );
  }
  
  export default UserList;