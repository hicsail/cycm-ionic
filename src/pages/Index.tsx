import Discover from "../components/Discover";
import Empower from "../components/Empower";
import Hero from "../components/Hero";
import ResourceCard from "../components/ResourceCard";

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
      description:
        "Find articles, videos, and tools to support your mental well-being.",
      image: "/cycm-card02.png",
      action: { text: "Get Started", link: "" },
    },
  ];

  return (
    <div>
      <Hero heading="Empowering Teens with Mental Health Resources" />
      <section>
        <Empower
          title="Supporting Teens Through Mental Health Awareness"
          description="Discover helpful resources and articles to promote mental health awareness and support for teens. Together, we can create a safe and nurturing environment for their well-being."
          source=""
          image="/cycm-empower.png"
        />
        <div className="flex flex-col items-center my-16">
          <div className="max-w-lg">
            <h5 className="text-center font-bold font-sans mb-12 max-w-7xl px-8 text-4xl md:px-12 md:text-5xl z-[0]">
              Discover Mental Health Resources for Teens
            </h5>
            <p className="text-center font-sans mb-12 max-w-7xl px-8 text-md md:px-12 md:text-lg z-[0]">
              A multifaceted approach to address the growing mental health crisis among youth of color and LGBTQ youth
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
        </div>
        <div className="curve" />
      </section>
      <div className="mt-32">
        <Discover />
      </div>
    </div>
  );
};

export default Index;
