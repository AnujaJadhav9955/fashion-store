import React from 'react'
import HeroSection from './components/HeroSection'

function About() {
  const data = {
    name: 'Fashion Ecommerce'
  }
  return (
    <div>
      <HeroSection data={data}/>
    </div>
  )
}

export default About
