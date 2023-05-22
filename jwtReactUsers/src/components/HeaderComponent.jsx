import React from "react"
import '../sass/componentSass/HeaderComponent.scss'
import logo from '../assets/images/logos/logo.svg'


function HeaderComponent({ title, subtitle }) {
  return (
    <header className='containerHeaderTitle'>
      <img src={logo} className="App-logo" alt="logo" />
      <header className="containerHeaderTitleText">
        <h2>{title}</h2>
        <h6>{subtitle}</h6>
      </header>
    </header>
  )
}

export default HeaderComponent