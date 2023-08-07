// import Macaron from "./Macaron";
// import cakes from "./cakes.json";

// function App() {
//   return (
//     <>
//       <div className="App">"안녕하세요"</div>
//       {cakes.map(cake => (
//         <Macaron
//           propsid={cake.id}
//           propsname={cake.name}
//           propsimage={cake.images}
//         />
//       ))}
//     </>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Food from './Food';

class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨');
  }

  componentDidMount(){
    console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수');
    //영화api 불러오기
  }

  componentDidUpdate(){
    console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수');    
  }

  componentWillUnmount(){
    console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수');    
  }

  state = { //객체형태
    count:0,
    sum:0,
    avg:0,
  }

  add = () => {
    console.log('더하기');
    // this.state.count = 1 ;
    // this.setState({count:1});
    this.setState({count:this.state.count + 1});
  }
  minus = () => {
    console.log('빼기');
    // this.state.count = -1 ;
    // this.setState({count:-1});
    // this.setState({count:this.state.count - 1});
    this.setState(current => (
      {
        count:current.count-1,
        sum:current.count-2,
        avg:current.count-3,
      }
      ));
  }

  render() {
    const{count,sum,avg}=this.state;//구조분해할당 this.state는 앱컴포넌트 말하는 것.바깥에 있는 state사용하기 위해서. 안쓰면 this.state.count이런식으로 써야함.
    return (
      <>
        <div>App</div>
        <div>
          <h1>현재 숫자는 {count}입니다</h1>
          <button onClick={this.add}>더하기</button>
          <button onClick={this.minus}>빼기</button>
        </div>
        <Food />
      </>
    )
  }
}

export default App