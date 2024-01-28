
import {useState} from "react";
import { useRef } from "react";

const DiaryItem = ({
    onEdit,
    onRemove,
    id,
    author,
    content,
    emotion,
    created_date
}) =>{

    const [isEdit,setIsEdit] = useState(false); 
    //수정중인지를 확인하기 위해서 state를 만든다. 기본값 false
    const toggleIsEdit = () => setIsEdit(!isEdit);
     //toggleIsEdit를 호출하면 isEdit를 반대인 상태로 바꾼다.

    const[localContent, setLocalContent] = useState(content);
     //수정하는 화면을 위한 state, 기본값을 content로 함으로써 수정할 때 원래 값이 화면에 뜨도록 한다.

     const localContentInput = useRef();
     //5자를 넘기지 못했을 때 focus를 하기 위한 레퍼런스이다.


    const handleRemove = () =>{
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id);
        }
    };

    const handleQuitEdit = () =>{
        setIsEdit(false);
        setLocalContent(content);
        //이 함수는 수정 취소를 눌렀다가 다시 수정버튼을 눌렀을 때, 
        //과거 수정 중이던 내용이 뜨는 것이 아니라, 원래 값이 뜨도록 하는 함수이다.
    }

    const handleEdit = () =>{
        if(localContent.length<5){
            localContentInput.current.focus(); //레퍼런스 통해서 포커스해준다.
            return;
        }

        if(window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)){
            onEdit(id, localContent);//실제 수정과정
            toggleIsEdit(); //원래 화면으로 되돌린다.

        } 
    };

    return <div className="DiaryItem">
        <div className="info">
            <span> 작성자 : {author} | 감정점수 : {emotion}</span>
            <br></br>
            <span className="date">{new Date(created_date).toLocaleDateString()}</span>
        </div>
        <div className="content">
            {isEdit ? (<>
            <textarea
              ref = {localContentInput}
              value = {localContent}
              onChange = {(e) => setLocalContent(e.target.value)}/>{/*state를 사용하여 수정한다*/}
            </>) : (
            <>{content}</>
            )}</div> {/*삼항연산자로, isEdit의 상태에 따라 content를 띄울지 수정화면을 띄울지 결정한다.*/}

            {isEdit ? (
                <>
                <button onClick = {handleQuitEdit}>수정취소</button>
                <button onClick = {handleEdit}> 수정완료 </button>
                </>
            ) :
            (
                <>
                 <button onClick = {handleRemove}> 삭제하기 </button>
                <button onClick = {toggleIsEdit}>수정하기</button>
                </>
            )}{/*수정을 하는 도중에는 밑 부분에 있는 버튼이 바뀐다.*/}
       
    </div>
}

export default DiaryItem;