import React from "react";
import TopNav from "./components/common/topnav";
import SideNav from "./components/common/sidenav";
import Modal from "./components/common/modal";
import GetStarted from "./components/getstarted";
import Myprofile from "./components/myprofile";

const DashboardLayout = ({ children }) => {
  const Getstart = <GetStarted />;
  const GetMyprofil = <Myprofile />;

  return (
    <>
      <React.Fragment>
        <TopNav />
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            {children}
            <Modal
              modalid="Getstart"
              title="Get Started"
              content={Getstart}
              maxwidget="80%"
            />
            <Modal
              modalid="Myprofile"
              title="My Profile"
              content={GetMyprofil}
              maxwidget="60%"
            />
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default DashboardLayout;
