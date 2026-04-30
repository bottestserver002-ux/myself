import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div style={{ position: "relative" }}>
      
      {/* LOGO */}
      <img
        src={logo}
        alt="logo"
        style={{
          width: 150,
          position: "absolute",
          left: 490,   // 👈 đẩy ra ngoài
          top: -45,
        }}
      />

      {/* NAV */}
      <nav style={{ alignItems: "center", paddingLeft: 10 }}>
        <Link to="/">Trang chủ</Link>
        <Link to="/collection">Sưu tập</Link>
        <Link to="/useful">Bổ ích</Link>
        <Link to="/contact">Liên hệ</Link>
      </nav>

    </div>
  );
}