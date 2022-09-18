import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
  Navbar,
  About,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:uuid" element={<CryptoDetails />} />
                
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Cryptoverse<br />
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
          </Space>
            <Typography.Text 
            style={{ color: 'white', textAlign: 'center' }}
            italic='true'
            >John W Driscoll  - Cryptoverse (MVP)</Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default App;
