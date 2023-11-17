import ReactMarkdown from "react-markdown";
import DualColumnImageText from "../components/DualColumnImageText";
import { articles } from "../dummyArticles";
import { generateTitleId } from "../utils";

const Resource: React.FC = () => {
  return (
    <div className="pt-12">
      <DualColumnImageText
        title="Resources for Mental Health"
        description="Description of the article/Published date"
        image={{ source: "/cycm-article-resource.png", position: "right" }}
      />
      <div className="flex justify-center my-16">
        <div className="p-8 max-w-7xl grid gap-8 md:gap-16 md:grid-cols-3 md:p-12">
          <div className="col-span-1 flex flex-col items-start">
            <div className="sticky top-[20%]">
              <h4 className="text-4xl font-bold font-sans mb-4 md:mb-6 md:text-3xl">Table of Content</h4>
              <div className="mt-2 bg-white focus:outline-none">
                <div className="py-1" role="none">
                  {articles.map((article) => (
                    <a
                      href={`resource#${generateTitleId(article.title)}`}
                      className="text-gray-700 block px-4 py-3 text-sm hover:bg-gray-50"
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
                  <ReactMarkdown className="markdown">{article.markdown}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DualColumnImageText
        title="Medium Length Heading Goes Here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        image={{ source: "/cycm-article-resource.png", position: "right" }}
        actions={[
          { text: "Button 1", link: "#" },
          { text: "Button 2", link: "#" },
        ]}
      />
    </div>
  );
};

export default Resource;
