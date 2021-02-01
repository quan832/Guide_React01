// import React from "react";
// import "../";

import React, { Component } from "react";
import style from "./DataBinding.module.css";
export default class DataBinding extends Component {
  renderSinhVien = () => {
    //   Blinding phuong thuc thi phuong thuc do phai tra ve noi dung la 1 so hoac chuoi
    // hoac 1 the? component bao phu
    return (
      <div>
        id:{this.sinhVien.id} - ten:{this.sinhVien.ten}
      </div>
    );
  };
  render() {
    let title = "Hello CyberSOft";
    let sanPham = {
      ten: "iphone",
      gia: 1000,
      hinhanh:
        "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg",
    };
    let sinhVien = {
      id: 1,
      ten: "Nguyen Van A",
    };

    return (
      <div>
        <p className={`${style.textGreen} ${style["text-light"]}`}>abc</p>
        <p style={{backgroundColor:'red',color:'white'}}>abcdefgh</p>
        <h1>{title}</h1>
        <div className="card text-white bg-primary w-25">
          <img className="card-img-top" src={sanPham.hinhanh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPham.ten}</h4>
            <p className="card-text">{sanPham.gia}</p>
          </div>
        </div>
        <div>
          {this.renderSinhVien}
          <h1>Ho Ten : {sinhVien.ten}</h1>
          <p>{title}</p>
        </div>
      </div>
    );
  }
}
