import { fetchAndSaveStockData } from '../controllers/stockController';

const symbols = ['GOOG', 'BTC', 'ETH', 'AAPL', 'TSLA'];

setInterval(() => {
  symbols.forEach(symbol => fetchAndSaveStockData(symbol));
}, 60000); // Poll every minute
