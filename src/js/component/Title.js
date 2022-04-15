import React from "react";
import propTypes from "prop-types";

export const Title=({text})=>{
    return <h1>{text}</h1>
}

Title.propTypes={
text: propTypes.string,
}