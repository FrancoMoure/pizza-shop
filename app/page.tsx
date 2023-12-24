
import Hero from "@/components/main/Hero";
import Shops from "@/components/main/Shops";
import Pizzas from "@/components/main/Pizzas";
import Footer from "@/components/main/Footer";
import SecondHero from "@/components/main/SecondHero";

export default function Home(){
  return(
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Pizzas/>
        <SecondHero/>
        <Shops/>
        <Footer/>  
      </div>
    </main>
  )
}

