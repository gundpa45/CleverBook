import React from "react";

const customerStories = [
  {
    name: "Vishal Kumar",
    role: "CTO",
    company: "TechNest",
    story: "CleverBook has streamlined our internal team communication. We’re shipping features faster than ever before.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Vishnu Reddy",
    role: "Operations Head",
    company: "QuickServe",
    story: "From chaos to clarity! Our team productivity doubled after implementing CleverBook workflows.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Kartik Mehra",
    role: "Founder",
    company: "CodeGenix",
    story: "As a startup, we needed organization. CleverBook gave us structure and insight into every project.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Payal Shah",
    role: "UX Designer",
    company: "DesignLoop",
    story: "Our design team now shares and tracks ideas effortlessly thanks to CleverBook.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Abhi Yadav",
    role: "Sales Manager",
    company: "CloudSync",
    story: "Sales pipelines and reports were all over the place—CleverBook brought everything into one clean view.",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    name: "Sharanu Patil",
    role: "Team Lead",
    company: "DevSprint",
    story: "The best part? The way CleverBook supports async work across time zones. Our global team stays in sync.",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
  },
  {
    name: "Akshay Jain",
    role: "AI Engineer",
    company: "DataCraft",
    story: "Even our most complex project documentation is now easy to find, thanks to CleverBook’s structured layout.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Mamta Joshi",
    role: "HR Manager",
    company: "TalentGrid",
    story: "From onboarding to training, CleverBook made our HR documents easily accessible and editable.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Riya Kapoor",
    role: "Content Strategist",
    company: "StoryStack",
    story: "All campaign plans and feedback are now centralized. Collaboration has never been smoother.",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
];

const CustomerStories = () => {
  return (
    <div className="bg-[#0b0b12] text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.25)]">
          💬 What Our Users Say
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          Real stories. Real impact. Discover how teams use CleverBook daily.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {customerStories.map((story, idx) => (
            <div
              key={idx}
              className="bg-[#1c1b2a]/70 backdrop-blur-md border border-purple-500/30 shadow-[0_0_30px_#9333ea33] rounded-2xl p-6 transition hover:scale-[1.03] hover:shadow-[0_0_40px_#9333ea99] duration-300"
            >
              <div className="flex items-center mb-4 gap-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-purple-500"
                />
                <div>
                  <h3 className="font-semibold text-lg text-white">{story.name}</h3>
                  <p className="text-sm text-purple-300">
                    {story.role} @ {story.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                “{story.story}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
