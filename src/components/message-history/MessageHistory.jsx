import React from "react";
import "./MessageHistory.css";

export default function MessageHistory({ msg }) {
  if (!msg) return null;
  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div
        className="send font-weight-bold text-secondary"
        style={{ fontWeight: "bolder" }}
      >
        <div className="sender">{row.messageby}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
}
