// 자식 컴포먼트 만들떄 무조건 시작 대문자로 안그럼 오류
function ChildComponent(props) {
   const {name, age} = props
   return (
      <div>
         <p>
            이름은 {name}이며 {age}
         </p>
      </div>
   )
}

export default ChildComponent;