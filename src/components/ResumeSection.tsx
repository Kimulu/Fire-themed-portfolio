import React from "react";

const ResumeSection = () => {
  const experiences = [
    {
      year: "2014-2018",
      title: "Bachelors Degree in Business Information Technology",
      company: "Mount Kenya University",
      description:
        "I did my bachelor's degree and graduated with a second class upper.",
    },
    {
      year: "2018-2019",
      title: "Web Developer Internship Position",
      company: "Hudutech Solutions",
      description:
        "Built Websites that incorporated Low-code no-code technologies such as Wordpress.",
    },
    {
      year: "2019-Current",
      title: "Freelance Web Developer",
      company: "Remote",
      description:
        "Currently Designing and building websites for Businesses that need an online presence.",
    },
  ];

  return (
    <div className="px-2 py-10 w-full flex justify-center relative z-6">
      <div className="bg-white lg:mx-8 lg:max-w-5xl lg:shadow-lg rounded-lg p-6">
        <h2 className="text-3xl text-black font-bold mb-6">My Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <div className="text-orange-400 text-xl font-semibold">
                {exp.year}
              </div>
              <div className="text-white text-lg font-bold mt-2">
                {exp.title}
              </div>
              <div className="text-gray-400">{exp.company}</div>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
