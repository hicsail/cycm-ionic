import ReactMarkdown from "react-markdown";
import DualColumnImageText from "../components/DualColumnImageText";
import { articles } from "../dummyArticles";
import { generateTitleId } from "../utils";
import DualColumnText from "../components/DualColumnText";
import ResourceCard from "../components/ResourceCard";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
} from "@ionic/react";

const resources = [
  {
    title: "NAMI",
    description:
      "The National Alliance on Mental Illness is a United States-based nonprofit organization originally founded as a grassroots group by family members of people diagnosed with mental illness.",
    image: "/nami.png",
    action: { text: "Visit", link: "https://www.understood.org/" },
  },
  {
    title: "The Trevor Project",
    description:
      "The Trevor Project is an American nonprofit organization founded in 1998. Focused on suicide prevention efforts among lesbian, gay, bisexual, transgender, queer, and questioning youth, they offer a toll-free telephone number where confidential assistance is provided by trained counselors.",
    image: "/trevor1.png",
    action: { text: "Visit", link: "https://www.thetrevorproject.org/" },
  },
  {
    title: "Boys & Girls Clubs of Boston",
    description:
      "We provides a pipeline for young people to explore their passions, find their purpose, and prepare for a life of success and impact.",
    image: "/boysandgirls.png",
    action: null,
  },
  {
    title: "Boston Public Schools",
    description:
      "Boston Public Schools (BPS) educates over 2,800 K1 students in over 130 classrooms across the District.",
    image: "/bps.png",
    action: null,
  },
  {
    title: "Jed Foundation",
    description:
      "The Jed Foundation is a non-profit organization that protects emotional health and prevents suicide for teens and young adults in the United States.",
    image: "/jed.png",
    action: null,
  },
  {
    title: "AFSP",
    description:
      "The American Foundation for Suicide Prevention is a voluntary health organization that advocates for research and education around suicide.",
    image: "/asp.png",
    action: null,
  },
];

const Resource: React.FC = () => {
  return (
    <div className="">
      <div className="pt-36 flex flex-col justify-center items-center bg-[#FFE2E2] min-h-screen px-12 md:px-0">
        {/* <img className="w-full h-auto z-[10]" alt="union-1" src="red-union.svg" /> */}
        <div className="p-4 max-w-4xl w-full my-24">
          <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
            Mental Health Resources for Teenagers
          </h1>
          <br />
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            Here at the Center of Young Colorful Minds, we are dedicated to
            supporting the mental well-being of teenagers. Below, you'll find a
            curated list of resources designed to help you navigate the
            challenges of adolescence and prioritize your mental health.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid gap-8 md:grid-cols-3 md:mb-16">
            {resources.map((resource) => (
              <IonCard style={{}}>
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="mx-auto md:w-full"
                />
                <IonCardHeader>
                  <IonCardTitle>{resource.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{resource.description}</IonCardContent>
              </IonCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
