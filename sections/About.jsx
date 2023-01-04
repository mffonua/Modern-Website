'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';


import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';




const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'/>
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
<TypingText title='| About The Metaverse' textStyles='text-center' /> 
    <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
    className='mt-[80px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
      What is  
     <span className='font-extrabold text-white'>The Metaverse</span>
      ? Well this is the thing of the 
      <span className='font-extrabold text-white'> future</span>
      , where you are able to enjoy the virtual world 
      by feeling like your really there. You can feel what you feel in this world, because in all of the 
      <span className='font-extrabold text-white'> madness of the Metaverse</span>
      today using only 
      <span className='font-extrabold text-white'> Virtual Reality </span>
       devices you can easily explore the world you want. Make your dreams a reality and 
      <span className='font-extrabold text-white'> explore </span>
      the madness of The Metaverse 
      by scrolling on down

    </motion.p>
    </motion.div>
    About section
  </section>
);

export default About;
