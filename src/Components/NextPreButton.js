// import React, { Component } from 'react';

// export default class NextPreButton extends Component {

//     constructor(){
//         super();
//         console.log("I am Akshay Jain");
//         this.state={
//           page:1
//         }
//       }

//     handlePrevClick = async() => {
//         console.log("pre");
//         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page-1}&pageSize=9`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);
//         this.setState(()=> ({
//             page: this.state.page-1,
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults
//           }));
//     }
        
//     handleNextClick = async () => {
//       console.log("next");
//       if(this.state.page+1 > Math.ceil(this.state.totalResults/9)){

//       }else{
//         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page + 1}&pageSize=9`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);
//         this.setState(() => ({
//           page: this.state.page + 1,
//           articles: parsedData.articles
//         }));
//       }
//     }
  

//   render() {
//     return (
//       <div>
//         <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
//           <button type="button" className="btn disabled btn-outline-primary">Page {this.state.page}</button>
//           <button type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
//         </div>
//       </div>
//     )
//   }
// }



// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'


// export class News extends Component {

//   static defaultProps = {
//     country:'in',
//     pageSize:8,
//     category:'general'
//   }
//   static propTypes = {
//     country:PropTypes.string,
//     pageSize:PropTypes.number,
//     category:PropTypes.string
//   }

//   constructor(props){
//     super(props);
//     console.log("I am Akshay Jain");
//     this.state={
//       articles: [],
//       loading: false,
//       page:1
//     }
//     document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
//   } 
  
//   capitalize = (string) =>{
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   async componentDidMount() {
//     try {
//       console.log("cdm");
//       // let url = `https://newsapi.org/v2/everything?q=${this.props.urlPart}&apiKey=0575a11efd8b4197bb308b6b28458716&page=1&pageSize=${this.props.pageSize}`;
//       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0575a11efd8b4197bb308b6b28458716&page=1&pageSize=${this.props.pageSize}`;
//       // let url = "https://newsapi.org/v2/everything?q=random&apiKey=0575a11efd8b4197bb308b6b28458716&page=1&pageSize=9";
//       this.setState({loading:true});
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       console.log(parsedData);
//       this.setState({ articles: parsedData.articles,
//                        loading: false, 
//                        totalResults: parsedData.totalResults });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   handlePrevClick = async() => {
//     try {
//       console.log("pre");
//       // let url = `https://newsapi.org/v2/everything?q=${this.props.urlPart}&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//       // let url = `https://newsapi.org/v2/everything?q=random&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page-1}&pageSize=9`;
//       this.setState({loading:true});
//       let data = await fetch(url);
//       let parsedData = await data.json()
//       console.log(parsedData);
//       this.setState(()=> ({
//           page: this.state.page-1,
//           articles: parsedData.articles,
//           totalResults: parsedData.totalResults,
//           loading:false
//         }));
//       } catch (error) {
//         console.error('Error fetching previous data:', error);
//       }
//     }
//       handleNextClick = async () => {
//         try {
//           console.log("next");
//           // if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
//             if(this.state.page+1 > Math.ceil(this.state.totalResults/9)){
              
//             }else{
//               // let url = `https://newsapi.org/v2/everything?q=${this.props.urlPart}&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//               let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//               // let url = `https://newsapi.org/v2/everything?q=random&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page + 1}&pageSize=9`;
//               this.setState({loading:true});
//               let data = await fetch(url);
//               let parsedData = await data.json()
//               console.log(parsedData);
//               this.setState(() => ({
//                 page: this.state.page + 1,
//                 articles: parsedData.articles,
//                 loading:false
//               }));
//           }
//         } catch (error) {
//           console.error('Error fetching next data:', error);
//         }
//       }
  
//   render(){
//     // const { urlPart } = this.props;
//     return (
//       <div className="container my-3">
//         <h1 className="text-center">NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h1>
//         {this.state.loading && <Spinner/>}
//         <div className="row">
//           {!this.state.loading && this.state.articles.map((element)=>{
//             return <div className="col-md-4" key={element.url}>
//                       <NewsItem title = {element.title?element.title.slice(0,50):""} description = {element.description?element.description.slice(0,80):""} imageUrl = {element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                       {/* <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url}/> */}
//                     </div>
//           })}
//         </div>

//         <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
//           <button type="button" className="btn disabled btn-outline-primary">Page {this.state.page}</button>
//           <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
//         </div>
//       </div>
//     )
//   }
// }
// export default News