import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-blue-600 before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-blue-600 before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="z-40 flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#about"
        className={`${selectedPage === "about" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("about")}
      />

      <AnchorLink
        href="#techstack"
        className={`${selectedPage === "techstack" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("techstack")}
      />

      <AnchorLink
        href="#certificates"
        className={`${selectedPage === "certificates" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("certificates")}
      />

      <AnchorLink
        href="#projects"
        className={`${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        href="#contact"
        className={`${selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
