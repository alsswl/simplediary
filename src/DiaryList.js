import DiaryItem from './DiaryItem'

const DiaryList = ({onEdit, onRemove,diaryList}) =>{
    
    return (<div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it) => (
               <DiaryItem key = {it.id} {...it} onEdit = {onEdit} onRemove = {onRemove}/>
            ))} 
        </div>
    </div>
    ); //key는 그냥 써야 하는 거다. DiaryList에서 따로 받을 변수를 지정해두지 않아도 괜찮다.
}; //다이어리아이템 컴포넌트로 위 내용을 사용한다.

DiaryList.defaultProps = {
    diaryList : [],
};

export default DiaryList;