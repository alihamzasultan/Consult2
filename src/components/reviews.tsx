"use client";

export function Reviews() {
  return (
   
    <div className="overflow-x-auto justify-center flex mx-auto mt-24 mb-20 p-8">
    
      {/* First Review */}
      <div className="review-card mr-8 flex-shrink-0 max-w-xs hover:shadow-lg transition duration-300">
        {/* stars */}
        <div className="text-yellow-500 flex gap-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
            </svg>
          ))}
        </div>
        <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
          customer service is
          excellent! Whenever I have a question, the team is always available
          and willing to help. Highly recommend!
        </p>
        <div className="mt-6 flex items-center gap-6">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
            <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/women/2.jpg"
                width={50}
                height={50}
                decoding="async"
                data-nimg={1}
                className="inline-block "
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div>
            <p className="leading-relaxed tracking-wide text-gray-200">
              Melissa Smith
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-400">
              Marketing Manager
            </p>
          </div>
        </div>
      </div>



      {/* Add more reviews similarly */}
      {/* Third Review */}
      <div className="review-card mr-8 flex-shrink-0 max-w-xs">
        {/* stars */}
        <div className="text-yellow-500 flex gap-2">
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
            </svg>
          ))}
        </div>

        <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
         I'm quite impressed with its
          features. The interface is intuitive, and I've already seen an
          improvement in my workflow. Would recommend giving it a try!
        </p>
        <div className="mt-6 flex items-center gap-6">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
            <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/men/4.jpg"
                width={50}
                height={50}
                decoding="async"
                data-nimg={1}
                className="inline-block "
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div>
            <p className="leading-relaxed tracking-wide text-gray-200">
              John Doe
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-400">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
      {/* Fourth Review */}
      <div className="review-card mr-8 flex-shrink-0 max-w-xs">
        {/* stars */}
        <div className="text-yellow-500 flex gap-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
            </svg>
          ))}
        </div>

        <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
          I must say
          it's been a game-changer. The features are robust, and the support
          team is incredibly helpful. Highly recommended for any business owner!
        </p>
        <div className="mt-6 flex items-center gap-6">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
            <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/women/5.jpg"
                width={50}
                height={50}
                decoding="async"
                data-nimg={1}
                className="inline-block "
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div>
            <p className="leading-relaxed tracking-wide text-gray-200">
              Jane Smith
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-400">
              Business Owner
            </p>
          </div>
        </div>
      </div>

      <div className="review-card mr-8 flex-shrink-0 max-w-xs">
        {/* stars */}
        <div className="text-yellow-500 flex gap-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
            </svg>
          ))}
        </div>
        <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
          customer service is
          excellent! Whenever I have a question, the team is always available
          and willing to help. Highly recommend!
        </p>
        <div className="mt-6 flex items-center gap-6">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
            <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/women/2.jpg"
                width={50}
                height={50}
                decoding="async"
                data-nimg={1}
                className="inline-block "
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div>
            <p className="leading-relaxed tracking-wide text-gray-200">
              Melissa Smith
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-400">
              Marketing Manager
            </p>
          </div>
        </div>
      </div>


      <div className="review-card mr-8 flex-shrink-0 max-w-xs">
        {/* stars */}
        <div className="text-yellow-500 flex gap-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
            </svg>
          ))}
        </div>
        <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
          customer service is
          excellent! Whenever I have a question, the team is always available
          and willing to help. Highly recommend!
        </p>
        <div className="mt-6 flex items-center gap-6">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
            <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/women/2.jpg"
                width={50}
                height={50}
                decoding="async"
                data-nimg={1}
                className="inline-block "
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div>
            <p className="leading-relaxed tracking-wide text-gray-200">
              Melissa Smith
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-400">
              Marketing Manager
            </p>
          </div>
        </div>
      </div>


    </div>
    
  );
}

export default Reviews;




