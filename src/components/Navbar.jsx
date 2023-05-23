import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuIcon from "../assets/menu-icon.svg";
import CloseIcon from "../assets/close-icon.svg";
import Resume from "../assets/Muhammad-Umer-Khan-CV.pdf";

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-blue-600" : ""
        } hover:text-blue-600 transition duration-500 p-3`}
      href={`#${lowerCasePage}`}
      onClick={() => {setSelectedPage(lowerCasePage); setIsMenuToggled(false);}}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const navbarBackground = isTopOfPage ? "" : "bg-slate-950";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
      <div className="flex items-center justify-between mx-auto w-11/12">

        <h4 className="text-2xl font-bold text-white">Muhammad Umer Khan</h4>
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-10 font-opensans text-white text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="Teckstack"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="Certificates"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <a href={Resume} download className="border-blue-600 border-spacing-1 border-solid border-2 p-3 rounded-3xl hover:bg-blue-600" > Resume</a>
          </div>
        ) : (
          <button
            className="rounded-full bg-blue-600 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={MenuIcon} className="h-5" />
          </button>
        )}


        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-slate-950 w-[250px] overflow-y-auto">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={CloseIcon} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[20%] text-2xl text-white">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Teckstack"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Certificates"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <a href={Resume} download className="border-blue-600 border-spacing-1 border-solid border-2 p-3 rounded-3xl hover:bg-blue-600 w-32 mb-10" > Resume</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;