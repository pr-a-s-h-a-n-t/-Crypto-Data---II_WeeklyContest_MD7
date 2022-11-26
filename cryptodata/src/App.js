 import React,{ useState, useEffect } from 'react';
  
 import Table from './Components/Table';
  

function App() {

  const[cryptoData, setCryptoData] = useState([]);
  

  // Fetching the data from the api using useEffect and storing 
  // it in in cryptoData using setter functions from state.
  useEffect(() =>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then((res) => {
      return res.json();
    }).then((data) => {
      setCryptoData(data)
    })
    
  },[])

  return(
    // passing the crypto data as the prop in table component.
    <Table cryptoData={ cryptoData }/>
  ) 
}

export default App;


