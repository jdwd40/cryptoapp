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
        <p>Crytoverse is a demo and (and possible mvp) built with:</p>
        <ul>
          <li>React.js</li>
          <li>Redux.js</li>
          <li>Ant Design UI</li>
        </ul>
        <p>It uses 2 APi's from <a href="https://rapidapi.com/">rapidAPI.com</a> Coinranking and Microsoft Bing News.</p>
      </Typography.Text>
   </>
  )
}

export default About;