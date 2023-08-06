import React from "react";
import { useParams } from "react-router-dom";

const data = {
  juho: { name: "주호", description: "프론트엔드" },
  miju: { name: "미주", description: "백엔드" },
};

const Profile = () => {
  const params = useParams(); //주소를 파라미터로 사용하는 hook이 들어 있음
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {/* 삼항연산자 */}
      {profile ? (
        // true 조건
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        // false 조건
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
