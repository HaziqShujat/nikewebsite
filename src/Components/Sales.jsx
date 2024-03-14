import React from "react";
import Itemsprod from "../Utlis/Items";
import Title from "../Utlis/Title";

const Productsales = ({ iFexist, endepoint: { title, items } }) => {
  return (
    <div className="nike-container mt-11 lg:mt-16 md:mt-14">
      <Title title={title} />
      <div className={`grid items-center p-5 justify-items-center gap-7 lg:gap-5 mt-7 ${iFexist ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1':' grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items?.map((item, i) => (
          <Itemsprod {...item} key={i} iFexist={iFexist} />
        ))}
      </div>
    </div>
  );
};

export default Productsales;
