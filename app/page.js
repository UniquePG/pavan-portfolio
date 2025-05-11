'use client'

import './page.css';
import Navbar from '@/src/components/Navbar/Navbar';
import Hero from '@/src/components/Hero/Hero';
import SkillsSection from '@/src/components/Skills/SkillsSection';
import TechnicalExperties from '@/src/components/TechnicalExperties/TechnicalExperties';
import Projects from '@/src/components/Projects/Projects';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import ContactUs from '@/src/components/Subscribe/Subscribe';
import Footer from '@/src/components/Footer/Footer';
import Experience from '@/src/components/Experience/ExperienceSection';


export default function Home() {
  return (
    <main>
      <Navbar/>
      {/* hero section */}
      <Hero/>
      {/* Skills Section */}
      <SkillsSection />
      {/* Experience Section */}
      <Experience />
      {/* Technical Expertise */}
      {/* <TechnicalExperties /> */}
      {/* Projects Section */}
      <Projects />
      {/* Professional Achievements */}
      <Testimonials/>
      {/* Contact Section */}
      <ContactUs />
      <Footer/>
    </main>
  )
}
