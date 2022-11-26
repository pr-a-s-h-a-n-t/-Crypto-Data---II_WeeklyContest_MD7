 import './Table.css';



// receiving the data from parent component as props
function Table(  {cryptoData}) {

 
  return (
    <div className="Table">
      <div className="Table-header"><h1>Crypto Data</h1></div>
      <table>
        <tbody>
              <tr>
                 
                <th>Name</th>
                <th>Symbol</th>
                <th>Current Price</th>
                <th>Total Volume</th>
                <th>Change Percentage</th>
                <th>Market Cap</th>
              </tr>
              {/* using map method to get the access the data */}
          {  cryptoData.map(function(cryptoData, key) {
            return (
              // each table row has a unique key.
              <tr key={key}>  
               
                  <td id='wrapper'> <span> <img src={cryptoData.image} alt="crypto logo" /> </span> <span> { cryptoData.name }</span></td>  
                  {/* converting symbol value in uppercase */}
                  <td>{ cryptoData.symbol.toUpperCase() } </td> 
                  <td>${ cryptoData.current_price  } </td>
                  <td>${ cryptoData.total_volume } </td>
                  {/* if percentage change is positive it will show in green and if 
                  it is in negative it will show in red */}
                  {cryptoData.ath_change_percentage > 0 ?   <td style={{color:"green"}}>{ cryptoData.ath_change_percentage }% </td> : <td style={{color:"red"}}>{ cryptoData.ath_change_percentage      }% </td>}
                  <td>Mkt Cap:{ cryptoData.market_cap } </td>
                  


                   
              </tr>
          )})}
            <tr>
              
            </tr>
             
        </tbody>
  
   
  
      </table>
      
    </div>
  );
}

export default Table;


