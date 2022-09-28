'use strict';

// 모듈
const express = require('express');

/**
 * 홈페이지로 이동해주는 함수
 * 
 * @param { express.Request } req 
 * @param { express.Response } res 
 */
const homepage = (req, res) => {
  res.render('home/index')
};

/**
 * 로그인 페이지로 이동해주는 함수
 * 
 * @param { express.Request } req
 * @param { express.Response } res 
 */
const login = (req, res) => {
  res.render('home/login')
}

module.exports = {
  homepage,
  login
}