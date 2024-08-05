/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './Heading.css';

function Heading(props) {
    if (props.level === 'h1') {
        return <h1 className="heading-h1">{props.text}</h1>
    } else if (props.level === 'h2') {
        return <h2 className="heading-h2">{props.text}</h2>
    } else if (props.level === 'h3') {
        return <h3 className="heading-h3">{props.text}</h3>
    }

}

export default Heading;