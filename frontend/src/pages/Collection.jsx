import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Collection() {
  const samplePoem = `Duyên trời sắp đặt, ta phải định
Dạ hữu minh châu, bủa tay tiền
Coi chừng rắc kịch, ta hối tiếc
Cao vọng cao xa chẳng được gì.`;

  const [poems] = useState([
    { id: 1, content: samplePoem },
    { id: 2, content: samplePoem },
    { id: 3, content: samplePoem },
    { id: 4, content: samplePoem },
  ]);

  return (
    <div className="container">
      <Navbar />
      <h1>Sưu tập thơ</h1>

      {poems.map((p) => (
        <div key={p.id} className="card" style={{ marginTop: 20 }}>
          <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
            {p.content}
          </p>
        </div>
      ))}
    </div>
  );
}