import Text from "../atom/Text";
import pic1 from "../../assets/images/img.png";
import pic2 from "../../assets/images/Rectangle 19.png";
import pic3 from "../../assets/images/image 59.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Logo from "../atom/Logo";


const Testimonial = () => {
  const testimonials = [
    {
      id:'1',
      name:'Bukola Olamide',
      title:'Data Analyst',
      image:pic3,
      comment:'The CareerGrowth Tech Accelerator Program was a game-changer for me. I was able to get hands-on practical experience in data analytics, which helped me land a job as a data analyst at a top tech company. The program was well-structured and the instructors were experts in their field. I would highly recommend this program to anyone interested in pursuing a career in data analytics.'
    },
    {
      id:'2',
      name:'Abimbola Adebayo',
      title:'Product Designer',
      image:pic2,
      comment:`I was looking for a program that would give me hands-on experience in product design, and the CareerGrowth Tech Accelerator Program delivered. I learned from experienced product designers and worked on real-world projects. The program helped me develop the skills and knowledge I needed to land a job as a product designer at a startup company. I'm so grateful for the opportunity to have participated in this program.`
    },
    {
      id:'3',
      name:'Ngozi Okonkwo',
      title:'Data Analyst',
      image:pic1,
      comment:`The CareerGrowth Tech Accelerator Program was the best investment I've ever made in my career. I was able to learn from the best and brightest in the field of data analytics, and I gained the skills and experience I needed to land a job as a data analyst at a leading tech company. I'm so grateful for the opportunity to have participated in this program.`
    }
  ]
  const pics = [
    {
      original: pic3,
      thumbnail: pic3,
      thumbnailLabel: `Bukola Olamide Data Analyst`,
      loading: "lazy",
      description: `"The CareerGrowth Tech Accelerator Program was a game-changer for me. I was able to get hands-on practical experience in data analytics, which helped me land a job as a data analyst at a top tech company. The program was well-structured and the instructors were experts in their field. I would highly recommend this program to anyone interested in pursuing a career in data analytics."`,
    },
    {
      original: pic2,
      thumbnail: pic2,
      thumbnailLabel: `Abimbola Adebayo Product Designer`,
      loading: "lazy",
      description: `"I was looking for a program that would give me hands-on experience in product design, and the CareerGrowth Tech Accelerator Program delivered. I learned from experienced product designers and worked on real-world projects. The program helped me develop the skills and knowledge I needed to land a job as a product designer at a startup company. I'm so grateful for the opportunity to have participated in this program."`,
    },
    {
      original: pic1,
      thumbnail: pic1,
      thumbnailLabel: `Ngozi Okonkwo Data Analyst`,
      loading: "lazy",
      description: `"The CareerGrowth Tech Accelerator Program was the best investment I've ever made in my career. I was able to learn from the best and brightest in the field of data analytics, and I gained the skills and experience I needed to land a job as a data analyst at a leading tech company. I'm so grateful for the opportunity to have participated in this program."`,
    },
  ];

  return (
    <div className="p-4 pt-8 pb-8 lg:px-28 lg:py-24 bg-[#EEF] lg:bg-white">
      <Text
        className="font-epilogue text-sm lg:font-medium text-cthree text-center lg:text-left"
        body="TESTIMONIALS"
      />
      <p className="text-ctwo text-[28px] lg:text-5xl font-semibold font-epilogue text-center lg:text-left pb-4 lg:py-8">
        Hear from <span className="text-cone">our members</span>
      </p>
      <div className="hidden lg:flex gap-8">
        {testimonials.map(each=>{
          return (

            <div key={each.id} className="w-full flex flex-col gap-8 p-8 items-center shadow-md rounded-lg">
              <Logo className="w-28 h-28 rounded-full object-cover" src={each.image} alt=""/>
              <div className="text-center">
              <Text className="text-lg font-epilogue font-medium text-cone" body={each.name}/>
              <Text className="text-sm font-sator text-ctwo" body={each.title}/>
              </div>
              <Text className="text-ctwo font-sator text-justify" body={each.comment}/>
            </div>
            )
        })}
      </div>
      <div className="lg:hidden">
        <ImageGallery
          items={pics}
          lazyLoad={true}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideOnThumbnailOver={true}
          showNav={false}
        />
      </div>
    </div>
  );
};

export default Testimonial;
