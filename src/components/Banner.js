import React from 'react';
import Image from '../assets/avatar.svg';
import {FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Button } from 'react-scroll';

const Banner = () => {
  return(
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('up',0.5)} inital="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}}className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Jawad <span>Shaikh</span>
              </motion.h1>
              <motion.div variants={fadeIn('up',0.5)} inital="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}}className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                <span className="text-white mr-4">I am a</span>
                <TypeAnimation sequence={[
                  'Computer Science Student',
                  2000,
                  'Problem Solver',
                  2000,
                  'Lifelong Learner',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                />
              </motion.div>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0">
                  fnlkanlkflankflknalknaflnk
                </p>
                <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                  <button className="btn btn-long">Contact Me</button>
                  <a href="#" className="text-gradient btn-link">My projects</a>
                </div>
                <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                  <a href="#">
                    <FaGithub/>
                  </a>
                </div>
          </div>
          <div className='hidden lg:flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
            <img src={Image} alt=""/>
          </div>
        </div>
      </div>
    </section>
)};

export default Banner;
