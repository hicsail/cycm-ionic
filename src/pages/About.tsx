import DualColumnImageText from "../components/DualColumnImageText";
import DualColumnText from "../components/DualColumnText";
import Profile from "../components/Profile";

const About: React.FC = () => {
  const profiles = [
    {
      name: "Christine Crawford, MD, MPH",
      title: "Adult and Child Psychiatrist | Associate Medical Director (NAMI) | Assistant Professor (BUSM)",
      description:
        "John is a licensed therapist with over 10 years of experience in helping teens.",
      socials: [
        { name: "linkedin", link: "https://www.linkedin.com/in/christine-crawford-md-mph-a08ab923a/" },
        { name: "twitter", link: "https://twitter.com/DrChrissyC" },
      ],
      avatar: "https://media.licdn.com/dms/image/C4E03AQEt0LWDFL79JQ/profile-displayphoto-shrink_400_400/0/1653902467974?e=1707350400&v=beta&t=RScF5gUex87VL2wWCME2hZEZ-M1QCbzYk5lF_avxgnc"
    },
    {
      name: "Hannah Tremont, MPH",
      title: "Content Writer & Editor at CRICO | Health Literacy and Communications Specialist",
      description:
        "I am a public health professional working at the intersection of data analysis, health policy, and health communication. With an MPH from The Boston University School of Public Health, I combine my expertise in epidemiology, biostatistics, and U.S.",
      socials: [
        { name: "linkedin", link: "https://www.linkedin.com/in/hannahtremont/" },
        { name: "twitter", link: "https://twitter.com/hannah_tremont" },
      ],
      avatar: "https://media.licdn.com/dms/image/D4E03AQEOzpghH-ZW5A/profile-displayphoto-shrink_400_400/0/1701740146145?e=1707350400&v=beta&t=M2Kehl7loetnoPuShFjwtngumB8FCSj7ti6f166u_Y0"
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
      avatar: "https://media.licdn.com/dms/image/D4E03AQHE7IaJYKf0uQ/profile-displayphoto-shrink_400_400/0/1693359355504?e=1707350400&v=beta&t=adgipKKAo26Ypz1tXCiSqMhajDzzay1L-LBnWrjOs1U"
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
      avatar: "https://media.licdn.com/dms/image/C4D03AQHBAzAa_voAKw/profile-displayphoto-shrink_400_400/0/1516495384605?e=1707350400&v=beta&t=nuooGetT-8AbW9XLzj07M2kPGnkcD97MAKITbd-8RQw"
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
      avatar: "https://www.bumc.bu.edu/psychiatry/files/2021/04/photo-225x300.jpg"
    },
  ];

  return (
    <div className="pt-12 divide-y divide-red-400 hover:divide-y-4">
      <div>
      <section className="">
        <DualColumnText
          tagline="Empowering"
          title="Supporting Teen Mental Health"
          description="Welcome to our website dedicated to providing resources and articles for teens about mental health. We believe in the importance of supporting and empowering teenagers in their mental well-being journey. Explore our content to find valuable information, tips, and advice on various mental health topics."
          // actions={[
          //   { text: "Learn More", link: "#" },
          //   { text: "Sign Up", link: "#" },
          // ]}
        />
        <div className="curve" />
      </section>
      <div className="h-12" />
      <DualColumnImageText
        title="Our Mission, Vision, and Values"
        description="We are dedicated to providing resources and articles for teens to support their mental health. Our Mission is to create a safe and inclusive space where young people can find information, guidance, and support, We believe in the power of education and awareness to break the stigma surrounding mental health and empower teens to prioritize their well-being."
        image={{ source: "/cycm-mission.png", position: "left" }}
        actions={[
          // { text: "Learn More", link: "#" },
          // { text: "Sign Up", link: "#" },
        ]}
      />
      </div>
      <div className="flex justify-center my-16">
        <div className="p-8 max-w-7xl md:p-12 w-full">
          <div className="flex flex-col items-start justify-center">
            <span className="text-lg font-bold font-sans mb-2 md:mb-4">
              Empowering
            </span>
            <h5 className="font-bold font-sans mb-6 text-4xl md:text-5xl">
              Meet Our Team
            </h5>
          </div>
          <p className="text-md font-sans mb-4 md:mb-6 md:text-lg">
            get to know the experts behind our mental health resources
          </p>
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
      {/* <DualColumnText
        title="Explore Our Mental Health Resources"
        description="Discover a wealth of resources and articles on mental specifically curated for teans."
        actions={[{ text: "Learn More", link: "#" }]}
      /> */}
    </div>
  );
};

export default About;
