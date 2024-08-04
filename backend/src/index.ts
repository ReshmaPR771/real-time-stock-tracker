import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001', // Adjust if your frontend is on a different port
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/stockdata', {
 
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const StockSchema = new mongoose.Schema({
  symbol: String,
  time: Date,
  price: Number,
});

const Stock = mongoose.model('Stock', StockSchema);

// Function to fetch and store data
const fetchDataAndStore = async () => {
  try {
    const response = await axios.post(
      'https://api.livecoinwatch.com/coins/list',
      {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: 0,
        limit: 50,
        meta: true
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '0adfb74f-11ab-4a97-977b-8abee977a247' //  API key
        }
      }
    );

    // Example symbols for processing
    const symbols = ['BTC', 'ETH']; // Adjust as needed

    for (const symbol of symbols) {
      const data = response.data.find((coin: any) => coin.code === symbol);
      if (data) {
        await Stock.create({
          symbol: data.code,
          time: new Date(),
          price: data.rate,
        });
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Poll every 10 seconds
setInterval(fetchDataAndStore, 10000);

// API route to get recent data
app.get('/api/data/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  const data = await Stock.find({ symbol }).sort({ time: -1 }).limit(20);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
