'use client'

import React from "react"
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop, slideInFromRight } from "@/utils/motion"


const PizzasText = () => {
    return(
        <div className="w-full h-auto flex flex-col items-center justify-center">
           

            <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[50px] text-white font-medium mt-[10px] text-center mb-[15px]"
            >
                Try our Pizzas!
            </motion.div>

            <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-[40px] text-gray-200 mb-10 mt-[10px] text-center"
            >
                All tastes, all prices
            </motion.div>
        </div>
    )
}

export default PizzasText 

