import React from "react";
import { connect } from "react-redux";
import { getPost, getUsers } from "../modules/sample";
import loading from "../modules/loading";
import Sample from "../components/Sample";

const { useEffect } = React;
// ../components/Sample UI 연결
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};
// ../modules/sample connect로 연결
export default connect(
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
