import React from 'react';
import './App.css';
// import Greeting from './component/Greeting'
// import Header from './component/Header'
// import Content from './component/Content'
// import Footer from './component/Footer'
import Navbar from './component/Task 7/Navbar';
import LandingPage from './component/Task 7/LandingPage';
import Form from './component/Task 7/form';
import Footer from './component/Task 7/footer'
const App = () => {
  return (
    <div className='App'>
      {/* <Header/>
      <Greeting/>
      <Content/>
      <Footer/> */}
      <Navbar/>
      <LandingPage/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
