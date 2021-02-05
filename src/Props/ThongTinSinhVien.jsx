import React, { Component } from "react";

export default class ThongTinSinhVien extends Component {
  

 render() {
  // let   {ten,tuoi,ma}=this.props.sinhVien;
  let     {sinhVien}=this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src="https://picsum.photos/100/180" alt="abc" />
        <div className="card-body">
          <h4 className="card-title">{sinhVien?.ten}</h4>
          <p className="card-text">{sinhVien?.tuoi}</p>
        </div>
      </div>
    );
  }
}
