import React, { useState } from "react";
import { Link } from "react-router-dom";

const CenteredMenu = () => {
  const [contact, setContact] = useState(false);
  const [mail, setMail] = useState(false);

  let toggleClassName = "hidden";

  const toggle = () => {
    setContact(!contact);
    !contact ? (toggleClassName = "hidden") : (toggleClassName = "visible");
  };

  const toggleMail = () => {
    setMail(!mail);
  };

  return (
    <div className="Aligner">
      <Link to={"/cv"} className="menuFont">
        {"Curriculum Vitae".toUpperCase()}
      </Link>
      <Link to={"/projects"} className="menuFont">
        {"Projects".toUpperCase()}
      </Link>
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
                alt="frederik@hausburg.net"
                className="contactIcon"
              />
            </a>
          ) : (
            <span onClick={toggleMail} className="menuFont">
              {"Frederik@Hausburg.net".toUpperCase()}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CenteredMenu;
