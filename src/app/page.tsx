import HighLight from "./components/home/HighLights";
import Hero from "./components/home/Home"
import WhatWeDo from "./components/home/WhatWeDo";
import WorkFlow from "./components/home/BusinessModel";
import InvestMent from "./components/home/Investment"
import Services from "./components/home/Service"
import BusinessModel from "./components/home/Business"
import WhyChooseUs from "./components/home/WhyChoose";
import Faq from "./components/home/Faq"
export default function Home() {
  return (
    <>
    
    <Hero/>
     <HighLight />
     <WhatWeDo />
     <WorkFlow />
     <InvestMent />
     <Services />
     <BusinessModel />
     <WhyChooseUs />
     <Faq />
     
    </>

  );
}
