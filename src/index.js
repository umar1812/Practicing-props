import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import Profile from './App'

const employee = {
  name: 'Umar',
  location: 'Satara, Maharashtra',
  bloodGroup: 'A+',
  age: 22,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}


ReactDOM.render(
  <>
    <Profile employee={employee} />
  </>
  , document.getElementById('root')
)