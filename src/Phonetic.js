import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>

        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
