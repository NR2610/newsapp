import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(props) {
    super();
    console.log("ii anish");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=1&pageSize=19";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalarticles: parsedData.totalResults });
  }

  onleftclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=${this.state.page -
      1}&pageSize=19`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    });
  };

  onrightclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 19)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=${this.state
        .page + 1}&pageSize=19`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      });
    }
  };

  render(props) {
    return (
      <div className="container">
        <h1 className="center">News Monkey</h1>
        <div className="row">
          {this.state.articles.map(elements => {
            //   console.log(elements);
            return (
              <div className="col-md-4 my-4 ">
                <NewsItem
                  key={elements.url}
                  title={elements.title ? elements.title.slice(0, 45) : " "}
                  description={elements.description ? elements.title.slice(0, 81) : " "}
                  imageUrl={elements.urlToImage}
                  newsUrl={elements.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.onleftclick}>
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= 2}
            rel="noreferrer"
            type="button"
            className="btn btn-dark"
            onClick={this.onrightclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
