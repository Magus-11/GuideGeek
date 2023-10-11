import React from 'react';
import './css/WidgetContent.css';

export default function WidgetContent() {
  return (
    <div className= "widget__contents">
      <div className="widget__content">
        <img src="https://www.rlogical.com/wp-content/uploads/2023/03/MERN-Stack-Best-for-Developing-Web-Apps.webp" alt="" />
        <div className="widget__contentTitle">
            <h5>MERN Developer</h5>
            <p>The Best MERN Developper Community </p>
        </div>
      </div>
    </div>
  )
}
