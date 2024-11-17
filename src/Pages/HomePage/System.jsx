import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const System = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        <div className="flex gap-5 items-center">
          <div>
            <FaShippingFast size={40} color="red" />
          </div>
          <div className="flex flex-col">
            <h2>Free Shiping</h2>
            <p>Free shipping all order</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <BiSupport size={40} color="red" />
          </div>
          <div className="flex flex-col">
            <h2>Support 24/7</h2>
            <p>Support 24 hours a day</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <FaMoneyCheck size={40} color="red" />
          </div>
          <div className="flex flex-col">
            <h2>Money Return</h2>
            <p>30 days for free return</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <RiSecurePaymentFill size={40} color="red" />
          </div>
          <div className="flex flex-col">
            <h2>100% Payment Secure</h2>
            <p>We ensure secure payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
