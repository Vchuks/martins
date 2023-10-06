import Logo from "../atom/Logo"
import navlogo from '../../assets/images/Frame 1.png'
import {FaArrowRight} from 'react-icons/fa';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-[#F0FDF4] lg:bg-white w-full flex justify-between items-center p-4 pt-8 lg:px-24 lg:py-8">
      <Logo src={navlogo} alt="" className=" w-60 m-auto lg:m-0 lg:w-80" />
      <div className="hidden lg:flex gap-5">
        <Link to='https://wa.me/2349128700116' target="_blank"><button className="py-3 w-36 text-sm text-[#080808] font-inter font-medium border rounded border-[#E6E6E6]">Contact Us</button></Link>
        <Link to='https://wa.me/2349128700116' target="_blank"><button className="py-3 w-36 flex gap-4 items-center justify-center rounded text-white bg-cone font-inter text-sm font-medium ">Join Now <FaArrowRight/></button></Link>
      </div>
    </div>
  )
}

export default Navbar
