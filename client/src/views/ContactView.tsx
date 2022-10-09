import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Button from "../elements/Button";

const ContactView = () => {
  const [tooltip, setTooltip] = useState<boolean>(false);
  const [setTimeoutId, setSetTimeoutId] = useState<number>(0);

  const doTooltip = (duration: number) => {
    window.clearTimeout(setTimeoutId);
    setTooltip(true);
    const id = window.setTimeout(() => {
      setTooltip(false);
    }, duration * 1000);
    setSetTimeoutId(id);
  };
  return (
    <div className=" bg-gray-200 dark:bg-gray-900 flex flex-wrap items-center justify-center">
      <div className="container max-w-lg bg-white rounded-xl overflow-hidden dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-6">
        <div className="h-2/4 h-48 sm:h-72 overflow-hidden">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
        </div>
        <div className="flex justify-start px-5 -mt-12">
          <span className="block relative h-32 w-32">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQFAAaGz4KRXmQ/profile-displayphoto-shrink_400_400/0/1592107357026?e=1669248000&v=beta&t=iJI2mByDn18kPxW34sbaWXJNyddn3HDYhAvQWT4Qvbw"
              className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
            />
          </span>
        </div>
        <div>
          <div className="px-7 mb-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-indigo-700 dark:text-gray-300">
              Hunter M. Pruett
            </h2>
            <ReactMarkdown className="mt-2 text-gray-600 dark:text-gray-300 mb-6">
              Hey there, if you'd like to reach out to me, please feel free to
              shoot me an email or contact me via socials below.
            </ReactMarkdown>
            <div className="group relative">
              <Button
                iconName="envelope"
                size="lg"
                onClick={() => {
                  navigator.clipboard.writeText("hunterpruett2003@gmail.com");
                  doTooltip(3);
                }}
              >
                hunterpruett2003@gmail.com
              </Button>
              <div
                className={`whitespace-nowrap	 absolute opacity-0 -z-50 border-none ${
                  tooltip && "opacity-100 z-50"
                } transition duration-100 -top-3 left-1/2 transform -translate-x-1/2 -translate-y-full px-4 py-2 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700`}
              >
                Copied to clipboard!
              </div>
            </div>
            <div className="text-xs text-gray-400">Click to copy</div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6  text-indigo-400 h-8 ">
              <div
                onClick={() =>
                  window.open("https://github.com/1Ghasthunter1", "_blank")
                }
                className="hover:text-indigo-600 focus:outline-none"
              >
                <FontAwesomeIcon className="w-8 h-8" icon={["fab", "github"]} />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/hunter-pruett/",
                    "_blank"
                  )
                }
                className="hover:text-indigo-600 focus:outline-none"
              >
                <FontAwesomeIcon
                  className="w-8 h-8"
                  icon={["fab", "linkedin"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactView;
