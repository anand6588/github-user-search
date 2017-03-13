import React, { Component , PropTypes } from 'react';
import '../../css/search-result.css';
import { connect } from 'react-redux';
import * as UserSearchActions from '../actions/UserSearchActions';
import Header from '../component/Header.jsx';
import SearchResult from '../component/SearchResults.jsx';

class SearchContainer extends Component 
{

  static propTypes  = { 
                        search : PropTypes.object.isRequired 
                      }

  componentWillMount() 
  {
    this.dispatchSearchRequest( this.props.params.query );
  }

  componentWillReceiveProps(nextProps)
  {
    if( this.props.params.query !== nextProps.params.query )
      this.dispatchSearchRequest( nextProps.params.query );
  }

  dispatchSearchRequest( searchQuery )
  {
      this.props.dispatch( UserSearchActions.searchRequest( { query : searchQuery } ) );
  }

  render() 
  {
    const query     = this.props.params.query;
    //const results   = this.props.search.data ? this.props.search.data : {items : []};
    const search   = this.props.search;
    return (
              
              <div className="search-result-container">
                  <Header />
                  <SearchResult search={search} query={query}/>
              </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      search : state.UserSearchReducer
    }
}
export default connect( mapStateToProps )( SearchContainer )