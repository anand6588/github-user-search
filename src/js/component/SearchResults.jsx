import React, { Component } from 'react';
import {Link} from 'react-router';
import '../../css/search-result.css';


class SearchResult extends Component 
{
  render() 
  {
    const results       = this.props.search.data ? this.props.search.data : {items : []};
    const resultItems   = results.items;
    const isFetching    = this.props.search.isFetching;

    return (
              <div className="search-result">
                <h2>Search Results for "{this.props.query}"</h2>
                  {
                    isFetching ? (
                      <h4>Searching...</h4>
                    ) : (
                          resultItems.length > 0 ? (
                            <ul>
                            {
                              resultItems.map(function(user, i)
                              {
                                  return (
                                          <li key={i}>
                                            <Link to={"/user/payload/"+user.login}>
                                              <div><img src={user.avatar_url} alt="" /></div>
                                              <div>{user.login}</div>
                                            </Link>
                                          </li>
                                  )
                              })
                            }
                          </ul>
                        ) : (
                          <h4> No results found!</h4>
                        )
                    )
                  }
              </div>
    );
  }
}
export default SearchResult;