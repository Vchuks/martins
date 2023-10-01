import Text from "../atom/Text";
import pic1 from "../../assets/images/img.png";
import pic2 from "../../assets/images/image 60.png";
import pic3 from "../../assets/images/image 59.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// import Logo from "../atom/Logo";

const Testimonial = () => {
  

  const pics = [
    {
      original: pic3,
      thumbnail: pic3,
      thumbnailLabel: "heee",
      loading: "lazy",
      description: `"I can't thank the Career Growth enough for the incredible impact it's had on my career. With the help of their mentorship program and weekly sessions, I gained the skills and confidence I needed to succeed in interviews and land my dream job. Not only that, but the program also helped me negotiate a higher salary than I ever thought possible. I highly recommend the Career Growth community to anyone looking to take their tech career to the next level!."`,
    },
    {
      original: pic2,
      thumbnail: pic2,
      thumbnailLabel: "heee",

      loading: "lazy",
      description: `"I can't thank the Career Growth enough for the incredible impact it's had on my career. With the help of their mentorship program and weekly sessions, I gained the skills and confidence I needed to succeed in interviews and land my dream job. Not only that, but the program also helped me negotiate a higher salary than I ever thought possible. I highly recommend the Career Growth community to anyone looking to take their tech career to the next level!."`,
    },
    {
      original: pic1,
      thumbnail: pic1,
      thumbnailLabel: "heee",

      loading: "lazy",
      description: `"I can't thank the Career Growth enough for the incredible impact it's had on my career. With the help of their mentorship program and weekly sessions, I gained the skills and confidence I needed to succeed in interviews and land my dream job. Not only that, but the program also helped me negotiate a higher salary than I ever thought possible. I highly recommend the Career Growth community to anyone looking to take their tech career to the next level!."`,
    },
  ];

  return (
    <div className="p-4 pt-6 pb-8 lg:px-28 lg:py-24">
      <Text
        className="font-epilogue text-sm lg:font-medium text-cthree text-center lg:text-left"
        body="TESTIMONIALS"
      />
      <p className="text-ctwo text-[28px] lg:text-5xl font-semibold font-epilogue text-center lg:text-left py-8">
        Hear from <span className="text-cone">our members</span>
      </p>
      <div>
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
