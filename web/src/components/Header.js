import React, { Component } from 'react'
import { logoSkuba } from 'assets/images'

class Header extends Component {

	render(){
		return (
			<nav className="nav has-shadow">
			  <div className="container">
				    <div className="nav-center">
						<figure className="image is-64x64">
							<img src={logoSkuba} />
						</figure>
				    </div>
			  </div>
			</nav>
		)
	}
}

export default Header