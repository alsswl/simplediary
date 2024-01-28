
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
  const [data, setData] = useState([]); //data state를 만든다.

  const dataId = useRef(0);

  const onCreate = (author,content,emotion) =>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,
    }; //데이터 추가하는 부분
    dataId.current += 1;
    setData([newItem,...data]);//최근 것이 먼저 오도록 하기 위해 ...data보다 앞에 쓴다.

  };//state에 데이터를 계속 추가해나간다.

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    //target 빼고 출력하기 위해서
    setData(newDiaryList); //이걸 다시 데이터에 넣는다.
  };
  
  const onEdit = (targetId,newContent) =>{
    setData(
      data.map((it) => it.id === targetId ? {...it, content : newContent} : it)
    );
  }; //데이터를 수정하는 함수이다. map함수를 사용하고 it의 아이디가 받은 아이디와 비슷하다면 나머지는 다 원래대로 하고, 
  //content만 newContent로 바꾼다.

  return (
    <div className="App">
      <DiaryEditor onCreate = {onCreate}/>
      <DiaryList  onEdit = {onEdit} diaryList = {data} onRemove = {onRemove}/> 
    </div>
  );// diarylist는 일기 리스트. data를 전달한다.
}

export default App;
