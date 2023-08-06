import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header
        style={{ backgroundColor: "cornflowerblue", padding: 16, fontSize: 24 }}
      >
        header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
