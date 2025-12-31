import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero.jsx";
import Beyond from "./components/Beyond.jsx"
import Notice from "./components/Notice.jsx"
import WhatWeOffer from './components/WhatWeOffer.jsx';
import Problem from './components/Problem.jsx';
import OurProcess from './components/Ourprocess.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Client from "./components/Client.jsx"
import FAQ from './components/FAQ.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <div className='bg-black'>
        <Hero />
        <section id="beyond">
          <Beyond />
        </section>
        <section id="notice">
          <Notice />
        </section>
        <section id="services">
          <WhatWeOffer />
        </section>
        <section id="problem">
          <Problem />
        </section>
        <section id="process">
          <OurProcess />
        </section>
        <section id="case-studies">
          <CaseStudies />
        </section>
        <section id="testimonials">
          <Client />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Form />
        </section>
        <Footer />
      </div>
    </>
  )
}
export default App
