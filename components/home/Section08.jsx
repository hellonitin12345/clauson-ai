import Button1 from "@/components/Ui/Button1";

const Section08 = () => {
  return (
    <section className="w-full bg-white  ">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start lg:w-150">
            <img
              src="/image 10.png"
              alt="AI Document Assistant"
              className="w-full drop-shadow-2xl"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="grid items-center w-[90%] mx-auto md:mx-0 md:w-0 lg:justify-start ">
            <div className="grid items-center">
            <h2 className="text-3xl sm:text-4xl text-center sm:w-fit font-bold text-gray-900 mb-8 font-clauson">
              We’d Love To Help
            </h2>
            </div>

            <form className="space-y-6">
              
              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-fit gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full md:w-fit rounded-lg pl-5 pr-8 py-3  bg-[#0D0D0D0D] border border-[#12121533] outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full md:w-fit rounded-lg pl-5 pr-8  py-3 bg-[#0D0D0D0D] border border-[#12121533] outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-fit">
                <input
                  type="tel"
                  placeholder="Telephone"
                  className="w-full md:w-fit rounded-lg pl-5 pr-8  py-3 bg-[#0D0D0D0D] border border-[#12121533] outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                  type="text"
                  placeholder="Personal"
                  className="w-full md:w-fit rounded-lg pl-5 pr-8  py-3 bg-[#0D0D0D0D] border border-[#12121533] outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {/* MESSAGE */}
              <textarea
                placeholder="Message"
                rows={4}
                className="md:w-122 w-full rounded-lg p-4 bg-[#0D0D0D0D] border border-[#12121533] outline-none focus:ring-2 focus:ring-sky-400"
              />
              {/* BUTTON */}
              <Button1 lable="Message"/>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section08;
