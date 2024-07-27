import React from "react";
import PhoneIcon from "../assets/img/phone.svg";
const Program = () => {
  return (
    <div>
      <div className="flex lg:gap-x-[10px] items-baseline justify-end">
        <img
          className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34]"
          src={PhoneIcon}
          alt=""
        />
        <div className="lg:text-[23px] text-blue font-extrabold">
        tel:+91-75999-75888
        </div>
      </div>

      {/* Show only in desktop mode */}
      <div className="text-sm">
        <div className="hidden lg:flex">
          <div>Opening Hours: mon-sun 10am-7pm</div>
        </div>
        {/* show only in mobile mode */}
        <div className="lg:hidden text-right">
          <div>mon-sun 10am-7pm</div>
        </div>
      </div>
    </div>
  );
};

export default Program;
