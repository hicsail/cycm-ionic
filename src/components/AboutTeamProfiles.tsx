import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const token = import.meta.env.VITE_STRAPY_TOKEN;

const ButtonMailto = ({ mailto, label }: any) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default function AboutTeamProfiles() {
  const [profiles, setProfiles] = useState<any>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/people?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setProfiles(resp.data);
      });
  }, []);

  return (
    <div >
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#FFE2E2] to-[#ffffff] px-12 md:px-0">
        {/* <img className="w-full h-auto z-[10]" alt="union-1" src="red-union.svg" /> */}
        <div className="p-4 max-w-6xl w-full pt-36">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-[#101066] text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
               Meet Our Team
            </h1>
          </div>
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            The experts behind our mental health resources
          </p>
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            Email us at{" "}
            <a href="mailto:contact@cycminds.org">contact@cycminds.org</a>
          </p>

          <br />
          <div className="grid grid-cols-1 divide-y bg-white"></div>
          <div className="grid gap-8 md:grid-cols-4 md:mb-16">
            {profiles.map((profile: any, idx: any) => (
              <div key={idx}>
                <Profile
                  key={idx}
                  name={profile.attributes.name}
                  title={profile.attributes.title}
                  description={profile.attributes.description}
                  socials={profile.attributes.socials}
                  biography={profile.attributes.bio}
                  avatar={`${import.meta.env.VITE_STRAPI_URL}${
                    profile.attributes.avatar.data.attributes.url
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
