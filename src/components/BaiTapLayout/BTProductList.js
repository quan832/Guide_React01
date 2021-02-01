import React, { Component } from 'react'
import BTProduct from "./BTProduct";
export default class BTProductList extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
      {/* BEGIN SMARTPHONE */}
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
            <BTProduct/>
            <BTProduct/>
            <BTProduct/>
            <BTProduct/>
        </div>
      </section>
      {/* END SMARTPHONE */}
    </div>
    )
  }
}
