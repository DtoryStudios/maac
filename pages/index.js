/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main>
      <div className="hero-image w-full lg:flex items-center py-16 lg:py-32 px-6 lg:px-28 lg:space-x-10 bg-red-50">
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.4] lg:leading-[1.3] text-white">
            Build your career with the best
          </h1>
          <p className="mt-5 leading-7 lg:leading-9 text-white lg:text-base text-sm">
            Allow your imagination flame to come to life with energy. Our
            animation institute in Durgapur will help you to enhance your
            talents and prepare you for a successful career and higher
            opportunities
          </p>
          <button className="text-sm px-7 py-3 lg:py-4 bg-[#4D0099] text-white mt-10 rounded font-poppins">
            <span>Start Now - Admission Open 2023</span>
          </button>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center mt-10">
          <div className="w-full p-6 lg:p-8 bg-white/20 backdrop-blur-2xl text-white">
            <h1 className="font-semibold text-lg font-poppins text-center">
              Career Counselling
            </h1>
            <form action="" className="grid grid-cols-2 gap-5 mt-8">
              <input
                type="text"
                placeholder="Your full name"
                className="bg-black/50 placeholder:text-white/50 px-5 py-5 col-span-2 rounded"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Your full name"
                className="bg-black/50 col-span-2 lg:col-span-1 placeholder:text-white/50 px-5 py-5 rounded"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Your full name"
                className="bg-black/50 col-span-2 lg:col-span-1 placeholder:text-white/50 px-5 py-5 rounded"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Select your courses"
                className="bg-black/50 placeholder:text-white/50 col-span-2 px-5 py-5 rounded"
                name=""
                id=""
              />
              <div className="col-span-2">
                <button className="mt-5 w-full bg-white text-black text-center py-4 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
