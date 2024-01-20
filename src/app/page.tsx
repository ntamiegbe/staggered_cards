"use client"
import { motion } from 'framer-motion'

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
            transition={{bounceDamping: 10, bounceStiffness: 600}}
          >
            Click Me
          </motion.button>
        </motion.div>

        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"></motion.div>
        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"></motion.div>
        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"></motion.div>
      </motion.section>
    </div>
  )
}

export default Home