'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Tell friends About Us" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Tell friends About Us , You And Them Will Turn The World Upside Down Together
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[69px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        {/* <div className="absolute top-[32%] left-[62%] w-[20px] h-[20px] p-[6px] rounded-full bg-[#63e957]" />
        <div className="absolute sm:top-10 bottom-40 left-20 w-[20px] h-[20px] p-[6px] rounded-full bg-[#63e957]" />
        <div className="hidden lg:block absolute bottom-20 right-20 w-[20px] h-[20px] p-[6px] rounded-full bg-[#63e957]" />
        <div className="hidden lg:block absolute bottom-[20%] left-[15%] w-[20px] h-[20px] p-[6px] rounded-full bg-[#63e957]" />
        <div className="absolute top-0 right-[22%] w-[20px] h-[20px] p-[6px] rounded-full bg-[#63e957]" />
        <div className="absolute top-[45%] left-[75%] w-[20px] h-[20px] p-[6px] rounded-full bg-[#63e957]" />
        <div className="absolute top-[15%] right-[10%] w-[20px] h-[20px] p-[6px] rounded-full bg-[#63e957]" />
        <div className="absolute bottom-[25%] left-[50%] w-[20px] h-[20px] p-[6px] rounded-full bg-[#63e957]" /> */}

      </motion.div>
    </motion.div>
  </section>
);

export default World;
