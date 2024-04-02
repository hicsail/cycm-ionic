import React from "react";
import Profile from "./Profile";
const profiles = [
  {
    name: "Christine Crawford, MD, MPH",
    title:
      "Adult and Child Psychiatrist | Associate Medical Director (NAMI) | Assistant Professor (BUSM)",
    description:
      "John is a licensed therapist with over 10 years of experience in helping teens.",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/christine-crawford-md-mph-a08ab923a/",
      },
      { name: "twitter", link: "https://twitter.com/DrChrissyC" },
    ],
    avatar: "c-crawford.png",
  },
  {
    name: "Hannah Tremont, MPH",
    title:
      "Content Writer & Editor at CRICO | Health Literacy and Communications Specialist",
    description:
      "I am a public health professional working at the intersection of data analysis, health policy, and health communication. With an MPH from The Boston University School of Public Health, I combine my expertise in epidemiology, biostatistics, and U.S.",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/hannahtremont/",
      },
      { name: "twitter", link: "https://twitter.com/hannah_tremont" },
    ],
    avatar: "h-tremont.png",
  },
  {
    name: "Daisy Perez, MPH",
    title: "Senior Research Manager at Boston Medical Center (BMC)",
    description:
      "Michael specializes in diagnosing and treating mental health disorders in adolescents",
    socials: [
      { name: "linkedin", link: "#" },
      { name: "twitter", link: "#" },
    ],
    avatar: "d-perez.png",
  },
  {
    name: "Ufuoma Barbara Akpotair",
    title: "Director of Grants and Contracts at Boston Medical Center (BMC)",
    description:
      "Emily is passionate about advocating for the mental well-being of teenagers.",
    socials: [
      { name: "linkedin", link: "https://www.linkedin.com/in/akpotaire/" },
      { name: "twitter", link: "#" },
    ],
    avatar: "u-barbara.png",
  },
  {
    name: "Larysa Malinouskaya, MS, CRA",
    title: "Director of Grants and Contracts",
    description:
      "David provides guidance and support to students dealing with mental health issue.",
    socials: [
      { name: "linkedin", link: "#" },
      { name: "twitter", link: "#" },
    ],
    avatar: "l-malin.png",
  },
];

export default function AboutTeamProfiles() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen px-12 md:px-0">
        {/* <img className="w-full h-auto z-[10]" alt="union-1" src="red-union.svg" /> */}
        <div className="p-4 max-w-6xl w-full pt-36">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
              Meet our team
            </h1>
          </div>
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            The experts behind our mental health resources
          </p>
          <br />
          <div className="grid grid-cols-1 divide-y bg-white"></div>
          <div className="grid gap-8 md:grid-cols-4 md:mb-16">
            {profiles.map((profile, idx) => (
              <Profile
                key={idx}
                name={profile.name}
                title={profile.title}
                description={profile.description}
                socials={profile.socials}
                avatar={profile.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
