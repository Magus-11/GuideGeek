import React from 'react';
import GGHeader from './GGHeader';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import './css/GG.css'
export default function GG() {
  return (
    <div className='GG'>
      <GGHeader/>
      <div className="GG__contents">
        <div className="GG__content">
            <Sidebar/>
            <Feed/>
            <Widget/>
        </div>
      </div>
    </div>
  )
}
