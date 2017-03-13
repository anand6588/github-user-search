import React, { Component } from 'react';
import '../../css/user-sidebar.css';

class User extends Component
{
	render()
	{
		return(
				<div className="user-profile-sidebar">
					{
						<div>
							<img src={this.props.user.data.avatar_url} alt="" />
							<div>
								<span className="user-name">{this.props.user.data.name}</span>
								<br />
								<span className="user-email">{this.props.user.data.email}</span>
							</div>
						</div>
					}
				</div>
		);
	}
}

export default User;