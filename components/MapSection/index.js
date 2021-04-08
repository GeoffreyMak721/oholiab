import React from "react";

export default function MapSection() {
  return (
    <section id="google-map-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 padding-0">
            <object
              style={{ border: 0, height: 450, width: "100%" }}
              data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5764029412453!2d15.314497114187597!3d-4.3021276475619645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a340b2e7b885b%3A0xa7f6dcc50a71fe40!2sCongo%20Trading%20Center!5e0!3m2!1sfr!2sde!4v1617894679480!5m2!1sfr!2sde"
            ></object>
          </div>
        </div>
      </div>
    </section>
  );
}
