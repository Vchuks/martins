import Logo from "../atom/Logo"
import joinImg from '../../assets/images/Image.png'
import joinImg2 from '../../assets/images/Image2.png'
import Text from "../atom/Text"


const Join = () => {
  return (
    <div className="bg-[#001630] p-4 pt-6 pb-0 lg:px-28 lg:py-0 flex flex-col lg:flex-row justify-center items-center">
      <div className="hidden lg:block w-full">
        <p className="w-4/5 text-white text-5xl leading-snug">Join our community today to<span className="
        text-cone"> fast-track</span> your<span className="text-cone"> tech career</span></p>
        <button className="py-3 mt-4 w-36 lg:w-60 rounded-md lg:rounded text-white bg-cthree font-inter text-sm font-medium ">Join Now</button>
      </div>
      <div className="w-full flex flex-col py-5 items-center lg:hidden">
        <Text className='text-center text-[#FEF6FF] text-2xl font-epilogue' body="The fastest way from idea to live site. Period."/>
        <Text className='text-center text-sm font-sator pt-3 text-white' body="Flex is a Small SaaS Business. Flex isn’t a traditional company."/>
        <button className="get-btn py-3 w-52 mt-5">Get Started</button>
      </div>
      <div className="w-2/4 hidden lg:block">
        <Logo src={joinImg} alt="" className="w-full object-contain"/>
      </div>
      <div className="w-3/4 block lg:hidden">
        <Logo src={joinImg2} alt="" className="w-full object-contain"/>
      </div>
    </div>
  )
}

export default Join
