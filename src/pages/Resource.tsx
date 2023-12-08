import ReactMarkdown from "react-markdown";
import DualColumnImageText from "../components/DualColumnImageText";
import { articles } from "../dummyArticles";
import { generateTitleId } from "../utils";
import DualColumnText from "../components/DualColumnText";
import ResourceCard from "../components/ResourceCard";
import { IonText } from "@ionic/react";

const resources = [
  {
    title: "Understood",
    description: "We are the lifelong guide for those who learn and think differently. In the past year, we’ve helped more than 20 million people discover their potentials, take control of their lives, and stay on positive paths.",
    image: "/understood.png",
    action: { text: "Visit", link: "https://www.understood.org/" },
  },
  {
    title: "The Trevor Project",
    description: "The Trevor Project is an American nonprofit organization founded in 1998. Focused on suicide prevention efforts among lesbian, gay, bisexual, transgender, queer, and questioning youth, they offer a toll-free telephone number where confidential assistance is provided by trained counselors.",
    image: "/trevor1.png",
    action: { text: "Visit", link: "https://www.thetrevorproject.org/" },
  },
];

const Resource: React.FC = () => {
  return (
    <div className="pt-12">
      <div className="z-10">
        <section>
          <DualColumnText
            title="Resources and Initiatives for Mental Health"
            description="There are many resources available for mental health. Here are some of the resources that we know to be helpful."

          />
          <div className="curve "/>
        </section>
      </div>
      <div className="z-40 flex justify-center">
      
        <div className="flex justify-center">
          {/*   <div className="p-8 max-w-7xl grid gap-8 md:gap-16 md:grid-cols-3 md:p-12">
          <div className="col-span-1 flex flex-col items-start">
            <div className="sticky top-[20%]">
              <h4 className="text-4xl font-bold font-sans mb-4 md:mb-6 md:text-3xl">
                Table of Content
              </h4>
              <div className="mt-2 bg-white focus:outline-none">
                <div className="py-1" role="none">
                  {articles.map((article) => (
                    <a
                      href={`resource#${generateTitleId(article.title)}`}
                      className="text-gray-700 block px-4 py-2 text-md hover:bg-gray-50"
                    >
                      {article.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-start justify-center">
            <div className="grid gap-14">
              {articles.map((article) => (
                <div key={generateTitleId(article.title)}>
                  <h3
                    id={generateTitleId(article.title)}
                    className="text-4xl font-bold font-sans mb-4 md:mb-6 md:text-4xl"
                  >
                    {article.title}
                  </h3>
                  <ReactMarkdown className="markdown">
                    {article.markdown}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
          {/* <DualColumnImageText
        title="Medium Length Heading Goes Here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        image={{ source: "/cycm-article-resource.png", position: "right" }}
        actions={[
          { text: "Button 1", link: "#" },
          { text: "Button 2", link: "#" },
        ]}
      />
      */}
          <div className="flex max-w-7xl px-8 flex-col md:px-12 md:flex-row">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.title}
                title={resource.title}
                description={resource.description}
                image={resource.image}
                action={resource.action}
                color="dark"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
