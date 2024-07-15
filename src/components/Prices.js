import React, { useEffect, useState } from "react";
import { bundleData } from "../data";
import Bundles from "./Bundles";

const Prices = () => {
  const[index,setIndex]=useState(0);
  const[bundles,setBundles]=useState([]);

  useEffect(()=>{
    setBundles(bundleData[0].services);
  },[])

  return (
    <section className="py-12  lg:py-24">
      <div className="text-center">
        <div className="text-center mb-20">
          <div className="text-orange font-semibold mb-3">our prices</div>
          <h2 className="h2 mb-3">Grooming Tails</h2>
        </div>

        <div>
          <p className="text-lg text-blue text-center my-4 py-10 ">
            Welcome to our pet grooming blog, where we share everything you need
            to know about keeping your furry friends looking and feeling their
            best. Whether you're a dog lover, a cat lover, or both, our blog is
            dedicated to helping you take care of your pets' grooming needs.
          </p>

          <p className="text-lg text-blue text-center my-4 py-10 px-10">
            Our team of experienced groomers and pet enthusiasts are passionate
            about sharing their knowledge and expertise with you, so you can
            feel confident in your ability to make informed decisions when
            visiting a professional groomer.
          </p>
        </div>

        {/* we can show the 4 card in a row also by cols-4 */}
        <div className="grid grid-cols-4 gap-4 lg:gap-[30px]">

          {/* this can be work for the blog card and puts content here and also we have to do the read more functionalities */}

          {bundleData.map((item, idx) => {
            const { name, image, dogCategory } = item;
            return (
              <div onClick={()=>setIndex(idx)} className="cursor-pointer text-center" key={idx}>
                <div className="mb-2 lg:mb-8 hover:scale-105 transition-all duration-300">
                  <img className="w-full" src={image.type} alt="icons" />
                </div>
                <h3 className="lg:text-2xl capitalize font-semibold text-blue lg:mb-2">{name}</h3>
                {/* category text */}
                <div className={`${index===idx?'border-b-4 border-orange transition-all after:lg:w-5 after:lg:h-5 after:bg-triangle  after:lg:bg-no-repeat after:lg:block after:lg:left-[130px] after:lg:absolute after:lg:-bottom-6 relative':'border-b-4 border-transparent'} pb-4 mb-12`}>
                  <div className="hidden lg:block capitalize">{dogCategory}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        <Bundles bundles={bundles}/>
      </div>
    </section>
  );
};

export default Prices;
