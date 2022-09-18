import React from 'react'
import { Typography } from 'antd';

const { Title} = Typography;

const About = () => {
  return (
   <>
    <Title level={2} className="heading">
       About Cryptoverse
      </Title>
      <Typography.Text>
        <p>Cryptoverse is a demo and (and possible mvp) built with:</p>
        <ul>
          <li>React.js</li>
          <li>Redux.js</li>
          <li>Ant Design UI</li>
        </ul>
        <p>It uses 2 APi's from <a href="https://rapidapi.com/">rapidAPI.com</a> Coinranking and Microsoft Bing News.</p>
        <h5>Known Bugs - cant easily be fixed for now - but will be fixed</h5>
        <ul>
          <li>24hour volume shows undefined in coin view</li>
          <li>Price to USD shows comma instead of decimal place in coin view</li>
        </ul>
      </Typography.Text>
   </>
  )
}

export default About;