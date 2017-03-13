import React , { Component } from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router'

import '../../css/header.css';
import logo from '../../images/logo.png';

class Header extends Component
{
	constructor()
	{
		super();
		this.onSearchSubmit = this.onSearchSubmit.bind( this );
	}

	onSearchSubmit(e)
	{
		e.preventDefault();
		if( this.query.value.trim() !== "" )
			browserHistory.push( '/search/'+this.query.value.trim() );
	}

	render()
	{
		return (
			<header>
            <Link to="/">
              <img className="logo" src={logo} alt="logo"/>
            </Link>
            <div className="header-search-form">
              <form onSubmit={this.onSearchSubmit}>
                <input type="text" className="header-search-box" placeholder="Search by github username" ref={(query) => this.query = query} />
              </form>
            </div>
          </header>
		);
	}
}

export default Header;