import FaqBox from "../atom/FaqBox";
import FaqList from "../atom/FaqList";
import Text from "../atom/Text";

const Faq = () => {
  const faq = FaqList.map((each) => {
    return <FaqBox key={each.id} list={each} />;
  });
  return (
    <>
    <div className="p-4 pt-6 pb-8 lg:px-28 lg:py-24 flex flex-col lg:flex-rowbg-white">
      <div className="w-full flex flex-col justify-between">
        <div>
        <Text
          className="hidden lg:block text-cthree font-epilogue font-medium text-sm"
          body="FAQ'S"
        />
        <p className="pt-6 leading-tight text-[#111827] lg:text-ctwo font-epilogue text-2xl lg:text-5xl font-bold lg:font-semibold">
          Frequently <span className="text-cone lg:text-ctwo">Asked </span><span className="text-cone">Questions</span>
        </p>
        </div>
        <div className="hidden lg:block">
          <Text
            className="w-[300px] pb-4 text-[#586174] leading-relaxed"
            body="Couldn’t find what you were looking for? write to us at"
          />
          <a
            href="mailto:hi@careergrowth.com"
            className="text-cone font-inter font-normal underline-offset-4 underline"
          >
            hi@careergrowth.com
          </a>
        </div>
      </div>
      <div className="w-full">{faq}</div>
    </div>
      <div className="flex flex-col justify-center lg:hidden p-4 pt-6 pb-8  bg-ctwo">
          <Text
            className="w-full px-6 m-auto text-center pb-4 text-white leading-relaxed"
            body="Couldn’t find what you were looking for? write to us at"
          />
          <a
            href="mailto:hi@careergrowth.com"
            className="text-cone text-center font-inter font-normal underline-offset-4 underline"
          >
            hi@careergrowth.com
          </a>
        </div>
        </>
  );
};

export default Faq;
