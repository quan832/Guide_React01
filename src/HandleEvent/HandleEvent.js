import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello !");
  };
  showMesseage = (name) => {
    alert("Helo !!!" + name);
  };
  render() {
    return (
      <div>
        {/* cach 1 : turyen callBack truc tiep */}
        <button
          onClick={this.handleClick}
          id="btnClickMe"
          className="btn btn-primary m-5"
        >
          #set CLick
        </button>
        <button
          onClick={this.showMesseage.bind(this, "Quan")}
          id="btnClickMe"
          className="btn btn-primary m-5"
        >
          #1 bind function
        </button>
        {/* cach 2: truyen ham anomymous */}
        <button onClick={(event) => {this.showMesseage('anonymous')}} className="btn btn-warning m-5">
          #2 anonymous 
        </button>
      </div>
    );
  }
}
