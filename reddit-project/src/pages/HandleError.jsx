import React from "react";
import { Link, useRouteError } from "react-router-dom";

function HandleError() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1vh",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "60vw" }}
          src="https://static.vecteezy.com/system/resources/thumbnails/008/568/882/small/website-page-not-found-error-404-robot-character-broken-chatbot-mascot-disabled-site-on-technical-work-web-design-template-cartoon-online-bot-crash-accident-robotic-assistance-failure-eps-vector.jpg"
        />
        <p>!ohh</p>
        <p>We cant't find the page your looking for</p>
        <Link to="/">
          <button
            style={{
              marginTop: "10px",
              padding: "10px",
              color: "red",
              borderRadius: "10px",
            }}
          >
            Go to home Page
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <p>something went wrong</p>
    </div>
  );
}

export default HandleError;
