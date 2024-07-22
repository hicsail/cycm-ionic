import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import ReactMarkdown from "react-markdown";

const token = import.meta.env.VITE_STRAPY_TOKEN;
const url = import.meta.env.VITE_STRAPI_URL;

const Post: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [article, setArticle] = useState<any>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/articles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        setArticle(resp.data);
      });
  }, []);

  return (
    <div className="flex items-center justify-center mt-28 mb-16 bg-[#FCF3DF] w-full md:px-12">
      <div className="max-w-7xl">
        <div className="mb-4">
          <ol className="flex justify-start items-center whitespace-nowrap px-4 md:px-0 mb-16 md:mb-0">
            <li className="inline-flex items-center">
              <a
                className="flex items-center gap-2 text-lg md:text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                href="/discover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
                Back to exploration page
              </a>
              <svg
                className="flex-shrink-0 size-5 text-gray-400 mx-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 13L10 3"
                  stroke="currentColor"
                  strokeLinecap="round"
                ></path>
              </svg>
            </li>
            <li
              className="inline-flex items-center text-lg md:text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              Article
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-items-center">
          <div className="flex flex-col justify-center gap-4 w-[90%] md:w-full">
            <h2 className="text-4xl md:text-3xl text-center md:text-left font-semibold font-sans text-[#101066]">
              {article?.attributes.title}
            </h2>
            {/* <p>{article?.description}</p> */}
            {/* place holder text */}
            <p className="text-md text-center md:text-left tracking-wider text-[#101066]">
              {article?.attributes.teasers}
            </p>
            {/* <span>{article?.attributes.author}</span> */}
            <div className="flex text-sm md:text-md tracking-wider align-middle text-[#101066]">
              <div className="flex pr-4 gap-3">
                <TwitterShareButton
                  url={window.location.href}
                  title={article?.attributes.title}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="26"
                    height="26"
                    viewBox="0 0 30 30"
                    fill="#101066"
                  >
                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                  </svg>
                </TwitterShareButton>
                <FacebookShareButton
                  url={window.location.href}
                  title={article?.attributes.title}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="26"
                    height="26"
                    viewBox="0 0 30 30"
                    fill="#101066"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </FacebookShareButton>
              </div>
              <div>{article?.attributes.author ?? "CYCM Team"}</div>
              <div className="px-2">&#183;</div>
              <div>
                {new Date(
                  article?.attributes.published_date
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 md:px-0">
            {/* random image as placeholder */}
            <img src="https://picsum.photos/400/300" alt="random" />
            {/* <img src={article?.image} alt={article?.title} /> */}
          </div>
        </div>
        {/* <div
          ref={ref}
          className="flex justify-center align-center my-12"
          onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#FB4B45"
            className="bi bi-chevron-down animate-bounce"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div> */}
        <div className="my-12" />
        <div className="md:w-2/3 px-10 md:px-0 text-sm md:text-md tracking-wide md:tracking-wider text-[#101066] mb-16">
          <ReactMarkdown>{article?.attributes.body_markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Post;
