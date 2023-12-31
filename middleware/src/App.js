import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import SampleContainer from "./containers/SampleContainer";

function App() {
  return (
    <div>
      {/* 리덕스에서는 containers 컴포넌트가 중심임 app에 직접 연결하는 파일 */}
      <CounterContainer />
      <SampleContainer />
    </div>
  );
}

export default App;
