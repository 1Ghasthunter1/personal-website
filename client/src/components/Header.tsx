/* This example requires Tailwind CSS v2.0+ */
import { useNavigate, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Example() {
  const navigate = useNavigate();
  const currentUrl = useLocation().pathname;
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon className="block h-6 w-6" icon="x" />
                  ) : (
                    <FontAwesomeIcon className="block h-6 w-6" icon="bars" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="icon.svg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="icon.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => {
                          navigate(item.href);
                        }}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          currentUrl === item.href
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  onClick={() =>
                    window.open("https://github.com/1Ghasthunter1", "_blank")
                  }
                  className="rounded-full bg-gray-800 m-2 text-gray-400 hover:text-white focus:outline-none"
                >
                  <FontAwesomeIcon
                    className="w-6 h-6"
                    icon={["fab", "github"]}
                  />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/hunter-pruett/",
                      "_blank"
                    )
                  }
                  className="rounded-full bg-gray-800 m-2 text-gray-400 hover:text-white focus:outline-none"
                >
                  <FontAwesomeIcon
                    className="w-6 h-6"
                    icon={["fab", "linkedin"]}
                  />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
                    currentUrl === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <div className="flex justify-left">{item.name}</div>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
