import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/MyNav';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import ImageGallery from './components/ImageGallery';
import ImageDetail from './components/ImageDetail';
import BlogSection from './components/BlogSection';
import BackOffice from './components/BackOffice';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path ="/" element = {<Welcome /> } />
        <Route path ="/blogSection" element = {<BlogSection />} />
        <Route path ="/imageGallery" element = {<ImageGallery />} />
        <Route path ="/imageDetail" element = {<ImageDetail />} />
        <Route path ="/backOffice" element = {<BackOffice />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
