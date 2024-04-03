'use client'


const HeroSection = () => {
  return (
<main className="dark:bg-black-800 bg-black relative overflow-hidden h-screen ">
  <header className="h-20 sm:h-32 flex items-center z-30 w-full mb-0">
    <div className="container mx-auto px-6 flex items-center justify-between ">


    </div>
  </header>
  <div className="bg-black dark:bg-black-800 flex relative z-20 items-center overflow-hidden mt-5">
    <div className="container mx-auto px-6 flex relative py-16">
      <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800 ">
        MORGANA
          <span className="text-5xl sm:text-6xl">AI-INNOVATION</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
        Crafting Secure, SEO-Optimized React Webpages for Future-Proof Growth
        </p>
        <div className="flex mt-8">
          <a
            href="/login"
            className="uppercase py-2 px-4 rounded-lg bg-emerald-500 border-2 border-transparent text-white text-md mr-4 hover:bg--400"
          >
            Get started
          </a>
          <a
            href="/aboutUs"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-white-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative  md:mb-0 ">
  <img
    src="/courses/bg.png"
    className="max-w-lg md:max-w-xl m-auto -mt-20"
  />
</div>


    </div>
  </div>
</main>

        
        // mx max width
  )
}


export default HeroSection