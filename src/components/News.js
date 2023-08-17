import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    name: "stranger",
    pageSize: 6,
    category: "general"
  };

  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };

  constructor() {
    super();
    // console.log("ii anish");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }
  async updatepage() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
      this.props.category
    }&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=${this.state.page}&&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalarticles: parsedData.totalResults });
  }

  async componentDidMount() {
    this.updatepage();
  }

  onleftclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
    //   this.props.category
    // }&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({ loading: false });
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles
    // });
    this.setState({ page: this.state.page - 1 });
    this.updatepage();
  };

  onrightclick = async () => {
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
    //     this.props.category
    //   }&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   // console.log(parsedData);
    //   this.setState({ loading: false });
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updatepage();
  };

  render(props) {
    return (
      <div className="container">
        <h1 className="text-center">News Monkey</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map(elements => {
              //   console.log(elements);
              return (
                <div className="col-md-4 my-4 ">
                  <NewsItem
                    key={elements.url}
                    title={elements.title ? elements.title.slice(0, 45) : " "}
                    description={elements.description ? elements.title.slice(0, 81) : " "}
                    imageUrl={elements.urlToImage}
                    newsUrl={elements.url}
                    auther={elements.author}
                    date={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-4" onClick={this.onleftclick}>
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            rel="noreferrer"
            type="button"
            className="btn btn-dark my-4"
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
