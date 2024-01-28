import DiaryItem from './DiaryItem'

const DiaryList = ({onRemove,diaryList}) =>{
    
    return (<div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it) => (
               <DiaryItem key = {it.id} {...it} onRemove = {onRemove}/>
            ))} 
        </div>
    </div>
    );
}; //다이어리아이템 컴포넌트로 위 내용을 사용한다.

DiaryList.defaultProps = {
    diaryList : [],
};

export default DiaryList;