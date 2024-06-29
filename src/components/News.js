// import React, { Component } from 'react'; // For Classes
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  
  // constructor(props) {   // *Class Based*
  //   super(props);
  //   // console.log("Hello I am a cunstructor from news component.");
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0,
  //   };
  // }
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  News.defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  const capitolizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchMoreData = async () => {
    // this.setState({
      //   page: this.state.page + 1,
      // });
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a0da9b5c0c1a4e3781806658bb430320&page=${page + 1}&pageSize=${props.pageSize}`;
      setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });
  };


  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a0da9b5c0c1a4e3781806658bb430320&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  };


  useEffect(() => {
    document.title = `${capitolizeFirstLetter(props.category)} - TrendzAlert`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  
  // const componentDidMount = async () => {
  //   this.updateNews();
  // };
  //   handlePrevClick = async () => {
  //     this.setState({page: this.state.page - 1});
  //     this.updateNews();
  //   };
  //   handleNextClick = async () => {
  //     this.setState({page: this.state.page + 1});
  //     this.updateNews();
  // };

  return (
    <div className="my-5">
      {/* {!this.state.loading && <h1 style={{ textAlign: "center"}} className="mb-3 head-font"> */}
        <h1 style={{ textAlign: "center", margin: "90px"}} className="mb-5 head-font">
          TrendzAlert - Top Headlines in {capitolizeFirstLetter(props.category)}:
        </h1>
      {/* {this.state.loading && <Spinner />} */}
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        // next={this.fetchMoreData}
        next={fetchMoreData}
        // hasMore={this.state.articles.length !== this.state.totalResults}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* {!this.state.loading && this.state.articles.map((element) => { */}
            {/* {this.state.articles.map((element) => { */}
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    imaze={
                      element.urlToImage ? element.urlToImage : "AltImage.png"
                    }
                    title={element.title ? element.title.slice(0, 70) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={
                      element.source.name.length > 20
                        ? element.source.name.slice(0, 20)
                        : element.source.name
                    }
                  />
                </div>
              );
            })}
            ;
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-around my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-page-prev "
            onClick={this.handlePrevClick}
          >
            &larr;
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)}
            type="button"
            className="btn btn-page-next "
            onClick={this.handleNextClick}
          >
            &rarr;
          </button>
        </div> */}
    </div>
  );
};

export default News;
