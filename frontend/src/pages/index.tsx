import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../utils/api';
import { setStockData } from '../redux/action';
import DataTable from '../components/dataTable';
import Modal from '../components/Modal';

const HomePage: React.FC = () => {
  const [symbol, setSymbol] = useState('GOOG');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStockData(symbol);
      dispatch(setStockData({ symbol, data }));
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000); // Fetch every 10 seconds

    return () => clearInterval(intervalId);
  }, [symbol, dispatch]);

  return (
    <div>
      <h1>Stock Data</h1>
      <button onClick={() => setShowModal(true)}>Change Stock/Crypto</button>
      <DataTable symbol={symbol} />
      {showModal && <Modal onClose={() => setShowModal(false)} onChange={setSymbol} />}
    </div>
  );
};

export default HomePage;
