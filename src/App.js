import "./App.css";
import Banner from "./Components/Banner/Banner";
import Expertise from "./Components/Expertise/Expertise";
import Ready from "./Components/Ready/Ready";
import SuccessStory from "./Components/SuccessStory/SuccessStory";

function App() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-white">
        <div className="w-full navbar bg-white shadow-lg">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 "><h4 className="text-[#314bb3] text-2xl font-bold">Incubyte</h4></div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal text-[#6b80c9] font-semibold">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Our Expertise</a>
              </li>
              <li>
                <a href="/">Success Stories</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <Banner />
        <Expertise />
        <SuccessStory />
        <Ready />
        <div>
          <p className="text-center">© 2023 Incubyte</p>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-[#6b80c9]">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Our Expertise</a>
          </li>
          <li>
            <a href="/">Success Stories</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
