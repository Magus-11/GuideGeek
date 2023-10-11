import React, {useState} from 'react';
import logo from './img/2022.png';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import {AssignmentTurnedInOutlined, PeopleAltOutlined,NotificationsOutlined, Search, ExpandMore} from '@material-ui/icons';
import {Avatar, Button, Input} from '@material-ui/core';
import Modal from 'react-responsive-modal';
import CloseIcon from '@material-ui/icons/Close';
import 'react-responsive-modal/styles.css';
import './css/GGHeader.css';

export default function GGHeader() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const Close = (<CloseIcon/>);


  return (
    <div className="ggHeader">
      <div className="ggHeader-content">
        <div className="ggHeader__logo">
        <img src={logo} alt="" style={{width:"45px", borderRadius:"10%"}}/>
        </div>
        <div className="ggHeader__icons">
            <div className="ggHeader__icon"><HomeIcon/></div>
            <div className="ggHeader__icon"><FeaturedPlayListOutlinedIcon/></div>
            <div className="ggHeader__icon"><AssignmentTurnedInOutlined/></div>
            <div className="ggHeader__icon"><PeopleAltOutlined/></div>
            <div className="ggHeader__icon"><NotificationsOutlined/></div>
        </div>
        <div className="ggHeader__input">
            <Search/>
            <input type="text" placeholder = 'Search Questions'/>
        </div>
        <div className="ggHeader__Rem">
            <Avatar/>
        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
        <Modal open = {isModalOpen} closeIcon= {Close}
        onClose={() => setIsModalOpen(false)}
        closeOnEsc
        center
        closeOnOverlyClick = {false}
        style = {{
          overlay: {
            height: "auto",
          },
        }} >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className = 'avatar'/>
            <div className="modal__scope">
              <PeopleAltOutlined/>
              <p>Public</p>
              <ExpandMore/>
            </div>
          </div>
          <div className="modal__Field">
            <Input type = "text" placeholder = "Start your question with 'What', 'How' & 'Why' etc."/>
            <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
              <input type="text"
              value = {inputUrl}
              onChange = {(e) => setInputUrl(e.target.value)}
              style={{
                margin: "5px 0",
                border: "1px solid lightgray",
                padding: "10px",
                // outline: "2px solid #000",
              }} 
              placeholder="Optional: include a link that give context"/>
              {inputUrl !== "" && <img style = {{height:"40vh", objectFit:"contain"}} src={inputUrl} alt="displayimage" />}
            </div>
          </div>
          <div className="modal__buttons">
            <button className = "cancel" onClick = {() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="submit" className = "add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  </div>
  )
}
