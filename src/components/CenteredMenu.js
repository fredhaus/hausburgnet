import React, { useState } from "react";

const CenteredMenu = () => {
  const [contact, setContact] = useState(true);
  const [mail, setMail] = useState(false);
  const [focus, setFocus] = useState("");

  const projects = [
    {
      name: "dressmeup",
      title: "DRESS_ME_UP",
      url: "https://dressmeup2.herokuapp.com/",
      description: "Random Outfit generator",
      stack: "React, Express, Node, MongoDB, Jimp, Cloudinary",
      thumbnailUrl: "/thu_dre.jpg",
    },

    {
      name: "metadomain",
      title: "META_DOMAIN",
      url: "https://metadomain2.herokuapp.com/",
      description: "Domain meta search engine",
      stack: "Handlebars, Node, Express, MongoDB",
      thumbnailUrl: "/thu_meta.jpg",
    },

    {
      name: "evi2",
      title: "EVI_2",
      url: "https://evi2.herokuapp.com/",
      description: "MVP self-evaluating tool for dutch schools",
      stack: "React, NodeJs, MongoDB, Webflow",
      thumbnailUrl: "/thu_evi2.jpg",
    },
  ];

  const inFocus = (event) => {
    setFocus(event.target.name);
    
  };

  const toggle = () => {
    setContact(!contact);
  };

  const toggleMail = () => {
    setMail(!mail);
  };

  return (
    <div className="Aligner">
      {focus ? (
        projects.map((elem, i) =>
          elem.name === focus ? (
            <img
              style={{ height: "120px", width: "160px" }}
              key={i}
              src={elem.thumbnailUrl}
              alt={elem.name}
            />
            
          ) : null
        )
      ) : (
        <img
          style={{ height: "120px", width: "160px", opacity: "0.2" }}
          src={"/hsbrgHome.png"}
          alt=""
        />
      )}

      <div className="AlignerTop" style={{ margin: "25px" }}>
        {focus ? (
          projects.map((elem, i) =>
            elem.name === focus ? (
              <span key={i} className="detailsFont">
                <b>{elem.description}</b>
                
                {elem.stack}
              </span>
            ) : null
          )
        ) : (
          <span style={{ opacity: "0%" }} className="detailsFont">
            0% <br/> 0%
          </span>
        )}
      </div>

      {projects.map((elem, i) => (
        <a
          key={i}
          target="_blank"
          rel="noopener noreferrer"
          href={elem.url}
          className="menuFont"
          name={elem.name}
          onMouseOver={inFocus}
          onMouseLeave={() => setFocus("")}
        >
          {elem.title}
        </a>
      ))}

      <span style={{ opacity: "0%", margin: "25px" }}></span>

      {!contact ? (
        <span onClick={toggle} className="menuFont">
          {"Contact".toUpperCase()}
        </span>
      ) : (
        <div className="contactContainer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fredhaus"
          >
            <img src="/icon_git.png" alt="Git" className="contactIcon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fh-/"
          >
            <img
              src="/icon_linkedin.png"
              alt="LinkedIn"
              className="contactIcon"
            />
          </a>

          {!mail ? (
            <a onClick={toggleMail}>
              <img
                src="/icon_mail.png"
                alt="frederikhausburg@gmail.com"
                className="contactIcon"
              />
            </a>
          ) : (
            <span onClick={toggleMail} className="mailFont">
              {"frederik@hausburg.net".toUpperCase()}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CenteredMenu;
