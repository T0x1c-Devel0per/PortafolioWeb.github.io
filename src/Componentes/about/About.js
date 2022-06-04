import React from 'react';
import './About.css';
import Photo from '../../media/Photo3.jpg'



const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Sobre mi</h3>
            <p>Qui magna cillum consequat esse esse commodo non adipisicing labore incididunt quis eu excepteur. Veniam est in nulla non ut in. Commodo id deserunt occaecat magna officia do in ipsum. Quis deserunt amet tempor esse deserunt dolore aliqua. Proident aliquip consequat consequat ullamco ullamco ex adipisicing veniam proident occaecat. Sunt irure dolore enim ut ex velit eu magna mollit anim sit quis consequat. Et quis dolor aliquip minim sint consectetur amet amet aliquip duis tempor.</p>
        </div>
        <div className='about-img'>
          <img className='photo' src = {Photo}/>
        </div>
    </div>
  )
}


export default About