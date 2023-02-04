import styled, { keyframes } from "styled-components";

import * as ResumeDownloadAPI from "src/interfaces/api/downloadResume";
import MenuList from "./MenuList";
import Stack from "src/utils/Stack";
import React from "react";
import { useOutsideClick } from "src/hooks/useOutsideClick";

const HeaderWrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 50px;
  display: flex;
  padding: 8px;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  padding-right: 8px;
`;

const downloadBottom = keyframes`
    from{ transform: translateY(0px); }
    to{transform: translateY(4px); }
`;

const Download = styled.div`
  display: inline-block;
`;

const ResumeWrapper = styled.div`
  padding: 4px 8px;
  border-radius: 25px;
  border: 1px solid #000;
  transition: all ease 0.3s;

  &:hover {
    cursor: pointer;
    border: 1px solid #fff;
    ${Download} {
      animation: ${downloadBottom} 1s linear 3;
    }
  }
`;

const ContactMe = styled.div`
  padding: 4px 8px;
  border-radius: 25px;
  border: 1px solid #000;
  transition: all ease 0.3s;

  &:hover {
    cursor: pointer;
    border: 1px solid #fff;
  }
`;

const Links = styled.a`
  padding: 0px 4px;
  padding-top: 4px;
  border-radius: 25px;
  border: 1px solid #000;
  transition: all ease 0.3s;

  &:hover {
    border: 1px solid #fff;
    transform: translateY(-4px);
  }
`;

const Header = () => {
  const personalEmail = process.env.REACT_APP_PERSONAL_EMAIL;
  const contactRef = React.useRef(null);
  const [showContacts, setShowContacts] = React.useState(false);

  useOutsideClick(contactRef, () => setShowContacts(false));

  return (
    <HeaderWrapper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo src="./MyName.png" />
        <MenuList />
      </div>
      {/* <div style={{ cursor: "pointer" }}>HIRE ME</div> */}
      {/* Todo(Souvik): Make it as dropdown, with Download resume & contact */}
      <Stack margin={16} style={{ display: "flex", alignItems: "center" }}>
        <ResumeWrapper
          style={{ cursor: "pointer" }}
          onClick={() => ResumeDownloadAPI.GET.service()}
        >
          <Download>&#129095;</Download> RESUME
        </ResumeWrapper>
        {showContacts ? (
          <div ref={contactRef}>
            <Stack margin={12}>
              <Links href={`mailto: ${personalEmail}`} target={"_blank"}>
                <img
                  src="gmail.png"
                  width="22"
                  height="22"
                  title={`Gmail: ${personalEmail}`}
                  alt="gmail"
                />
              </Links>
              <Links
                style={{ padding: "4px 6px 0px 6px" }}
                href="https://www.linkedin.com/in/souvik1000/"
                target={"_blank"}
              >
                <img
                  src="linkedIn.png"
                  width="19"
                  height="19"
                  title="LinkedIn: Souvik Ghosh"
                  alt="linkedIn"
                />
              </Links>
              <Links href="https://github.com/souvik1000" target={"_blank"}>
                <img
                  src="github_white.png"
                  width="24"
                  height="24"
                  title="Github: @souvik1000"
                  alt="github"
                />
              </Links>
              <Links
                href="https://codesandbox.io/dashboard/sandboxes/?workspace=8a261c9d-2efc-4cc7-bf48-4b5f03350f8c"
                target={"_blank"}
              >
                <img
                  src="codesandbox.png"
                  width="25"
                  height="25"
                  title="Codesandbox: Souvik Ghosh"
                  alt="codesandbox"
                />
              </Links>
            </Stack>
          </div>
        ) : (
          <ContactMe onClick={() => setShowContacts(!showContacts)}>
            CONTACT ME
          </ContactMe>
        )}
      </Stack>
    </HeaderWrapper>
  );
};

export default Header;
