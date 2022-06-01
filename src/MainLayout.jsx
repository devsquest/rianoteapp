import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <main className="container">{children}</main>
    </>
  );
};

export default MainLayout;
