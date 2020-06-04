import React from 'react';
import './App.css';
import Book from './Book';
import BookForm from './BookForm';

class App extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      /*
        Your code goes here
      */
     title:"No title yet",
     author:"no author yet",
     thumbnail:"no thumbnail yet",
     textSnippet:"no text snippet yet"
    }
  }

  /* 
    Your code goes here
  */
  updateBook = (title,author,thumbnail,textSnippet)=>{
    this.setState({
      title:title,
      author:author,
      thumbnail:thumbnail,
      textSnippet:textSnippet
    })
  }

  requestVolume = (volume) =>{
    let url = `https://www.googleapis.com/books/v1/volumes?q=${volume}`
    let settings = {
      method: 'GET'
    }
    fetch(url,settings)
    .then( response  => {
      if (response.ok){
        return response.json();
      }else{
        this.updateBook("There was no response","","","")
      }
    })
    .then( responseJSON =>{
      this.updateBook(
        responseJSON.items[0].title,
        responseJSON.authors[0],
        responseJSON.thumbnail,
        responseJSON.description
      )
    })
    .catch( err => {
      this.updateBook("There was no response","","","")
    })
  }

  render(){
    return(
      <div>
        <BookForm
          updateBook ={this.updateBook}
          requestVolume ={this.requestVolume}
        />
        <Book
          title={this.state.title}
          author={this.state.author}
          thumbnail={this.state.thumbnail}
          textSnippet={this.state.textSnippet}
        />
      </div>
    )
  }

}

export default App;
