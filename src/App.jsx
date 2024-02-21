import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, Tech } from './components'
import reactLogo from './assets/react.svg'
import './index.css'

function App() {
  useEffect(() => {
    async function doStuff() {
      if (!window.crossOriginIsolated) {
        console.log('performance.measureUserAgentSpecificMemory() is only available in cross-origin-isolated pages');
      } else if (!performance.measureUserAgentSpecificMemory) {
        console.log('performance.measureUserAgentSpecificMemory() is not available in this browser');
      } else {
        let result;
        try {
          result = await performance.measureUserAgentSpecificMemory();
        } catch (error) {
          if (error instanceof DOMException && error.name === 'SecurityError') {
            console.log('The context is not secure.');
          } else {
            throw error;
          }
        }
        console.log(result);
      }
    }

    doStuff();
  }, []);


  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App
