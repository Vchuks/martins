import Logo from "../atom/Logo";
import Text from "../atom/Text";
import step1 from "../../assets/images/1 (1).png";
import step2 from "../../assets/images/2 (1).png";
import step3 from "../../assets/images/3.png";
import vect1 from "../../assets/images/Vector (1).png";
import vect2 from "../../assets/images/Vector.png";
import { Link } from "react-router-dom";

const Member = () => {
  return (
    <div className="p-4 pt-6 pb-8 lg:px-28 lg:py-24 bg-[#f2fdf5cc] lg:bg-[#F6F7F9]">
      <Text
        className="font-semibold font-epilogue text-center text-ctwo text-[28px] lg:text-5xl"
        body="How to become a member?"
      />
      <Text
        className="font-satom text-center text-ctwo lg:text-xl py-4"
        body="Simple steps to benefit for our large community"
      />
      <div className="flex justify-center">
        <Link to='https://wa.me/2349128700116' target="_blank"><button className="py-3 w-36 lg:w-60  rounded-md lg:rounded text-white bg-cone font-inter text-sm font-medium ">
          Join Now
        </button></Link>
      </div>

      <div className="flex flex-col lg:flex-row my-14">
        <div className="w-full flex flex-col gap-4 lg:gap-8 justify-center lg:justify-normal items-center lg:items-start"
         data-aos="flip-right"
         data-aos-duration="1000">
          <Logo src={step1} className="w-28 lg:w-36" alt="" />
          <Text
            className="text-[#1C001B] lg:text-ctwo text-2xl lg:text-3xl font-epilogue font-medium lg:font-semibold"
            body="Sign Up"
          />
          <Text
            className="text-[#16001abf] lg:text-ctwo text-center lg:text-left lg:text-xl font-sator"
            body="Sign up for the Career Growth subscription program."
          />
        </div>
        <div className="w-[70%] hidden lg:block">
          <Logo src={vect1} className="w-24 pt-[20%]" alt="" />
        </div>
        <div className="w-full flex flex-col gap-4 lg:gap-8 justify-center lg:justify-normal items-center lg:items-start"
        data-aos="flip-right"
        data-aos-duration="2000">
          <Logo src={step2} className="w-28 lg:w-36" alt="" />
          <Text
            className="text-[#1C001B] lg:text-ctwo text-2xl lg:text-3xl font-epilogue font-medium lg:font-semibold"
            body="Gain Access"
          />
          <Text
            className="text-[#16001abf] lg:text-ctwo text-center lg:text-left lg:text-xl font-sator"
            body="Gain access to practical skills training, career guidance, mentorship, and a supportive community of like-minded individuals."
          />
        </div>
        <div className="w-[70%] hidden lg:block">
          <Logo src={vect2} className="w-24 pt-[20%]" alt="" />
        </div>
        <div className="w-full flex flex-col gap-4 lg:gap-8 justify-center lg:justify-normal items-center lg:items-start"
        data-aos="flip-right"
        data-aos-duration="3000">
          <Logo src={step3} className="w-28 lg:w-36" alt="" />
          <Text
            className="text-[#1C001B] lg:text-ctwo text-2xl lg:text-3xl font-epilogue font-medium lg:font-semibold"
            body="Fast-track"
          />
          <Text
            className="text-[#16001abf] lg:text-ctwo text-center lg:text-left lg:text-xl font-sator"
            body="Fast-track your career in tech and land your dream job."
          />
        </div>
      </div>
    </div>
  );
};

export default Member;
