import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <>
      <ul>
        <li>
          {/* <Route path="/articles/:id" element={<Articles />} /> */}
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
      {/* Outlet은 <Route path=":id" element={<Article />} /> */}
      <Outlet />
    </>
  );
};

export default Articles;
