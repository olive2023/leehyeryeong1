import React, { Component } from 'react'

class Food extends Component {

  state = { 
    price:10000,
    discountPrice:0
  }

  discount = () => {
    // this.setState({discountPrice:this.state.price*0.7});이것도틀린건 아님
    this.setState(current => (
      {discountPrice : current.price*0.7}
    ));
  }

  render() {
    const{price,discountPrice}=this.state;
    return (
      <>
        <div>Food</div>
        <h1>Food 가격 : {price}원</h1>
        <h2>할인 가격 : {discountPrice}원</h2>
        <button onClick={this.discount}>30% 할인</button>
      </>
    )
  }
}

export default Food