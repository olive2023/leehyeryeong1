//Macaron.js

//클래스형 컴포넌트 rce
// import React, { Component } from 'react'

// class Macaron extends Component {
//   render() {
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron

//함수형 컴포넌트(더 많이 씀) rfce

import React from 'react'

// function Macaron(props){
//   console.log(props);
//   const{propsid,propsname,propsimage}=props; //구조분해할당(속성들을 분해할 수 있다. 그래서 디브 안에 props.propsid 대신에 propsid만 써도 됨. 속성만 지정하면 해당하는 지정값만 쓰면 됨. 구조를 분해해서 각각 속성별로 할당해주는 것.)
//   return (
//     <div>
//       <h1>No. {propsid}</h1>
//       <h2>Name: {propsname}</h2>
//       <img src={propsimage} alt={propsname} width={200} height={200} />
//     </div>
//   )
// }

function Macaron({propsid,propsname,propsimage}){ //이 형태를 가장 많이 씀. 아예 첨부터 부모 컴포넌트에 구조분해한 형태로 받으면 구조분해한 속성들만 지정하면 됨.
  return (
    <div>
      <h1>No. {propsid}</h1>
      <h2>Name: {propsname}</h2>
      <img src={propsimage} alt={propsname} width={200} height={200} />
    </div>
  )
}


export default Macaron