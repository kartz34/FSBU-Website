import { useState } from "react";
import WavyMarquee from "./WavyMarquee";

const events = [
  {
    image: "/events/event1.png",
    description:
      "Starter event for fullstack Club where we tell the juniors about learning material, how to tackle subjects and how to achieve 9 SGPA by perfecting their strategies to improve grade, personality and attitude!!!",
    leftCard: "/events/Subtract.png",
  },
  {
    image: "/events/event1.png",
    description: "Another exciting event coming soon!",
    leftCard: "/events/Subtract.png",
  },
  {
    image: "/events/event1.png",
    description:
      "Another exciting event coming soonasnfoawniojwjnownfjawnfjwnjwnajk!",
    leftCard: "/events/Subtract.png",
  },
  {
    image: "/events/event1.png",
    description:
      "Another exciting evensadasdasdast coming soonasnfoawniojwjnownfjawnfjwnjwnajk!",
    leftCard: "/events/Subtract.png",
  },
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex flex-col items-center py-12 bg-gradient-to-b from-white to-blue-200">
      {/* Title with Wavy Marquee */}
      <div className="relative flex flex-col items-center w-full">
        <WavyMarquee />
        <h2 className="text-4xl font-bold text-gray-900 -mt-14">
          EXPLORE OUR EVENTS
        </h2>
      </div>

      {/* Event Wrapper */}
      <div className="relative flex items-center w-full max-w-5xl gap-32 justify-center mt-10">
        {/* Left Card with Arrows */}
        <div className="relative flex flex-col items-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <img
              src="/events/solar_play-bold.png"
              width={30}
              height={30}
              className="rotate-180"
              alt="Previous"
            />
          </button>

          {/* Left Card (Fixed Size) */}
          <div className="w-[232.5px] h-[406px] flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src={events[currentIndex].leftCard}
              alt="Left Card"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <img
              src="/events/solar_play-bold.png"
              width={35}
              height={35}
              alt="Next"
            />
          </button>
        </div>

        {/* Event Content with Smooth Sliding & Depth Effect */}
        <div className="relative w-[450px] h-[450px] flex items-center justify-center perspective-1000">
          {events.map((event, index) => {
            const isPrevious =
              index === (currentIndex - 1 + events.length) % events.length;
            const isNext = index === (currentIndex + 1) % events.length;
            const isActive = index === currentIndex;

            return (
              <div
                key={index}
                className={`absolute w-full h-full flex flex-col items-center text-center bg-white rounded-3xl border-4 border-blue-500 p-6 transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive
                    ? "z-20 opacity-100 scale-100 translate-y-0 translate-z-[0px]"
                    : isPrevious
                    ? "z-10 opacity-60 scale-[0.92] -translate-x-[15%] rotate-y-[7deg] translate-z-[-50px]"
                    : isNext
                    ? "z-10 opacity-60 scale-[0.92] translate-x-[15%] rotate-y-[-7deg] translate-z-[-50px]"
                    : "z-0 opacity-30 scale-90 translate-y-[10%] blur-sm"
                }`}
                style={{
                  transformOrigin: "center",
                }}
              >
                {/* Event Image */}
                <div className="relative w-full h-[180px] rounded-t-3xl overflow-hidden">
                  <img
                    src={event.image}
                    className="w-full h-full object-cover"
                    alt="Event Image"
                  />
                </div>

                {/* SGPA Badge */}
                <div className="absolute top-[150px] left-6 bg-white px-4 py-1 rounded-lg shadow-md border-2 border-orange-400">
                  <img
                    src="/events/image 17.png"
                    width={100}
                    height={50}
                    alt="9.2 SGPA Logo"
                    className="drop-shadow-lg"
                  />
                </div>

                {/* Event Description */}
                <p className="mt-16 text-lg text-gray-700 px-6 leading-relaxed">
                  {event.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex mt-8 space-x-3">
        {events.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
