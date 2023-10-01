import Text from "../atom/Text"
import {FaArrowRight} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="p-4 pt-6 pb-8 lg:px-28 lg:py-24 bg-[#F0FDF4] lg:bg-white">
        <p className="text-4xl lg:text-[64px] text-center leading-none text-ctwo font-epilogue font-medium lg:font-bold">Become a job-ready tech talent with <span className="text-cone">real-world experience</span></p>
      <Text className='lg:w-[70%] py-2 lg:py-6 m-auto font-satom text-center text-ctwo lg:text-xl' body="Get the skills and support you need to land your dream job in tech and multiply your income with our Career Accelerator."/>
      <div className="flex gap-5 m-auto justify-center py-4">
        <button className="py-3 w-36 lg:w-60 rounded-md lg:rounded text-white bg-cone font-inter text-sm font-medium ">Join Now</button>
        <button className="py-3 w-36 text-sm flex gap-4 items-center text-cone font-inter font-medium justify-center rounded-md lg:rounded bg-[#D8EAFE]">Contact Us <FaArrowRight className=" -rotate-45"/></button>
      </div>
    </div>
  )
}

export default Hero
