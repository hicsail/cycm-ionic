import { useLocation } from "react-router";
import { IonAlert, IonButton, IonIcon } from "@ionic/react";
import { useState } from "react";
import { LinkedinIcon } from "react-share";
import { logoFacebook, logoInstagram, logoLinkedin, logoTwitter } from "ionicons/icons";

const Footer = () => {
  const route = useLocation();

  const bgColorMap = {
    "/post/*": "#FD9390",
  };

  const bgColor = Object.keys(bgColorMap).find((key) =>
    new RegExp(key).test(route.pathname)
  )
    ? bgColorMap[
        Object.keys(bgColorMap).find((key) =>
          new RegExp(key).test(route.pathname)
        ) as keyof typeof bgColorMap
      ]
    : "#E55342";

  return (
    <>
      <div
        id="footer"
        className="flex flex-col items-center"
        style={{ background: bgColor }}
      >
        <IonAlert
          trigger="present-alert"
          header="CYCM Socials coming soon!"
          buttons={["OK"]}
        ></IonAlert>
        <div className="p-8 max-w-7xl md:flex md:p-12 md:w-[100%]">
          <div className="flex items-start justify-start md:w-[60%]">
            <img src="/cycm-logo-white.svg" alt="..." className="h-20 mt-2" />
            <h3 className="ml-4 text-xl font-bold text-white">
              CENTER FOR
              <br />
              YOUNG COLORFUL MINDS
            </h3>
          </div>
          <div className="md:ml-auto md:w-[25%]">
            <div className="flex flex-col md:flex-row gap-24">
              <div id="present-alert">
                <h5 className="text-xl font-bold font-sans items-start justify-items-start mb-2 text-white">
                  Follow us
                </h5>
                <div className="flex gap-3">
                  <a
                    className="flex font-medium items-center text-white hoverIcon"
                    href="https://www.facebook.com/"
                  >
                    <IonIcon icon={logoFacebook} size = "large"/>
                  </a>
                  <a
                    className="flex font-medium items-center text-white hoverIcon"
                    href="https://www.instagram.com/"
                  >
                    <IonIcon icon={logoInstagram} size = "large"/>
                  </a>
                  <a
                    className="flex font-medium items-center text-white hoverIcon"
                    href="https://www.twitter.com/"
                  >
                    <IonIcon icon={logoTwitter} size = "large"/>
                  </a>
                  <a
                  className="flex font-medium items-center text-white hoverIcon"
                  href="https://www.linkedin.com/"
                >
                  <IonIcon icon={logoLinkedin} size = "large"/>
                </a>
                </div>
              </div>
              <div className="mr-4">
                <h5 className="text-xl font-bold font-sans items-start justify-items-start mb-2 text-white">
                  Email
                </h5>
                <a
                  className="flex font-medium items-center text-white hoverLink"
                  href="mailto:contact@cycminds.org"
                >
                  contact@cycminds.org
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-white w-[90%] my-4" />
        <div className="flex flex-col mb-16 w-[90%] md:flex-row-reverse">
          {/* <div className="flex flex-col md:ml-auto md:flex-row">
          <a
            className="mb-5 hover:underline md:mx-5 md:mb-0 text-white"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="mb-5 hover:underline md:mx-5 md:mb-0 text-white"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="mb-5 hover:underline md:mx-5 md:mb-0 text-white"
            href="#"
          >
            Cookies Settings
          </a>
        </div> */}
          <h2 className="text-left text-white">© 2023 All rights reserved</h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
