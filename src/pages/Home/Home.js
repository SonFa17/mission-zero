import React from 'react'
import ImageGallery from '../../components/ImageGallery'
import MainHeader from '../../components/MainHeader'
import NavBar from '../../components/NavBar'

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <MainHeader></MainHeader>
      <ImageGallery/>
    </div>
  )
}

export default Home