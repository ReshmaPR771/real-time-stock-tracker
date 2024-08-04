// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import App from './pages/_app';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

// interface StockData {
//   number: number;
//   time: string;
//   price: string;
// }

// const StockDataTable: React.FC = () => {
//   const [data, setData] = useState<StockData[]>([]);
//   const [symbol, setSymbol] = useState('bitcoin'); // Default symbol

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/api/data/${symbol}`);
//         setData(response.data);
//         console.log("🚀 ~ fetchData ~ response:", response)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//     const intervalId = setInterval(fetchData, 10000); // Poll every 10 seconds

//     return () => clearInterval(intervalId); // Cleanup on component unmount
//   }, [symbol]);

//   return (
//     <div>
//       <h1>Stock Data</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Time</th>
//             <th>Price (USD)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((entry) => (
//             <tr key={entry.number}>
//               <td>{entry.number}</td>
//               <td>{entry.time}</td>
//               <td>{entry.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={() => setSymbol(prompt('Enter new symbol:', symbol) || symbol)}>Change Symbol</button>
//     </div>
//   );
// };

// ReactDOM.render(<StockDataTable />, document.getElementById('root'));
// src/App.tsx
import React from 'react';
import StockData from './components/stockData';

const App: React.FC = () => {
  const symbols = ['GOOG', 'BTC', 'ETH'];

  return (
    <div>
      <h1>Stock Data Viewer</h1>
      {symbols.map(symbol => (
        <StockData key={symbol} symbol={symbol} />
      ))}
    </div>
  );
};

export default App;
