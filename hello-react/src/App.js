import './App.css';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,//기본 단위는 px
    // key : value,
  }
  return <div style={style}>{name}</div>;
}

export default App;