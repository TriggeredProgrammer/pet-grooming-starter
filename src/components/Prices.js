import React, { useEffect, useState } from "react";
import { bundleData } from "../data";
import Bundles from "./Bundles";

const Prices = () => {
  const [index, setIndex] = useState(0);
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    setBundles(bundleData[0].services);
  }, []);

  return (
    <section className="py-12 lg:py-24">
      <div className="text-center">
        <div className="text-orange font-semibold mb-3">our prices</div>
        <h2 className="h2 mb-4">Grooming Tails</h2> {/* Adjusted margin-bottom */}
        
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-lg text-blue text-center mb-4">
            Welcome to our pet grooming blog, where we share everything you need
            to know about keeping your furry friends looking and feeling their
            best. Whether you're a dog lover, a cat lover, or both, our blog is
            dedicated to helping you take care of your pets' grooming needs.
          </p>

          <p className="text-lg text-blue text-center">
            Our team of experienced groomers and pet enthusiasts are passionate
            about sharing their knowledge and expertise with you, so you can
            feel confident in your ability to make informed decisions when
            visiting a professional groomer.
          </p>
        </div>

        <Bundles bundles={bundles} />
      </div>
    </section>
  );
};

export default Prices;
