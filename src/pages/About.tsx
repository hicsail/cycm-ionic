import { IonCard, IonCardHeader } from "@ionic/react";
import DualColumnImageText from "../components/DualColumnImageText";
import DualColumnText from "../components/DualColumnText";
import Profile from "../components/Profile";

const About: React.FC = () => {
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
      avatar:
        "c-crawford.png",
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
      avatar:
        "h-tremont.png",
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
      avatar:
        "d-perez.png",
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
      avatar:
        "u-barbara.png",
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
      avatar:
        "l-malin.png",
    },
  ];


  return (
    <div className="pt-12 mb-48">
      <div className="flex flex-col justify-center items-center min-h-screen px-12 md:px-0">
        <div className="p-4 max-w-4xl w-full">
          <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
            Supporting Teen Mental Health
          </h1>
          <br />
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            The Center for Young Colorful Minds at Boston Medical Center grew from a generous donation to provide mental health support for girls of color in Boston. Guided by this mission, CYCM expanded to support mental health and outreach efforts for youth inclusive of all backgrounds and experiences.
          </p>
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            We are a team comprised of licensed clinicians, public health experts, and community youth. Harnessing our various areas of expertise, we design engaging content and programs to help teens and young adults navigate common mental health struggles.
          </p>
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            We're not just here to share information; we're here to build meaningful connections. We center youth engagement and feedback when designing our content to make effective and accurate content without sounding like a textbook or a pamphlet. By partnering with existing community programs, we're turning up the volume on accurate mental health info, ensuring it reaches every corner of our vibrant communities.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#FFE2E2] min-h-screen px-12 md:px-0">
        {/* <img className="w-full h-auto z-[10]" alt="union-1" src="red-union.svg" /> */}
        <div className="p-4 max-w-4xl w-full my-24">
          <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
            Mission Statement
          </h1>
          <br />
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            At the Center for Young Colorful Minds, we're on a mission to revolutionize how teens access accurate mental health information and to empower teens with resources needed to advocate for their mental health. In a world where mental health content and discussions are gaining momentum, our primary goal is to offer teens and young adults reliable and relatable mental health resources, especially for youth who scroll through social media seeking guidance.
          </p>
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            Join us at the Center for Young Colorful Minds where we're not just changing the conversation, but we are driving the conversation for how to break down stigma and build resilient communities.
          </p>
          <br />
          <div className="flex flex-col max-w-7xl items-center mt-8 mx-auto">
            <div className="flex gap-4 px-8 flex-col lg:flex-row z-[1]">
              <IonCard>
                <img src="trusted-info.svg" />
                <IonCardHeader className="justify-center items-center">
                  <h4 className="text-[#101066] font-semibold">
                    Trusted Information
                  </h4>
                </IonCardHeader>
              </IonCard>
              <IonCard>
                <img src="collaboration.svg" />
                <IonCardHeader className="justify-center items-center">
                  <h4 className="text-[#101066] font-semibold">
                    Collaboration
                  </h4>
                </IonCardHeader>
              </IonCard>
              <IonCard>
                <img src="youth-empowerment.svg" />
                <IonCardHeader className="justify-center items-center">
                  <h4 className="text-[#101066] font-semibold">
                    Youth Empowerment
                  </h4>
                </IonCardHeader>
              </IonCard>
            </div>
          </div>
        </div>
      </div>
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
      {/* <DualColumnText
        title="Explore Our Mental Health Resources"
        description="Discover a wealth of resources and articles on mental specifically curated for teans."
        actions={[{ text: "Learn More", link: "#" }]}
      /> */}
    </div>
  );
};

export default About;
