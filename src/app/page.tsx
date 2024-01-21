"use client"
import { motion, useScroll } from 'framer-motion'

const gridContainerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const gridSquareVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
  }
}

const Home = () => {
  const { scrollYProgress: completionProgress } = useScroll()
  return (
    <div className='flex flex-col gap-10 overflow-x-hidden'>
      <motion.section
        className='grid grid-cols-3 p-10 gap-10'
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10">
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-lg"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-full"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>

        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10">
          <motion.div
            className="w-1/3 h-1/3 shadow-md bg-rose-500"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"]
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </motion.div>

        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10">
          <motion.button
            className='bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-200 font-light tracking-widest'
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2, backgroundColor: "#d1d5db", color: "black" }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          >
            Click Me
          </motion.button>
        </motion.div>

        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10">
          <motion.div
            className="w-1/3 h-1/3 rounded-2xl bg-orange-500 cursor-grab"
            drag
            dragConstraints={{
              top: -25,
              right: 25,
              bottom: 25,
              left: -25
            }}
            dragTransition={{
              bounceDamping: 10,
              bounceStiffness: 300
            }}
          />
        </motion.div>

        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10">
          <motion.div className="w-48 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div className="w-full bg-gray-400 rounded-xl h-full origin-bottom" style={{ scaleY: completionProgress }} />
          </motion.div>
        </motion.div>

        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10">
          <motion.svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-1/2 stroke-amber-500 stroke-[0.5]'>
            <motion.path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
          </motion.svg>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home