import { useState, createContext } from "react";
import "./App.css";

import Content from "./components/Content";
import ImagesBlock from "./components/ImagesBlock";
import DropBoxContent from "./components/DropBoxContent";

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
      { title: "HOME block1" },
      { title: "HOME block2" },
      { title: "HOME block3" },
    ],
    imagesBlock: ["HOME image1", "HOME image2", "HOME image3"],
  },
  {
    title: "ABOUT",
    contentBlock: { title: "welcome to about" },
    subContent: [
      { title: "ABOUT block1" },
      { title: "ABOUT block2" },
      { title: "ABOUT block3" },
    ],
    imagesBlock: ["ABOUT image1", "ABOUT image2", "ABOUT image3"],
  },
  {
    title: "CONTACT",
    contentBlock: { title: "welcome to contact" },
    subContent: [
      { title: "CONTACT block1" },
      { title: "CONTACT block2" },
      { title: "CONTACT block3" },
    ],
    imagesBlock: ["CONTACT image1", "CONTACT image2", "CONTACT image3"],
  },
];

function App() {
  const [tabs, setTabs] = useState("HOME");
  const [subTab, setSubTab] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const filterData = contentDetails.filter((e) => e.title === tabs);
  // console.log(subTab);

  // console.log(tabs);
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
                }}
              >
                {e.title}
              </h3>
              {e.title === tabs && (
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
              )}
            </>
          ))}
        </div>

        {filterData.map((item, idx) => (
          <div key={idx} className="subdiv">
            {!dropDown ? (
              <Content details={item.contentBlock} />
            ) : (
              <>
                <DropBoxContent data={item.subContent} />
              </>
            )}

            <ImagesBlock imageDetails={item.imagesBlock} />
          </div>
        ))}
      </div>
    </store.Provider>
  );
}

export default App;
