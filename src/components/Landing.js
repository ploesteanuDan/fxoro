import React from 'react'

import "../styles/landing.scss"

export default function Landing() {
  return (
    <div>
      <Hero />
    </div>
  )
}

function Hero() {
  return (
    <div className="hero">
      <div className="logo">
        <img src="" />
      </div>
      <div className="text">
        <div className="title">
          <p className="dark">What does the</p>
          <p className="light">future hold</p>
          <p className="dark">?</p>
        </div>
        <p className="paragraph">
          The global financial landscape continues to evolve, presenting new challenges and opportunities. At
          <mark className="bold">
            {" "}FX
          </mark>
          <mark className="orange">
            ORO
          </mark>
          , we understand that staying ahead in these dynamic times requires not just adaptability, but also a deep understanding of the underlying trends shaping our economic future.

        </p>
      </div>
      <div className='cta'>
        <button>Learn more</button>
        <div className='warning'>
          <p>Trading is risky.</p>
          <p>You may lore your entire capital.</p>
        </div>
      </div>
      <div className='image-container'>
        <img src="" className='bg-image' />
      </div>
    </div>
  )
}