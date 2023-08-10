import { useState, createContext } from "react";
import "./App.css";

import Content from "./components/Content";
import ImagesBlock from "./components/ImagesBlock";
import DropBoxContent from "./components/DropBoxContent";
import DropImageBoxContent from "./components/DropBoxImageContent";
import { Routes, Route, Link } from "react-router-dom";
import Block1 from "./components/Home";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SubAbout from "./components/SubAbout";
import SubHome from "./components/SubHome";
import SubContact from "./components/SubContact";

export const store = createContext();

const navData = [
  {
    title: "HOME",
    link: "home",
    dropBoxItems: [
      { title: "HOME block1", link: "home/hometab1" },
      { title: "HOME block2", link: "home/hometab2" },
      { title: "HOME block3", link: "home/hometab3" },
    ],
  },
  {
    title: "ABOUT",
    link: "about",

    dropBoxItems: [
      { title: "ABOUT block1", link: "about/abouttab1" },
      { title: "ABOUT block2", link: "about/abouttab2" },
      { title: "ABOUT block3", link: "about/abouttab3" },
    ],
  },
  {
    title: "CONTACT",
    link: "contact",

    dropBoxItems: [
      { title: "CONTACT block1", link: "contact/contacttab1" },
      { title: "CONTACT block2", link: "contact/contacttab2" },
      { title: "CONTACT block3", link: "contact/contacttab3" },
    ],
  },
];

const contentDetails = [
  {
    title: "HOME",
    contentBlock: { title: "welcome to home" },
    subContent: [
      { title: "SUB HOME block1" },
      { title: "SUB HOME block2" },
      { title: "SUB HOME block3" },
    ],
    imagesBlock: ["HOME image1", "HOME image2", "HOME image3"],
    subImageContent: [
      ["SUB HOME image11", "SUB HOME image12", "SUB HOME image13"],
      ["SUB HOME image21", "SUB HOME image22", "SUB HOME image23"],
      ["SUB HOME image31", "SUB HOME image32", "SUB HOME image33"],
    ],
  },
  {
    title: "ABOUT",
    contentBlock: { title: "welcome to about" },
    subContent: [
      { title: "SUB ABOUT block1" },
      { title: "SUB ABOUT block2" },
      { title: "SUB ABOUT block3" },
    ],
    imagesBlock: ["ABOUT image1", "ABOUT image2", "ABOUT image3"],
    subImageContent: [
      ["SUB ABOUT image11", "SUB ABOUT image12", "SUB ABOUT image13"],
      ["SUB ABOUT image21", "SUB ABOUT image22", "SUB ABOUT image23"],
      ["SUB ABOUT image31", "SUB ABOUT image32", "SUB ABOUT image33"],
    ],
  },
  {
    title: "CONTACT",
    contentBlock: { title: "welcome to contact" },
    subContent: [
      { title: "SUB CONTACT block1" },
      { title: "SUB CONTACT block2" },
      { title: "SUB CONTACT block3" },
    ],
    imagesBlock: ["CONTACT image1", "CONTACT image2", "CONTACT image3"],
    subImageContent: [
      ["SUB CONTACT image11", "SUB CONTACT image12", "SUB CONTACT image13"],
      ["SUB CONTACT image21", "SUB CONTACT image22", "SUB CONTACT image23"],
      ["SUB CONTACT image31", "SUB CONTACT image32", "SUB CONTACT image33"],
    ],
  },
];

function App() {
  const [tabs, setTabs] = useState("HOME");
  const [subTab, setSubTab] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [activeId, setActiveId] = useState("");
  const filterData = contentDetails.filter((e) => e.title === tabs);
  // console.log(subTab);

  // console.log(tabs);
  const subTabHandler = (item) => {
    if (activeId === item) {
      setActiveId("");
    } else {
      setActiveId(item);
    }

    // console.log(item);
  };
  return (
    <store.Provider value={{ subTab }}>
      <div className="App">
        <div className="navbar">
          {navData.map((e, idx) => (
            <>
              <Link to={e.link}>
                <h3
                  key={idx}
                  onClick={() => {
                    setTabs(e.title);
                    setDropDown(false);

                    subTabHandler(idx);
                  }}
                >
                  {e.title}
                </h3>
              </Link>

              {activeId === idx && (
                <div className="dropbox">
                  {e.dropBoxItems.map((tab, idx) => (
                    <Link to={tab.link}>
                      <p
                        key={idx}
                        onClick={() => {
                          setDropDown(true);
                          setSubTab(idx);
                        }}
                      >
                        {tab.title}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {/* {e.title === tabs && (
                <div className="dropbox">
                  {e.dropBoxItems.map((tab, idx) => (
                    <p
                      key={idx}
                      onClick={() => {
                        setDropDown(true);
                        setSubTab(tab);
                      }}
                    >
                      {tab}
                    </p>
                  ))}
                </div>
              )} */}
            </>
          ))}
        </div>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="home/:hometab" element={<SubHome />} />

          <Route path="about" element={<About />} />
          <Route path="about/:abouttab" element={<SubAbout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:contacttab" element={<SubContact />} />
        </Routes>

        {/* {filterData.map((item, idx) => (
          <div key={idx} className="subdiv">
            {!dropDown ? (
              <>
                <Content details={item.contentBlock} />
                <ImagesBlock imageDetails={item.imagesBlock} />
              </>
            ) : (
              <>
                <DropBoxContent data={item.subContent} />
                <DropImageBoxContent data={item.subImageContent} />
              </>
            )}
          </div>
        ))} */}
      </div>
    </store.Provider>
  );
}

export default App;
