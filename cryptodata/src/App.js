 import React,{ useState, useEffect } from 'react';
  
 import Table from './Components/Table';
 import './Components/Table.css';

function App() {

  const[cryptoData, setCryptoData] = useState([]);
  
  useEffect(() =>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then((res) => {
      return res.json();
    }).then((data) => {
      setCryptoData(data)
    })
    
  },[])

  return(
    <Table cryptoData={ cryptoData }/>
  ) 
}

export default App;


