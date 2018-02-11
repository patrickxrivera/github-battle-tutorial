import React from 'react';
import { Link } from 'react-router-dom';

function Home () {
  return (
    <div className='Home__container'>
      <h1 className="Home__header">Github Battle</h1>
      <p className="Home__description">Battle your friends... and stuff.</p>
      <Link className='button' to='/battle'>Battle</Link>
    </div>
  )
}

export default Home;
