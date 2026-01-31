import Lables from "@/components/Ui/Lables";

const Section03 = () => {
  const data = [
    {
      heading: "AI Legal Drafting",
      subHeading: "Document Generator",
      para:
        "Create professional NDAs, service agreements, employment contracts, and loan agreements in minutes with our AI-powered wizard.",
      img: "/why-us/why-us-img1.png",
    },
    {
      heading: "AI Legal Research",
      subHeading: "AI Legal Chat",
      para:
        "Get instant answers to your legal questions. Our AI assistant provides clear, helpful guidance 24/7.",
      img: "/why-us/why-us-img2.png",
    },
    {
      heading: "AI Legal Toolkit",
      subHeading: "Edit & Customize",
      para:
        "Full control over your documents. Edit, save, and download in PDF or DOCX format anytime.",
      img: "/why-us/why-us-img3.png",
    },
    {
      heading: "AI Compliance & Risk",
      subHeading: "Lightning Fast",
      para:
        "Generate complete legal documents in under 60 seconds. No more waiting days for lawyers.",
      img: "/why-us/why-us-img4.png",
    },
    {
      heading: "AI Compliance & Risk",
      subHeading: "Document History",
      para:
        "Access all your generated documents anytime. Edit, download, or create new versions easily.",
      img: "/why-us/why-us-img5.png",
    },
    {
      heading: "AI Compliance & Risk",
      subHeading: "Secure & Private",
      para:
        "Your documents and data are encrypted and secure. We never share your information with third parties.",
      img: "/why-us/why-us-img6.png",
    },
  ];

  return (
    <div className="grid max-w-[90%] mx-auto mt-30" id="whyUs">
      <Lables
        lable="Why Us"
        heading="Everything You Need for Legal Documents"
      />

      <div className="md:mt-25 md:pl-16 grid gap-45">
        {data.map((item, index) => (
          <div className="grid md:grid-cols-2" key={index}>
            {/* TEXT */}
            <div className="pt-5 flex flex-col md:gap-10 pb-5 items-center">
              <div>
                <p className="text-[#10699E] font-bold font-clauson text-[14.47px] tracking-[5%] uppercase pl-2">
                  {item.heading}
                </p>
                <div className="bg-[#10699E] w-35 h-0.5 ml-2 mt-1"></div>
              </div>

              <h1 className="font-medium text-4xl font-clauson md:max-w-38 leading-12 tracking-[-2%] text-[#121215]">
                {item.subHeading}
              </h1>

              <p className="text-[#000000B2] font-clauson font-light text-lg max-w-125 leading-[32.55px] text-[19.89px]">
                {item.para}
              </p>
            </div>

            {/* IMAGE */}
            <div className="bg-[#0D0D0D0D] md:pt-12 pt-6 md:w-[86%] w-full mx-auto rounded-xl">
              <div
                className="md:w-110 md:h-85 h-50 mx-auto bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${item.img})` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section03;
