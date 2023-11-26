import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import './App.css'
import { useState } from 'react';
import {GoHubot} from "react-icons/go"
import {IoIosCloseCircle} from "react-icons/io"



function App() {


  const [show , setShow] = useState(false);

  const showBotHandler = () =>{
    setShow(!show);
  }

  return (
    <div className="App">
      <div>
        <h1 className='check'>First Boat Click on Bote </h1>
      </div>
      <button onClick={showBotHandler}>{show ? <IoIosCloseCircle size={70}/> : <GoHubot size={70}/>}</button>
      {
        show ? <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
         /> : null
      }
      
    </div>
  );
}

export default App;
