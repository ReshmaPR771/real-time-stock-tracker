import { Request, Response } from 'express';
import Stock from '../models/stockModel';
import axios from 'axios';

// Fetch stock data and save it to MongoDB
export const fetchAndSaveStockData = async (symbol: string) => {
  try {
    const response = await axios.get(`https://api.livecoinwatch.com/coins/${symbol}`);
    const price = response.data.price;
    const newStock = new Stock({ symbol, price });
    await newStock.save();
  } catch (error) {
    console.error(`Error fetching stock data for ${symbol}:`, error);
  }
};

// Get latest 20 entries for a stock
export const getStockData = async (req: Request, res: Response) => {
  const { symbol } = req.params;
  const stocks = await Stock.find({ symbol }).sort({ timestamp: -1 }).limit(20);
  res.json(stocks);
};
