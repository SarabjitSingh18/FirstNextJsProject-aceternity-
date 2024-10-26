'use strict'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
    const projects = [
        {
            title: "Full-Stack E-Commerce Platform",
            description:
                "A fully functional e-commerce platform with user authentication, shopping cart, payment gateway integration, and admin dashboard.",
            link: "https://ecommerce-platform.com",
        },
        {
            title: "Social Media Application",
            description:
                "A social media application with real-time messaging, notifications, and user profiles, built with MERN stack.",
            link: "https://socialapp.com",
        },
        {
            title: "Personal Portfolio Website",
            description:
                "A personal portfolio website to showcase projects, skills, and contact information. Built with React and Tailwind CSS.",
            link: "https://portfolio.com",
        },
        {
            title: "Task Management Tool",
            description:
                "A collaborative task management tool for teams to track progress, assign tasks, and manage projects effectively.",
            link: "https://taskmanager.com",
        },
        {
            title: "Weather Forecast Application",
            description:
                "An application providing real-time weather updates and forecasts using OpenWeather API and React.",
            link: "https://weatherapp.com",
        },
        {
            title: "AI Chatbot",
            description:
                "A conversational AI chatbot for customer support, built with Natural Language Processing and machine learning.",
            link: "https://aichatbot.com",
        },
    ];


    return (
        <div className="p-12 bg-gray-900 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">UPCOMING Projects</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Software Development Journey</p>
                </div>
                <div className="mt-10">
                    <HoverEffect
                        items={projects.map(project => (
                            {
                                title: project.title,
                                description: project.description,
                                link: project.link
                            }
                        ))}
                    />

                </div>
                <div className="mt-10 text-center">
                    <Link href={"/"}
                        className="text-sm font-semibold text-white bg-black   rounded-md py-2 px-4"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default UpcomingWebinars
