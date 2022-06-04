import React from 'react'
import './Cover.css'
import coverVideo from '../../media/covervideo.mp4';
const Cover = () => {
   return (
       <div className='cover-container'>
           <video className='video' src = {coverVideo} autoPlay loop muted />
           <h1>Juan Sanchez</h1>
           <p>Programador | Diseñador | Fotografo</p>
       </div>
   ) 
};

export default Cover;
