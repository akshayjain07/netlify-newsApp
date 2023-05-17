import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("I am Akshay Jain");
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  } 

  async componentDidMount() {
    console.log("cdm");
    // let url = `https://newsapi.org/v2/everything?q=${this.props.urlPart}&apiKey=0575a11efd8b4197bb308b6b28458716&page=1&pageSize=9`;
    let url = "https://newsapi.org/v2/everything?q=random&apiKey=0575a11efd8b4197bb308b6b28458716&page=1&pageSize=9";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async() => {
    console.log("pre");
    // let url = `https://newsapi.org/v2/everything?q=${this.props.urlPart}&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page-1}&pageSize=9`;
    let url = `https://newsapi.org/v2/everything?q=random&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page-1}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState(()=> ({
        page: this.state.page-1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults
      }));
    }
        
    handleNextClick = async () => {
      console.log("next");
      if(this.state.page+1 > Math.ceil(this.state.totalResults/9)){

      }else{
        // let url = `https://newsapi.org/v2/everything?q=${this.props.urlPart}&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page + 1}&pageSize=9`;
        let url = `https://newsapi.org/v2/everything?q=random&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page + 1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState(() => ({
          page: this.state.page + 1,
          articles: parsedData.articles
        }));
      }
    }
  
  render(){
    // const { urlPart } = this.props;
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title = {element.title?element.title.slice(0,50):""} description = {element.description?element.description.slice(0,80):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                      {/* <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url}/> */}
                    </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn disabled btn-outline-primary">Page {this.state.page}</button>
          <button type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News