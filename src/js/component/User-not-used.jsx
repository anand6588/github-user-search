import React, { Component } from 'react';
import Header from './Header.jsx';
import '../../css/user.css';

class User extends Component
{
	render()
	{
		return(
			<div className="user-page">
				<Header />
				<div className="content">
					
					<div className="user-profile-sidebar">
						<img src="https://avatars3.githubusercontent.com/u/433334?v=" alt="" />
						<div>
							<span style={{fontSize:13+'px'}}>Anand Thiyagarasu</span>
							<br />
							<span style={{fontSize:13+'px'}}>anand.thyagaraju@gmail.com</span>
						</div>
					</div>

					<div className="user-content">
						<div className="menu-bar">
							<ul className="menu">
								<li><a  href="#">Overview</a></li>
								<li><a className="activeClass" href="#">Repositories</a></li>
							</ul>
						</div>
						
						<div>
							<ul className="payload-list">
								<li>
									<label className="label">Login Id</label>
									<span className="value">anand1ezeeway</span>
								</li>
								<li>
									<label className="label">Avatar</label>
									<span className="value">https://avatars1.githubusercontent.com/u/6380625?v=3</span>
								</li>
							</ul>
						</div>

						<div className="repositors" style={{display :"none"}}>
							<ul className="repositories-list">
								<li className="item">
									<a className="repositor-name" href="#">30daysoflaptops.github.io</a>
									<p className='repositor-desc'>TextMate bundle for Tom's Obvious, Minimal Language</p>
									<ul className="rep-details">
										<li>
											<label>size:</label>
											<span>1197</span>
										</li>
										<li>
											<label>watchers:</label>
											<span>4</span>
										</li>
										<li>
											<label>forks:</label>
											<span>7</span>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default User;