import React, { Component } from "react";

export default class DemoState extends Component {
  userName = " Quan";
  state = {
    //   this.state la 1 thuoc tinh dac biet cua react class component,
    // chua cac gia tri thay doi tren giao dien khi nguoi dung thao tac
    isLogin: false,
  };
  renderLoginnTemplate = () => {
    if (this.state.isLogin) {
      return <a className="nav-link">Hello{this.userName}</a>;
    }
    return (
      <button
        onClick={(e) => {
          //   khi click vao nut dang nhap => goi ham handle login
          this.handleLogin();
        }}
        className="btn btn-primary btn-sm mt-1"
      >
        LOGIN
      </button>
    );
  };
  handleLogin = () => {
    this.state.isLogin = true;
    // this.setState(this.state.isLogin);
    // console.log(this.state.isLogin);
    let newState = {
      isLogin: true,
    };
    // this.setState la phuong thuc bat dong bo chua 2 tham so la 
    // state moi va callBack

    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state);
      }
    );
    // this.setSate la phuong thuc co san cua react class component dung de set lai gia tri cua bien state va lam render lai giao dien
    this.render();
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              CyberSoft
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#myMenu"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="myMenu">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    News
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown">
                    Products
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Smarphone
                    </a>
                    <a href="#" className="dropdown-item">
                      Laptop
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Forum
                  </a>
                </li>
                <li className="nav-item">
                  {/* {this.isLogin ? (
                    <a className="nav-link">Hello{this.userName}</a>
                  ) : (
                    <button className="btn btn-primary">LOGIN</button>
                  )} */}
                  {this.renderLoginnTemplate()}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
