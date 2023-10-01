// import Logo from "./Logo";
import { useState} from "react";
import {BiChevronUp} from 'react-icons/bi'
import {BiChevronDown} from 'react-icons/bi'
import {BsArrowUpCircle} from 'react-icons/bs'
import {BsArrowDownCircle} from 'react-icons/bs'
import PropTypes from 'prop-types'


const FaqBox = ({list}) => {
    const [title, setTitle] = useState(false);
    // const faqref = useRef()
    const {qst,ans} = list
    const handleState = () => {
        setTitle(!title);
      };
  return (
    <div className="py-2">
      {!title && 
        <div
          className="w-full cursor-pointer py-3 lg:px-6 flex items-center justify-between border-b border-[#E7EAEE]"
          onClick={handleState}
        >
          <h5 className="w-full flex items-center gap-3 ">
            {/* <div className='w-4'><Logo src={elipse} className="w-full" alt=""/></div> */}
            <p className='w-full lg:text-[22px] text-ctwo font-satom'>{qst}</p>
          </h5>
          <div className='hidden lg:block w-6'>
          <BiChevronDown className='w-full text-2xl text-[#1C2436]'/>
          </div>
          <div className='block lg:hidden w-6'>
          <BsArrowDownCircle className='w-full text-2xl text-cone'/>
          </div>
        </div>
      }
      {title && (
        <div
          className="w-full cursor-pointer py-3 lg:px-6 flex items-center justify-between bg-inherit lg:bg-[#F6F7F9]  rounded-t-md"
          onClick={handleState}
        >
          <h5 className="w-full flex items-center gap-3">
            {/* <div className='w-4'><Logo src={elipse} alt="" className="w-full" /></div> */}
            <p className='w-full lg:text-[22px] text-ctwo font-satom'>{qst}</p>
          </h5>
          <div className='hidden lg:block w-6'>
          <BiChevronUp className='w-full text-2xl text-[#1C2436]'/>
          </div>
          <div className='w-6 lg:hidden'>
          <BsArrowUpCircle className='w-full text-2xl text-cone'/>
          </div>
        </div>
      )}
      {title && (
        <div className="pt-3 pb-10 bg-inherit lg:bg-[#F6F7F9] lg:px-6 rounded-b-md border-b border-[#E7EAEE]">
          <p className="font-sator text-[#001f429c] text-sm lg:text-base lg:text-ctwo leading-relaxed">{ans}</p>
           
        </div>
      )}
    </div>
  )
}
FaqBox.propTypes = {
   list: PropTypes.object
}

export default FaqBox
