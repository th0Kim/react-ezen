import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:username" element={<Profile />} />
      {/* useParams이름으로 Profile.js에 파라미터로 사용 하겠다. */}
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
