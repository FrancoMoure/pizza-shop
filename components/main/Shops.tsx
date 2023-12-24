import React from "react";
import ShopCard from '../sub/ShopCard'

const Shops = () => {
    return(
        <div className="flex flex-col items-center justify-center py-20" id="shops">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Our Stores around the U.S.A
            </h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ShopCard
                src='/san-francisco.jpg'
                title='Visit our shops in S.F.'
                description= 'We have 5 shops in the city of the bridge!'
                />

                <ShopCard
                src='/new-york.jpg'
                title='Visit our shops in N.Y.'
                description= 'The city that never sleeps has 10 of our shops!'
                />


                <ShopCard
                src='/chicago.jpg'
                title='Visit our shops in Chicago'
                description= 'We have 2 stores in Chicago.'
                />
            </div>
        </div>
    )
}

export default Shops

