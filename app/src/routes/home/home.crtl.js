'use strict';

// 모듈
const express = require('express');
const User = require('../../models/User')

const output = {
  /**
   * 홈페이지로 이동해주는 함수
   * @param { express.Request } req 
   * @param { express.Response } res 
   */
  homepage: (req, res) => {
    res.render('home/index')
  },

  /**
   * 로그인 페이지로 이동해주는 함수
   * @param { express.Request } req
   * @param { express.Response } res 
   */
  login: (req, res) => {
    res.render('home/login')
  },

  /**
   * 회원가입 페이지로 이동해주는 함수
   * @param { express.Request } req 
   * @param { express.Response } res 
   */
  register: (req, res) => {
    res.render('home/register')
  },
}

const process = {
  /**
   * 로그인 API
   * @param { Request } req 
   * @param { Response } res 
   */
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },

  /**
   * 회원가입 API
   * @param { Request } req 
   * @param { Response } res 
   */
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  },
}

module.exports = {
  output,
  process
}