import './CardSliderReverse.css'
const cards = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. ",
    name: "Emily Richmond",
    role: "Crypto Newcomer",
    img: "./nitin.jpeg",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. ",
    name: "Emily Richmond",
    role: "Crypto Newcomer",
    img: "./nitin.jpeg",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. ",
    name: "Emily Richmond",
    role: "Crypto Newcomer",
    img: "./nitin.jpeg",
  },
];

export default function CardSliderReverse() {
  return (
<>


    <div className="w-full overflow-x-hidden mt-5 max-w-[95%] ml-auto">
      {/* TRACK */}
      <div className="flex w-max animate-scroll-oppo gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-10">
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="
              shrink-0
              w-65 sm:w-75 md:w-85 lg:w-100
              rounded-xl border border-[#12121533] bg-white
              p-4 sm:p-5 md:p-6
            "
          >
            <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600">
              {card.text}
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={card.img}
                alt="profile"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h1 className="text-sm sm:text-base font-semibold">
                  {card.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500">
                  {card.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}
