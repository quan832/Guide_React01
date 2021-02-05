import React, { Component } from "react";
import ThongTinSinhVien from "./ThongTinSinhVien";

export default class DemoProps extends Component {
  mangSinhVien = [
    { maSV: "sv01", ten: "khai", tuoi: "18" },
    { maSV: "sv02", ten: "quan", tuoi: "11" },
    { maSV: "sv03", ten: "duy", tuoi: "12" },
  ];
  renderSinhVien = () => {
    const result = this.mangSinhVien.map((sinhvien, index) => {
      return (
        <div className="col-4" key={index}>
          <ThongTinSinhVien sinhVien={sinhvien}/>
        </div>
      );

     
    });
    return result;
  };
  render() {
    return (
      <div className="container">
        <h3>THong Tin SInh VIen</h3>
        <div className="row">
          <div className="col-4">
            <ThongTinSinhVien sinhVien={this.mangSinhVien[0]} />
          </div>
          <div className="col-4">
            <ThongTinSinhVien sinhVien={this.mangSinhVien[1]} />
          </div>
          <div className="col-4">
            <ThongTinSinhVien bgColor="red" />
          </div>
        </div>
      </div>
    );
  }
}
