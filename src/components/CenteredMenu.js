import React, { useState } from "react";
import { Link } from "react-router-dom";

const CenteredMenu = () => {
  const [contact, setContact] = useState(true);
  const [mail, setMail] = useState(false);
  const [dressMeUpDetailVis, setDressMeUpDetailVis] = useState(false);
  const [metaDomainDetailVis, setMetaDomainDetailVis] = useState(false);
  const [evi2DetailVis, setEvi2DetailVis] = useState(false);

  const toggle = () => {
    setContact(!contact);
  };

  const toggleMail = () => {
    setMail(!mail);
  };

  const toggleDressMeUpDetailVis = () => {
    setDressMeUpDetailVis(!dressMeUpDetailVis);
  };

  const toggleMetaDomainDetailVis = () => {
    setMetaDomainDetailVis(!metaDomainDetailVis);
  };

  const toggleEvi2DetailVis = () => {
    setEvi2DetailVis(!evi2DetailVis);
  };

  return (
    <div className="Aligner">
      <div className="AlignerTop" style={{margin: "25px"}}>
        {dressMeUpDetailVis || metaDomainDetailVis || evi2DetailVis ? (
          dressMeUpDetailVis ? (
            <span className="detailsFont">
             <b>Random Outfit generator</b> - React, Express.js
            </span>
          ) : metaDomainDetailVis ? (
            <span className="detailsFont"><b>Domain meta search engine</b> - Express.js</span>
          ) : (
            <span className="detailsFont"><b>MVP self-evaluating tool for dutch schools</b> - React, Express.js</span>
          )
        ) : (
          <span style={{ opacity: "0%" }} className="detailsFont">
            0%
          </span>
        )}
      </div>

      <a
        target="_blank"
        href="https://dressmeupcc.herokuapp.com/"
        className="menuFont"
        onMouseOver={toggleDressMeUpDetailVis}
        onMouseLeave={toggleDressMeUpDetailVis}
      >
        DRESS_ME_UP
      </a>
      <a
        target="_blank"
        href="https://metadomain2.herokuapp.com/"
        className="menuFont"
        onMouseOver={toggleMetaDomainDetailVis}
        onMouseLeave={toggleMetaDomainDetailVis}
      >
        META_DOMAIN
      </a>
      <a
        target="_blank"
        href="https://evi2.herokuapp.com/"
        className="menuFont"
        onMouseOver={toggleEvi2DetailVis}
        onMouseLeave={toggleEvi2DetailVis}
      >
        EVI_2
      </a>
      <span style={{opacity: "0%", margin: "25px"}}>
      
      </span>

      {!contact ? (
        <span onClick={toggle} className="menuFont">
          {"Contact".toUpperCase()}
        </span>
      ) : (
        <div className="contactContainer">
          <a target="_blank" href="https://github.com/fredhaus">
            <img src="/icon_git.png" alt="Git" className="contactIcon" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/fh-/">
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
