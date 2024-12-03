import axios from 'axios';
import { apiKey } from '../constants/constant';

const forecastEndpoint = params => 'http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=1&aqi=no&alerts=no';
