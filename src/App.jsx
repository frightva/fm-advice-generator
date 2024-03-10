import React, { useEffect, useState } from 'react'
import './App.css'
import diceLogo from '../src/assets/images/icon-dice.svg'

function App() {
  const [data, setData] = useState({slip: {
    id: 1,
    advice: 'Random Advice :)'
  }})
  const [randomAdvice, setRandomAdvice] = useState(false)

  useEffect(() => {
    const fetchData = async ()  => {
      const getData = await fetch("https://api.adviceslip.com/advice")
      const json = await getData.json()
      setData(json)
    }   
    fetchData()
  }, [randomAdvice])


  return (
    <>
      <main>
        <section>
          <div className="container | padding-inline-400 padding-top-400">
            <p className='text-primary-500 fw-extra-bold padding-top-400 fs-secondary'>
              ADVICE  
              <span>
                #{data.slip.id}
              </span> 
            </p>
            <h1 className='fw-extra-bold text-primary-400 fs-primary padding-block-700'>
              "{data.slip.advice}"
            </h1>
            <div className='img | padding-top-500'></div>
            <button onClick={() => setRandomAdvice(!randomAdvice)} className='btn'>
              <img src={diceLogo} alt="diceLogo" />
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
