const debug = require('debug')('cheapestesla');
const express = require('express');
const dotenv = require('dotenv');

dotenv.load();
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')();
const scrapers = require('./lib/scrapers');

scrapers.autotrader();