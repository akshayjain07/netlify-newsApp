import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="container my-3">
        <div className="card">
          <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6_zG-A23xeULPLNKhqDZiZrMYRdFj-hDNw&usqp=CAU": imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}} >{source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"> <small className="text-muted">By {!author?"Akshay Jain":author} on {new Date(date).toGMTString()}</small> </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More !!</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
