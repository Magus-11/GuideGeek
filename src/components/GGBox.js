import React from 'react';
import {Avatar} from '@material-ui/core';
import './css/GGBox.css';

export default function GGbox() {
  return (
    <div className='ggBox'>
      <div className="ggBox__info">
        <Avatar/>
      </div>
      <div className="ggBox__gg">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  )
}
