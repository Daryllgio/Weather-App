import axios from 'axios';
import { apiKey } from '../constants/constant';

const forecastEndpoint = params => 'http://api.weatherapi.com/v1/forecast.json?key=b4ebc245f1774f7fa1474651240312&q=London&days=1&aqi=no&alerts=no';
