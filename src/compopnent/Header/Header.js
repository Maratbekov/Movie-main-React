import React, { useContext, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
function Header({ changeMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("mode")) || false
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const { setLanguage } = useContext(LanguageContext);
  console.log(mode);
  const handleMode = () => {
    setMode(!mode);
    console.log(!mode);
    changeMode(!mode);
    localStorage.setItem("mode", JSON.stringify(!mode));
  };

  const handleLang = (e) => {
    setLanguage(e.target.value);
  };

  const handleNavigate = () => {
    console.log();
    navigate(`/search/${search}`);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleNavigate();
    }
  };

  const handleLiveSearch = (e) => {
    console.log(e);
    navigate(`/search/${e.target.value}`);
    // handleNavigate();
  };

  useEffect(() => {}, [mode]);
  return (
    <div>
      <nav className="bg-gray-800 w-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    to="/popular"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Popular
                  </NavLink>

                  <NavLink
                    to="/top-rated"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Top Rated
                  </NavLink>

                  <NavLink
                    to="/upcoming"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Upcoming
                  </NavLink>

                  <NavLink
                    to="/now-playing"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Now Playing
                  </NavLink>
                  <NavLink
                    to="/latest"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Latest
                  </NavLink>

                  <label>
                    <input
                      onChange={handleMode}
                      checked={!mode}
                      className="toggle-checkbox"
                      type="checkbox"
                    ></input>
                    <div className="toggle-slot">
                      <div className="sun-icon-wrapper"></div>
                      <div className="toggle-button"></div>
                      <div className="moon-icon-wrapper"></div>
                    </div>
                  </label>
                  <select
                    name=""
                    id=""
                    className="rounded"
                    onChange={handleLang}
                  >
                    <option value="ar-AE">اللغة العربية</option>
                    <option value="ru-RU" selected>
                      русский
                    </option>
                    <option value="tr-TR">turkce</option>
                    <option value="en-US">english</option>
                  </select>

                  <div className="flex items-center">
                    <label for="voice-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="voice-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for a movie"
                        onChange={handleSearch}
                        // onKeyDown={handleEnter}
                        onKeyDown={handleLiveSearch}
                        required
                      />
                      <button className="flex absolute inset-y-0 right-0 items-center pr-3">
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <button
                      onClick={handleNavigate}
                      className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true"
                        class="mr-2 -ml-1 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition> */}
      </nav>
    </div>
  );
}

export default Header;
