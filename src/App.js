
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id : 1,
    author : "잔디",
    content : "안녕",
    emotion : 5,
    created_date : new Date().getTime(),
  },
  {
    id : 2,
    author : "풀",
    content : "안녕하이",
    emotion : 2,
    created_date : new Date().getTime(),
  },
  {
    id : 3,
    author : "리액트",
    content : "안녕안녕",
    emotion : 1,
    created_date : new Date().getTime(),
  },
]


const App = () =>{
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList = {dummyList}/>
    </div>
  );
}

export default App;
