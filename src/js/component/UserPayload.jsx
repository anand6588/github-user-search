import React, { Component } from 'react'
import '../../css/user-payload.css'

class UserPayload extends Component 
{
  render() 
  {
  	const user 		= this.props.user.data;
  	const isFetched = this.props.isFetched;

    return (
		     <div className="payload">
				<ul className="payload-list">
					{
						isFetched ? (
							Object.keys(user).map( (key , i) => {
								return (
									<li key={i}>
										<label className="label">{key.replace(/_/g," ")}</label>
										<span className="value">{ ( user[key] ? user[key] : "-" ) }</span>
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

export default UserPayload;