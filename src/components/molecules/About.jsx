import Logo from "../atom/Logo"
import imgOne from '../../assets/images/image 59.png'
import imgTwo from '../../assets/images/image 60.png'
import objOne from '../../assets/images/1.png'
import objTwo from '../../assets/images/2.png'
import Text from "../atom/Text"
import abt1 from '../../assets/images/Group 427319797.png'
import abt2 from '../../assets/images/Group 427319797 (1).png'
import abt3 from '../../assets/images/Group 427319797 (2).png'
import abt4 from '../../assets/images/Group 427319797 (3).png'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 pt-6 pb-8 lg:px-28  gap-10 lg:gap-20 bg-white">
      <div className="w-full flex gap-8" data-aos="fade-up"
    data-aos-duration="1000">
        <div className="relative">
            <Logo src={imgOne} alt="" className="w-full rounded-2xl"/>
            <Logo src={objOne} alt="" className="hidden lg:block w-14 absolute left-[12%] top-[80%]"/>
        </div>
        <div className="relative">
            <Logo src={objTwo} alt="" className="hidden lg:block w-14 absolute right-[13%] -top-[-1%]"/>
            <Logo src={imgTwo} alt="" className="w-full rounded-2xl mt-10"/>
        </div>
      </div>
      <div className="w-full" data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-center">
        <Text className="text-cthree text-center pb-4 lg:text-left text-sm font-epilogue font-medium" body="ABOUT"/>
        <p className="text-[28px] lg:text-5xl text-center lg:text-left font-epilogue font-semibold text-ctwo leading-snug py-4">Why you should <span className="text-cone">join our community</span></p>
        <div className="flex flex-wrap">
            <div className="w-2/4"><Logo src={abt1} className="w-[70px] lg:w-24" alt=""/>
            <Text body="Career Guidance" className="lg:text-xl lg:ps-7 py-5 font-satom text-[#393939]"/>
            </div>
            <div className="w-2/4"><Logo src={abt2} className="w-[70px] lg:w-24" alt=""/>
            <Text body="Supportive Network" className="lg:text-xl lg:ps-7 py-5 font-satom text-[#393939]"/>
            </div>
            <div className="w-2/4"><Logo src={abt3} className="w-[70px] lg:w-24" alt=""/>
            <Text body="Job Opportunity" className="lg:text-xl lg:ps-7 py-5 font-satom text-[#393939]"/>
            </div>
            <div className="w-2/4"><Logo src={abt4} className="w-[70px] lg:w-24" alt=""/>
            <Text body="Mentorship" className="lg:text-xl lg:ps-7 py-5 font-satom text-[#393939]"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
