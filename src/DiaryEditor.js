import {useRef,useState} from "react";
// state 기능을 사용한다.
// reference를 사용한다 (포커스 기능을 위해서)
const DiaryEditor = ({onCreate})=>{

    //레퍼런스 기능을 넣어준다.

    const authorInput = useRef();
    const contentInput = useRef();

    const[state,SetState] = useState({
        author : "",
        content : "",
        emotion:1,
    });

    const handleChangeState = (e) =>{
        SetState({
            ...state,
            [e.target.name] : e.target.value,
            //e.target.name : key 값, e.target.value : 안에 있는 값
            //...state는 원하는 값만 바꾸고 다른 값들은 그대로 두기 위해서 사용한다.
        });
    };

    const handleSubmit = (e) =>{
        console.log(state);
        if(state.author.length < 1){
            authorInput.current.focus(); //author과 연결되어있다.
            return;
        }

        if(state.content.length < 5){
            contentInput.current.focus(); //contentInput과 연결되어있다.
            return;
        }
        
        alert("저장성공");
        onCreate(state.author,state.content,state.emotion);
        SetState({
            author : "",
            content : "",
            emotion : 1,
        });

       
    }

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
           <input 
           ref = {authorInput} //authorinput이 접근 가능하게 해준다.
           name = "author"
           value = {state.author}
           onChange={handleChangeState} //값이 바뀌면 위에있는 handleChangeState를 사용한다.
           /> 
        </div>
        <div>
            <textarea
              ref = {contentInput} //contentInput이 접근 가능하게 해준다.
              name = "content"
              value = {state.content}
              onChange={handleChangeState}
            />
        </div>
        <div>
            <select name="emotion" 
            value = {state.emotion} 
            onChange={handleChangeState}>
                <option value = {1}> 1</option>
                <option value = {2}> 2</option>
                <option value = {3}> 3</option>
                <option value = {4}> 4</option>
                <option value = {5}> 5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>;
};

export default DiaryEditor;