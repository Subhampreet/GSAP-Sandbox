import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRef, useEffect } from 'react'
import { gsap, Power3 } from 'gsap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  var circle = useRef(null)
  var circleRed = useRef(null)
  var circleBlue = useRef(null)

  useEffect(() => {
    gsap.to(
      circle.current,
      { opacity: 1, x: -100, ease:Power3.easeOut, duration:3}
    )
    gsap.to(
      circleRed.current,
      { opacity: 1, x: -100, ease:Power3.easeOut, delay:.2, duration:3}
    )
    gsap.to(
      circleBlue.current,
      { opacity: 1, x: -100, ease:Power3.easeOut, delay:.4, duration:3}
    )
  }, [])

  return (
    <>      
      <main className={`${styles.main} ${inter.className}`}>        
        <div className='circle-container'>
          <div ref={circle} className='circle'></div>
          <div ref={circleRed} className='circle red'></div>
          <div ref={circleBlue} className='circle blue'></div>
        </div>
      </main>
    </>
  )
}
