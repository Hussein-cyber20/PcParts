import React from 'react'

function About() {
  return (
    <section className="page-section container">
      <div className="page-intro">
        <p className="eyebrow">ABOUT US</p>
        <h1>Technology made<br /><span>easy to explore.</span></h1>
        <p>
          PcParts is a student-created computer parts store website. It was designed
          to help visitors browse computer components and learn about parts used in a PC.
        </p>
      </div>

      <div className="about-layout">
        <img
          src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=85"
          alt="Computer desk"
        />
        <div>
          <p className="eyebrow">OUR PURPOSE</p>
          <h2>A simple store experience</h2>
          <p>
            The website includes products such as graphics cards, processors, memory,
            storage, motherboards and computer cases.
          </p>
          <p>
            This project demonstrates React components, props, routing, state,
            event handling, lists and responsive CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
