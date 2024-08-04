import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface DataTableProps {
  symbol: string;
}

const DataTable: React.FC<DataTableProps> = ({ symbol }) => {
  const data = useSelector((state: RootState) => state.stockData[symbol] || []);

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry: { time: string; price: number }, index: number) => (
          <tr key={index}>
            <td>{entry.time}</td>
            <td>{entry.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
