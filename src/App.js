
import { useRef,useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id : 1,
//     author : "잔디",
//     content : "안녕",
//     emotion : 5,
//     created_date : new Date().getTime(),
//   },
//   {
//     id : 2,
//     author : "풀",
//     content : "안녕하이",
//     emotion : 2,
//     created_date : new Date().getTime(),
//   },
//   {
//     id : 3,
//     author : "리액트",
//     content : "안녕안녕",
//     emotion : 1,
//     created_date : new Date().getTime(),
//   },
// ]


const App = () =>{
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author,content,emotion) =>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem,...data]);//최근 것이 먼저 오도록 하기 위해 ...data보다 앞에 쓴다.

  };

  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
  

  return (
    <div className="App">
      <DiaryEditor onCreate = {onCreate}/>
      <DiaryList  diaryList = {data} onDelete = {onDelete}/>
    </div>
  );
}

export default App;
