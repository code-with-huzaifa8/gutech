import React from 'react'
import './App.css'
import Greeting from './component/Greeting'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Greeting/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
