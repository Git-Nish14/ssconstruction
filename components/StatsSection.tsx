"use client";

import { useEffect, useState } from "react";
import { ThumbsUp, Users, User, Heart } from "lucide-react";

const stats = [
  {
    icon: <ThumbsUp size={40} className="text-orange-500" />,
    title: "Completed Projects",
    value: 456,
  },
  {
    icon: <Users size={40} className="text-orange-500" />,
    title: "Happy Customers",
    value: 513,
  },
  {
    icon: <User size={40} className="text-orange-500" />,
    title: "Qualified Engineers",
    value: 53,
  },
  {
    icon: <Heart size={40} className="text-orange-500" />,
    title: "Years Experience",
    value: 25,
  },
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1500;
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  return (
    <section className="bg-[#0B1B38] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="absolute top-2 left-2 w-full h-full bg-orange-500"></div>
              <div className="relative hover:scale-105 transition-all duration-300 bg-white p-6 flex flex-col items-center border-orange-500 border-t-4 border-l-4 border-r-4 border-b-4">
                <div className="mb-4">{stat.icon}</div>
                <h4 className="text-lg font-semibold text-[#0B1B38] mb-2">
                  {stat.title}
                </h4>
                <div className="bg-[#0B1B38] w-full py-2 rounded-md text-center">
                  <div className="text-2xl font-bold text-white">
                    <Counter value={stat.value} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
