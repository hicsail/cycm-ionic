import CenterDescriptionCards from "../components/CenterDescriptionCards";
import Empower from "../components/Empower";
import HelpInfographics from "../components/HelpInfographics";
import NewHero from "../components/NewHero";
import SocialInfographics from "../components/SocialInfographics";

// .blue-texts {
//   height: 271px;
//   position: relative;
//   width: 523px;
// }

// .blue-texts .high-school-students {
//   color: #101066;
//   font-family: "Montserrat-SemiBold", Helvetica;
//   font-size: 22px;
//   font-weight: 600;
//   left: 8px;
//   letter-spacing: 0.84px;
//   line-height: 28.6px;
//   position: absolute;
//   top: 153px;
//   width: 449px;
// }

// .blue-texts .text-wrapper {
//   color: #101066;
//   font-family: "Montserrat-SemiBold", Helvetica;
//   font-size: 100px;
//   font-weight: 600;
//   left: 0;
//   letter-spacing: -10px;
//   line-height: 151px;
//   position: absolute;
//   top: 26px;
//   white-space: nowrap;
//   width: 523px;
// }

const Index: React.FC = () => {
  const resources = [
    {
      title: "Explore Informative Articles on Mental Health",
      description: "Find the support you need in our welcoming community.",
      image: "/cycm-card00.png",
      action: { text: "Learn More", link: "" },
    },
    {
      title: "Connect with Others in a Supportive Community",
      description: "Share your experiences and learn from others.",
      image: "/cycm-card01.png",
      action: { text: "Join Now", link: "" },
    },
    {
      title: "Access a Variety of Mental Health Resources",
      description: "Find articles, videos, and tools to support your mental well-being.",
      image: "/cycm-card02.png",
      action: { text: "Get Started", link: "" },
    },
  ];

  return (
    <div>
      <NewHero />
      <div className="bg-gradient-to-b from-[#FFE2E2] to-[#FFFFFF]">
        <div
          style={{
            height: "271px",
          }}
        />
        <CenterDescriptionCards />

        <div className="relative max-w-7xl mx-auto my-16">
          <img className="w-full h-auto" alt="Vector" src="vector.svg" />
          <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#101066] text-[22px] md:text-[48px] lg:text-[64px] text-center">
              TEENS NEED
              <br />
              MENTAL HEALTH SUPPORT
            </h1>
          </div>
        </div>
        <Empower
          title="Supporting Teens Through Mental Health Awareness"
          description="Discover helpful resources and articles to promote mental health awareness and support for teens. Together, we can create a safe and nurturing environment for their well-being."
          source=""
          image="/cycm-empower.png"
        />
      </div>

      <section
        style={{
          background: "linear-gradient(180deg, #FB4B45 0%, #FFABE1 66.34%)",
        }}
      >
        <div>
          {/* <div className="flex flex-col items-center my-16">
          <div className="max-w-lg">
            <h5 className="text-center font-bold font-sans mb-12 max-w-7xl px-8 text-4xl md:px-12 md:text-5xl z-[0]">
              Discover Mental Health Resources for Teens
            </h5>
            <p className="text-center font-sans mb-12 max-w-7xl px-8 text-md md:px-12 md:text-lg z-[0]">
              A multifaceted approach to address the growing mental health
              crisis among youth of color and LGBTQ youth
            </p>
          </div>
          <div className="flex max-w-7xl px-8 flex-col md:px-12 md:flex-row z-[1]">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.title}
                title={resource.title}
                description={resource.description}
                image={resource.image}
                action={resource.action}
              />
            ))}
          </div>
        </div> */}
          <SocialInfographics />
        </div>
      </section>
      {/* <div className="mt-32">
        <Discover />
      </div> */}
    </div>
  );
};

export default Index;
