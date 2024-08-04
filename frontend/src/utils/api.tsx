import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchStockData = async (symbol: string) => {
  const response = await axios.get(`${apiUrl}/api/stocks/${symbol}`);
  console.log("🚀 ~ fetchStockData ~ response:", response)
  return response.data;
};
