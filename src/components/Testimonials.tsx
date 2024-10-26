'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      quote:
        "This course completely transformed my career. I gained real-world skills that I could apply immediately in my job.",
      name: "Alex Parker",
      title: "Software Engineer",
    },
    {
      quote:
        "The instructors were incredibly knowledgeable and provided invaluable support throughout the course. I feel much more confident in my coding abilities.",
      name: "Maria Lopez",
      title: "Junior Web Developer",
    },
    {
      quote:
        "The hands-on projects and practical approach made learning so much easier and enjoyable. Highly recommended for anyone looking to break into tech!",
      name: "James Wilson",
      title: "Freelance Developer",
    },
    {
      quote:
        "I appreciated the flexibility and depth of the course content. It was perfect for a working professional looking to advance in the tech industry.",
      name: "Sarah Lee",
      title: "Data Analyst",
    },
    {
      quote:
        "This platform not only taught me new skills but also connected me with a great community of learners and mentors. It was a game-changer!",
      name: "Michael Chen",
      title: "UX/UI Designer",
    },
  ];
  

function Testimonials() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Why Students Love Our Courses?</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>




        </div>
    )
}

export default Testimonials
