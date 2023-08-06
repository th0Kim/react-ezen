import React from "react";
import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <ul>
        <li>
          {/* <Route path="/articles/:id" element={<Articles />} /> */}
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
      {/* Outlet은 <Route path=":id" element={<Article />} /> */}
      <Outlet />
    </>
  );
};

export default Articles;
