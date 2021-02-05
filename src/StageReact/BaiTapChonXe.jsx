import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imgSrc: "./img/car/products/black-car.jpg",
  };
  changeCOlor = (color) => {
// thay doi gia tri hinh dua vao bien mau
this.setState({
    imgSrc:`./img/car/products/${color}-car.jpg`
})
  };
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <img src={this.state.imgSrc} className="w-100" alt="" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger  m-5"
              onClick={(event) => {
                this.changeCOlor("red");
              }}
            >
              #1
            </button>
            <button
              onClick={(event) => {
                this.changeCOlor("silver");
              }}
              className="btn btn-primary m-5"
            >
              #2
            </button>
            <button
              onClick={(event) => {
                this.changeCOlor("steel");
              }}
              className="btn btn-warning m-5"
            >
              #3
            </button>
          </div>
        </div>
      </div>
    );
  }
}
