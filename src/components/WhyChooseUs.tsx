"use client"
import React from "react"
import { StickyScroll } from "./ui/sticky-scroll-reveal"

const developmentSchoolContent = [
    {
        title: "Experienced Instructors",
        description: "Our courses are taught by industry experts with years of practical experience."
    },
    {
        title: "Hands-On Learning",
        description: "Engage in real-world projects and apply your skills with hands-on practice."
    },
    {
        title: "Comprehensive Curriculum",
        description: "From beginner to advanced, our curriculum covers everything you need to excel."
    },
    {
        title: "Flexible Learning",
        description: "Learn at your own pace with our self-paced courses and flexible schedules."
    },
    {
        title: "Career Support",
        description: "Receive guidance on job applications, interviews, and career advancement."
    }
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={developmentSchoolContent} />
      
    </div>
  )
}

export default WhyChooseUs
