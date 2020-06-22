import React from "react";
import "./Wrapper.css";

const styles  = {
    background: {
        background: "url('./images/avatar.jpg')",
        backgroundSize: "100% auto"
    },
};
const Wrapper = (props) => <div className="wrapper" style={styles.background}>{props.children}</div>;



export default Wrapper;
