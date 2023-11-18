

import './App.css'
import HeroSection from './Components/Herosection/HeroSection'
import AllCards from './Components/Projectsection/AllCards'
import Skills from './Components/Skillssection/Skills'


function App() {


  return (
    <div className='lg:py-8 lg:px-20 p-1 flex flex-col gap-x-12'>
      <HeroSection/>
      <AllCards/>
      <Skills/>

    </div>
  )
}

export default App
