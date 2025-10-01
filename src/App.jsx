import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'></div>
      <HeroSection/>
      <FeatureSection/>
      <WorkFlow/>
    </>
  )
}

export default App
