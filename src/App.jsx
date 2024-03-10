import React from 'react'
import './App.css'
import diceLogo from '../src/assets/images/icon-dice.svg'
import desktopDivider from '../src/assets/images/pattern-divider-desktop.svg'
import mobileDivider from '../src/assets/images/pattern-divider-mobile.svg'

function App() {

  return (
    <>
      <main>
        <section>
          <div className="container | padding-inline-400 padding-top-400">
            <p className='text-primary-500 fw-extra-bold padding-top-400 fs-secondary'>ADVICE  <span>#117</span> </p>
            <h1 className='fw-extra-bold text-primary-400 fs-primary padding-block-700'>
              "It is easy to sit up and take notice, what's difficult is getting up and taking action"
            </h1>
            <div className='img | padding-top-500'></div>
            <button className='btn'>
              <img src={diceLogo} alt="diceLogo" />
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
