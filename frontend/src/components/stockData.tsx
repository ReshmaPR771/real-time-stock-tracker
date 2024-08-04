// src/components/StockData.tsx
import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../utils/api';

interface StockDataProps {
  symbol: string;
}

interface Stock {
  _id: string;
  symbol: string;
  time: string;
  price: number;
}

const StockData: React.FC<StockDataProps> = ({ symbol }) => {
  const [data, setData] = useState<Stock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchStockData(symbol);
        console.log("🚀 ~ getData ~ result:", result)
        setData(result);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [symbol]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Data for {symbol}</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {data.map(stock => (
            <tr key={stock._id}>
              <td>{new Date(stock.time).toLocaleTimeString()}</td>
              <td>{stock.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockData;
