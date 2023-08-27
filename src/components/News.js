import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import userEvent from "@testing-library/user-event";

const News = props => {
  const fLCapital = s => (s = s.charAt(0).toUpperCase() + s.slice(1));

  const [articles, setArticals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  // constructor(props) {
  //   super(props);
  //   // console.log("ii anish");
  //   // this.state = {
  //   //   articles: [],
  //   //   loading: true,
  //   //   page: 1,
  //   //   totalResults: 0
  //   // };

  //   // document.title = `${this.fLCapital(props.category)} - NewsMonkey`;
  // }
  const updatepage = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
      props.category
    }&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=${page}&&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticals(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({ articles: parsedData.articles, totalarticles: parsedData.totalResults, loading: false });

    props.setProgress(100);
  };

  useEffect(() => {
    updatepage();
  }, []);
  // async componentDidMount() {
  //   this.updatepage();
  // }

  //   onleftclick = async () => {
  //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
  //     //   props.category
  //     // }&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //     // this.setState({ loading: true });
  //     // let data = await fetch(url);
  //     // let parsedData = await data.json();
  //     // // console.log(parsedData);
  //     // this.setState({ loading: false });
  //     // this.setState({
  //     //   page: this.state.page - 1,
  //     //   articles: parsedData.articles
  //     // });
  //     this.setState({ page: this.state.page - 1 });
  //     this.updatepage();
  //   };

  //   onrightclick = async () => {
  //     // if (this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {
  //     // } else {
  //     //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
  //     //     props.category
  //     //   }&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //     //   this.setState({ loading: true });
  //     //   let data = await fetch(url);
  //     //   let parsedData = await data.json();
  //     //   // console.log(parsedData);
  //     //   this.setState({ loading: false });
  //     //   this.setState({
  //     //     page: this.state.page + 1,
  //     //     articles: parsedData.articles
  //     //   });
  //     // }
  //     this.setState({ page: this.state.page + 1 });
  //     this.updatepage();
  //   };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
      props.category
    }&apiKey=68b84f0d11d946c6bfe4a61ad72745f5&page=${page + 1}&&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticals(articles.concat(parsedData.articles));
    setLoading(parsedData.totalResults);
    // this.setState({ articles: this.state.articles.concat(parsedData.articles), totalarticles: parsedData.totalResults });
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ marginTop: "85px" }}>
        {" "}
        Top HeadLines from - {fLCapital(props.category)}{" "}
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        //   style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
        //   inverse={true} //
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        //   scrollableTarget="scrollableDiv"
      >
        <div className="container">
          <div className="row">
            {articles.map(elements => {
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
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-4" onClick={this.onleftclick}>
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)}
            rel="noreferrer"
            type="button"
            className="btn btn-dark my-4"
            onClick={this.onrightclick}
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  );
};

News.defaultProps = {
  name: "stranger",
  pageSize: 6,
  category: "general"
};

News.propTypes = {
  name: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

export default News;
