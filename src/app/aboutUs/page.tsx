'use client'
import Footer from '@/components/Footer';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { useState } from "react";
import { useEffect } from 'react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const words = `We are a software and consulting company dedicated to leveraging AI to create innovative solutions that add value to our clients businesses. Our mission is to empower organizations with AI-driven insights and technologies, enabling them to thrive in the digital age.
`;

// Define the AboutUs component
function AboutUs() {




  // Data for each team member
  const teamMembers = [
    {
      name: "Zeus",
      role: "Chairman and CEO",
      bio: "Graduated from Texas Tech University with a Master of Business Administration and a Master of Science in Data Science. Over 5 years of professional experience as a Data Scientist building data science systems for the public and private sector.",
      skills: [
        "Data Science",
        "Business Administration",
        "AI Consulting",
        "Licensing Solutions"
      ]
    },
    {
      name: "Hades",
      role: "Chief Operations Officer",
      bio: "Over 15+ years of experience developing custom software and machine learning solutions. Specializes in real estate, blockchain technology, and machine learning.",
      skills: [
        "Software Development",
        "Machine Learning",
        "Real Estate",
        "Blockchain Technology"
      ]
    },
    {
      name: "Poseidon",
      role: "Chief Technology Officer",
      bio: "Over 10 years of experience developing custom software and PyTorch Large Language Models. Provides educational content on developing Large Language Models through courses and YouTube videos.",
      skills: [
        "Software Development",
        "PyTorch",
        "Large Language Models",
        "Course Development",
        "YouTube Content Creation"
      ]
    }
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-black dark:bg-black py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-8 text-gray-800 dark:text-white">
          Meet Our Team
        </h1>
        {/* Mission Statement */}
        <div className="shadow-lg rounded-lg overflow-hidden p-6 mb-8 transition-transform transform hover:scale-105 border-none ">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Mission</h2>
          <p className="text-sm sm:text-base mt-5">
            {isClient && <TextGenerateEffect words={words} />}
          </p>
        </div>

        {/* Team members */}
        <div className="flex flex-wrap">
          {/* Map through each team member to create a card */}
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-black dark:bg-black shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 border border-blue-300 mr-4 mb-4">
              <div className="p-4 text-white">
                <h2 className="text-lg font-semibold mb-2">{member.name}</h2>
                <p className="text-blue-500 text-sm mb-2">{member.role}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
                {/* Display skills */}
                <div className="flex flex-wrap mt-4">
                  {member.skills && member.skills.map((skill, index) => (
                    <button key={index} type="button" className="mr-2 mb-2">
                      <span className="bg-black inline-flex text-white py-1 px-4 items-center justify-between text-sm capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 transform transition duration-300 hover:scale-110">
                        {/* Icon */}
                        {getIcon(skill)}
                        {/* Skill */}
                        <span className="capitalize lg:inline leading-5">{skill}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-12"></div> {/* Add margin from the bottom to prevent content from touching the footer */}
      </div>
      <Footer />
    </div>
  );



}

// Function to get the appropriate icon for a skill
function getIcon(skill: string) {
  switch (skill) {
    case "Data Science":
      return <span className="mr-1">📊</span>;
    case "Business Administration":
      return <span className="mr-1">📈</span>;
    case "AI Consulting":
      return <span className="mr-1">🤝</span>;
    case "Licensing Solutions":
      return <span className="mr-1">💼</span>;
    case "Software Development":
      return <span className="mr-1">💻</span>;
    case "Machine Learning":
      return <span className="mr-1">🤖</span>;
    case "Real Estate":
      return <span className="mr-1">🏠</span>;
    case "Blockchain Technology":
      return <span className="mr-1">🔗</span>;
    case "PyTorch":
      return <span className="mr-1">🔥</span>;
    case "Large Language Models":
      return <span className="mr-1">📚</span>;
    case "Course Development":
      return <span className="mr-1">🎓</span>;
    case "YouTube Content Creation":
      return <span className="mr-1">🎥</span>;
    default:
      return null;
  }
}

export default AboutUs;
