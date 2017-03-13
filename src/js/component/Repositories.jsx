import React, { Component } from 'react'
import '../../css/repositories.css'

class Repositories extends Component 
{
  render() 
  {
  	const repos 		= 	this.props.repos;
  	const isFetched 	=	this.props.isFetched;

    return (
		     <div className="repositors">
				<ul className="repositories-list">
					{
						isFetched ? (
							repos.data.map( (repo , i) => {
								return (

									<li key={i} className="item">
										<a className="repositor-name" target="_blank" href={repo.html_url}>{repo.name}</a>
										<p className='repositor-desc'>{repo.description}</p>
										<ul className="rep-details">
											<li>
												<label>size:</label>
												<span>{repo.size}</span>
											</li>
											<li>
												<label>watchers:</label>
												<span>{repo.watchers}</span>
											</li>
											<li>
												<label>forks:</label>
												<span>{repo.forks}</span>
											</li>
										</ul>
									</li>
								)
							})
						) : (
							<h5>Loading...</h5>
						)
					}
				</ul>
			</div>
    );
  }
}

export default Repositories;