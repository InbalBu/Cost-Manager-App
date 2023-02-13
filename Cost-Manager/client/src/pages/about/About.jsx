// Omer Boucris, 314969817
// Bar Bikovsky, 315941633

import React from "react";
import "./sidebar.css";

export default function About() {
  return (
    <div className="sidebar">
      <img
        className="aboutusImg"
        src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
        alt=""
      />
      <p className="sidebarTitle">Omer Boucris 314969817</p>
      <p className="sidebarTitle">Bar Bikovsky 315941633</p>
    </div>
  );
}
