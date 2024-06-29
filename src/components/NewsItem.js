// import React, { Component } from 'react'; // For Classes
import React from "react";

const NewsItem = (props) => {
  let { imaze, title, description, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card shadow bg-purple-opac-10" style={{ margin: "1rem" }}>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{
            fontFamily: "'Chakra Petch', sans-serif",
            left: "87%",
            zIndex: "1",
          }}
        >
          {source}
        </span>
        <img src={imaze} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-danger btn-font"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
