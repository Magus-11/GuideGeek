import React from 'react';
import GGBox from './GGBox';
import Post from './Post';
import './css/Feed.css';
export default function Feed() {
  return (
    <div className='feed'>
      <GGBox/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
