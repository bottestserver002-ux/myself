import React from "react";
import Navbar from "../components/Navbar";
import avatar from "../assets/s.png";
import avatar1 from "../assets/gg.png";
import avatar2 from "../assets/fb.png";
import avatar3 from "../assets/zalo.png";
import avatar4 from "../assets/tt.png";
import avatar5 from "../assets/gh.png";


export default function Home() {
  return (
    <div className="container">
      <Navbar />

      <div className="flex">
        <div className="card" style={{ flex: 2 }}>
          <h1>Lời giới thiệu</h1>
          <p>
Xin chào! Đây là website cá nhân của tôi, nơi tôi chia sẻ những vần thơ, góc nhìn cuộc sống và các nội dung hữu ích mà tôi tâm huyết xây dựng.          </p>
          <p>Hiện tôi đang là nhân viên tư vấn website tại công ty Nasani, vì vậy tôi luôn mong muốn mang đến những giá trị thiết thực và trải nghiệm tốt nhất cho người đọc.          </p>
<p>
  Dù website còn đơn giản và chưa có điều kiện đầu tư tên miền riêng, nhưng mọi nội dung đều được chăm chút với sự chân thành. Nếu bạn thấy thú vị, hãy thường xuyên ghé thăm và để lại dấu ấn của bạn nhé!
</p>
        </div>

        <div className="card" style={{ flex: 1 }}>
  <img
    src={avatar}
    alt="avatar"
    style={{
       width: "100%",
    maxHeight: "300px",
    objectFit: "contain",
    borderRadius: "1px",

    border: "2px solid gold",
    boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)",


    }}
  />
     <h3 style={{ textAlign: "center", marginTop: 10 }}>Nguyễn Văn Mạnh Trường
     </h3>
     <h3 style={{ textAlign: "center", marginTop: -20 }}>Leader
     </h3>
</div>
      </div>

      
        <img
    src={avatar1}
    alt="avatar1"
    style={{
       width: "100%",
    maxHeight: "200px",
    objectFit: "contain",
    borderRadius: "1px",
    }}
  />
  
 
    </div>
  );
}