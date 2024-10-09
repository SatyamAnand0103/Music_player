import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);
    // ---------------------------
    setTimeout(() => {
      navigate("/musicPlayer");
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <img
          src={require("./images/loading.gif")}
          style={{
            border: "2px solid white",
            margin: "auto",
            height: "36",
            width: "14em",
            position: "absolute",
            top: "30%",
            left: "42%",
          }}
        />
      )}
      {show && (
        <p
          style={{
            fontSize: "30px",
            color: "white",
            position: "absolute",
            top: "34%",
            left: "46%",
          }}
        >
          Loading
        </p>
      )}
    </>
  );
};
export default Loading;
