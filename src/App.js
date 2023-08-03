import { useState, createContext } from "react";
import "./App.css";

import Content from "./components/Content";
import ImagesBlock from "./components/ImagesBlock";
import DropBoxContent from "./components/DropBoxContent";
import DropImageBoxContent from "./components/DropBoxImageContent";

export const store = createContext();

const navData = [
  {
    title: "HOME",
    dropBoxItems: ["HOME block1", "HOME block2", "HOME block3"],
  },
  {
    title: "ABOUT",
    dropBoxItems: ["ABOUT block1", "ABOUT block2", "ABOUT block3"],
  },
  {
    title: "CONTACT",
    dropBoxItems: ["CONTACT block1", "CONTACT block2", "CONTACT block3"],
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

              {activeId === idx && (
                <div className="dropbox">
                  {e.dropBoxItems.map((tab, idx) => (
                    <p
                      key={idx}
                      onClick={() => {
                        setDropDown(true);
                        setSubTab(idx);
                      }}
                    >
                      {tab}
                    </p>
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

        {filterData.map((item, idx) => (
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
        ))}
      </div>
    </store.Provider>
  );
}

export default App;
