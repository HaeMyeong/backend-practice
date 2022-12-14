'use strict';

// 모듈
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// 라우팅
const home = require('./src/routes/home');

// 엡 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

// use: 미들 웨어를 등록해주는 매서드
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);

module.exports = app