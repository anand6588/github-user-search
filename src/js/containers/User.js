import React , { Component , PropTypes } from 'react'
import Header from '../component/Header.jsx';
import {Link} from 'react-router';
import '../../css/user.css'
import { connect } from 'react-redux'
import UserProfileSidebar from '../component/UserProfileSidebar.jsx'
import * as UserActions from '../actions/UserActions'
import * as RepoActions from '../actions/RepositorActions'
import UserPayload from '../component/UserPayload.jsx'
import Repositories from '../component/Repositories.jsx'

class User extends Component
{
	static propTypes  = { 
                        	user : PropTypes.object.isRequired,
                        	repo : PropTypes.object.isRequired
                      	}

    componentWillMount() 
	{
		this.props.dispatch( UserActions.requestUser( { id : this.props.params.id } ) );
		this.props.dispatch( RepoActions.requestRepos( { id : this.props.params.id } ) );
	}

    render()
    {
    	let user, repos;

    	user 		= 	this.props.user;
    	
    	if( this.props.params.tab === 'repositories' )
    	{
    		repos 	=	this.props.repo;
    	}
    	
    	return(
    		<div className="user-page">
				<Header />
				<div className="content">
					
					<UserProfileSidebar user={user} />

					<div className="user-content">
						<div className="menu-bar">
							<ul className="menu">
								<li>
									<Link to={"/user/payload/"+ ( user ? user.data.login : "" )} className={this.props.params.tab==='payload' ? 'activeClass' : ''}>Payload</Link>
								</li>
								<li>
									<Link to={"/user/repositories/"+ ( user ? user.data.login : "" )} className={this.props.params.tab==='repositories' ? 'activeClass' : ''}>Repositories</Link>
								</li>
							</ul>
						</div>

						<div className="user-content-scrollable">
							{
								this.props.params.tab === 'payload' ? (
									<UserPayload user={user} isFetched={user.isFetched} />
								) : (
									<Repositories repos={repos} isFetched={repos.isFetched} />
								)
							}
						</div>
					</div>
				</div>
			</div>
    	);
    }
}

const mapStateToProps = (state) => {
    return {
      user : state.UserReducer,
      repo : state.RepoReducer
    }
}
export default connect( mapStateToProps )( User )
