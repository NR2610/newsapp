import React from "react";

const newsitem = props => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <span className="badge rounded-pill text-bg-light">{source}</span>
        <img src={imageUrl ? imageUrl : "https://cdn.ndtv.com/common/images/ogndtv.png"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "unkown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>

          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default newsitem;
