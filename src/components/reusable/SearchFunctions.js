import axios from "axios";
import React, { useState, useEffect } from "react";



const handleSearch = (event) => {
const [allData, setAllData] = useState([]);
const [filteredData, setFilteredData] = useState(allData);



useEffect(() => {
  axios("http://localhost:5000/artists").then((Response) => {
    console.log(Response.data);
    setAllData(Response.data);
    setFilteredData(Response.data);
  }).catch(error => {
      console.log('Error getting data: ' + error);
  })
}, []);
return (

)
};
