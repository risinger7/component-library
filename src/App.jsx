import { useState } from 'react'

import './assets/css/App.css'
import urls from './assets/urls.js'
import Button from './Button'
import Alert from './Alert'
import Card from './Card'
import Badge from "./Badge"
import Modal from './Modal'


function App() {

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  function handleDismiss(e) {
    e.target.className = "hidden"
  }

  return (
    <div className='outer marg-xl'>

      <div className='buttons-container'>
        <h1 className='marg-big'>Buttons</h1>
        <div className="flex">
          <Button color={"red"} size={"small"} isDisabled={false} title={"button 1"}/>
          <Button color={"white"} size={"big"} isDisabled={true} title={"button 2"}/> 
        </div>
      </div>

      <div className='alerts-container'>
        <h1 className='marg-big'>Alerts</h1>
        <Alert color={"red"} icon={"icon1"} func={handleDismiss}></Alert>
        <Alert color={"blue"} icon={"icon2"} func={handleDismiss}></Alert>
        <Alert color={"white"} icon={"icon2"} func={handleDismiss}></Alert>
      </div>

      <div className='badges-container'>
        <h1 className='marg-big'>Badges</h1>
        <div className='flex'>
          <Badge title="Brilliant tip" size="small" color="blue" icon="icon1"/>
          <Badge title="Muted the mute" size="medium" color="red" icon="icon2"/>
          <Badge title="Time is running out!" size="big" color="white" icon="icon3"/>
        </div>
      </div>

      <div className='cards-container'>
        <h1 className='marg-big'>Cards</h1>
        <div className='flex marg'>
          <Card 
            href={urls.headphonesGoogle}
            imgSrc={urls.headphones}
            text="Listen up, here are awesome headphones!"
            title="Headphones for your everyday needs!"
          />

          <div className='marg-left'></div>
            <Card 
              href={urls.watchesGoogle}
              imgSrc={urls.watches}
              title="Watches of the world!"
              text="Watch out for these brand new watches!"
            />   
        </div>
      
      </div>

      <div className='modals-container'>
        <h1 className='marg-big'>Modal</h1>
        <div>
          <button className='button marg' onClick={() => setOpen1(true)}>Modal 1</button>
          <button className='button marg' onClick={() => setOpen2(true)}>Modal 2</button>
          <Modal open={open1} onClose={ () => { setOpen1(false)}} size="big"/>
          <Modal open={open2} onClose={ () => { setOpen2(false)}} size="small"/>
        </div>
      </div>
      
    </div>
  )
}

export default App
