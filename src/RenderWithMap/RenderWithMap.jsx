import React, { Component } from "react";

export default class RenderWithMap extends Component {
  mangSinhVien = [
    { ma: 1, ten: "quan" },
    { ma: 3, ten: "nha" },
    { ma: 2, ten: "bvbv" },
  ];
  renderSinhVien = () => {
    const arrJSX = this.mangSinhVien.map((sinhVien, index) => {
      return <li key={index}>{sinhVien.ten}</li>;
    });
    return arrJSX;
  };
  render() {
    return (
      <div className="container">
        <ul>{this.renderSinhVien()}</ul>
        <table className="table">
          <thead>
            <tr>
              <th>Ma Sinh Vien</th>
              <th>Ten SInh Vien</th>
            </tr>
          </thead>
          <tbody>
            {this.mangSinhVien.map((sinhvien, index) => {
              return (
                <tr key={index}>
                  <td>{sinhvien.ma}</td>
                  <td>{sinhvien.ten}</td>
                  <td>
                    <button class="btn btn-danger ">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
