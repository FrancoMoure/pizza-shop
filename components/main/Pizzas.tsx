import{
   
  Skill_data,
} from "@/constants";


import React from "react";
import PizzaDataProvider from '../sub/PizzaDataProvider'
import PizzasText from '../sub/PizzasText'


const Pizzas = () => {
    return(
        <section
        id="pizzas"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
        style={{transform: 'scale(0.9)'}}
        >

            <PizzasText/>

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Skill_data.map((image, index) => (
                    <PizzaDataProvider
                    key={index}
                    src={image.Image}
                    width={200}
                    height={200}
                    index={index}
                    />
                ))}
            </div>

            
       

        <div className="w-full h-full absolute">
            <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                <video 
                className="w-full h-auto"
                preload='false'
                playsInline
                loop
                muted
                autoPlay
                src="/pizza2.webm"
                />
            </div>
        </div>
        </section>
    )
}

export default Pizzas
