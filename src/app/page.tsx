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
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}>
          </motion.div>
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-full"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}></motion.div>
        </motion.div>
        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"></motion.div>
        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"></motion.div>
        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"></motion.div>
        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"></motion.div>
        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"></motion.div>
      </motion.section>
    </div>
  )
}

export default Home