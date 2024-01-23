import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return <p>{title}</p>;
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
        orci nisl. Praesent ac mi feugiat, auctor elit dapibus, elementum erat.
        Duis placerat odio eget dapibus interdum. Suspendisse et arcu ut quam
        ullamcorper imperdiet. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec a nisi nec urna iaculis rhoncus id id nunc. Nam
        ut justo non arcu laoreet iaculis in sed urna. Nulla eu metus nisl.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
