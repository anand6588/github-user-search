import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import '../../css/home.css';

class App extends Component 
{
  constructor()
  {
    super();
    this.onSearchSubmit = this.onSearchSubmit.bind( this );
  }

  componentDidMount()
  {
    this.query.focus();
  }
  onSearchSubmit(e)
  {
    e.preventDefault();

    if( this.query.value.trim() !== "" )
      browserHistory.push( '/search/'+this.query.value.trim() );
  }
  render() {
    return (
      <div id="search-home">
        <div className="position-middle">
          <div className="adjust-left-align">
              <form onSubmit={this.onSearchSubmit}>
                <input type="text" className="home-search-box" placeholder="Search by github username" ref={(query) => this.query = query} />
                <button className="home-search-btn">Search</button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;