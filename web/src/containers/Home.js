import React, { Component } from 'react'
import socket from 'socket.io-client'
import {
	lumyaiActive,
	lumyaiStandby,
	lumyaiWork,
	turtleActive,
	turtleStandby,
	turtleWork
} from 'assets/images'
import 'containers/Home.css'

class Home extends Component {

	state = {
		picLumyai: lumyaiActive,
		picTurtle: turtleActive,
		orderA: [],
		orderB: [],
		orderC: []
	}

	componentWillMount(){
        const io = socket('http://localhost:9090')
		io.on('data', (res) => {
			console.log(res)
			switch(res.status){
				case 'standby':
					switch(res.name){
						case 'lumyai':
							this.setState({ picLumyai: lumyaiActive })
							break
						case 'turtle':
							this.setState({ picTurtle: turtleActive })
							break
					}
					break
				case "finish":
					switch(res.name){
						case "lumyai":
							this.setState({ picLumyai: lumyaiWork })
							break
						case "turtle":
							this.setState({ picTurtle: turtleWork })
							break
						default:
							console.log('aaa')
							break
					}
					break
			}
			
			switch(res.table){
				case 'a':
					this.setState({ orderA: res.order })
					break
				case 'b':
					this.setState({ orderB: res.order })
					break
				case 'c':
					this.setState({ orderC: res.order })
					break
			}
		})
	}

	render(){
		return (
			<div className="has-text-centered">
				<div className="heading">
					<h1 className="title">
						<strong><a>Skuba Restaurant</a></strong>
					</h1>
			        <h2 className="subtitle">
						VDO qualify world robocup 2017
			        </h2>
				</div>
				<hr />
				<div className='content is-medium'>
					<div className="columns">
					  <div className="column" />
					  <div className="column" onClick={() => alert('aaa')}>
					  	<div className="card">
						<div className="card-content">
						<div className="has-text-centered">
							<figure className="image">
								<img src={this.state.picLumyai} />
							</figure>
						</div>
						</div>
						</div>
					  </div>
					  <div className="column">
					  <div className="card">
						<div className="card-content">
						<div className="has-text-centered">
							<figure className="image">
								<img src={this.state.picTurtle} />
							</figure>
						</div>
						</div>
						</div>
					  </div>
					  <div className="column" />
					</div>
					<br />
					<div className="columns">
					  <div className="column">
						  <div className="card home">
							  	<header className="card-header">
								 <p className="card-header-title " style={{ "justifyContent": "center", 'alignItems': 'center' }} >
									<a>Table A</a>
								</p>
								</header>
								<div className="card-content">
								<div className="has-text-left">
								  <ul>
								  	{
								  		this.state.orderA.map((order, index) => {
								  			return <li key={index}>{order}</li>
								  		})
								  	}
								  </ul>
								</div>
								</div>
						  </div>
					  </div>
					  <div className="column">
					  <div className="card home">
					  <header className='card-header'>
						 <p className="card-header-title " style={{ "justifyContent": "center", 'alignItems': 'center' }} >
							<a>Table B</a>
						</p>
						</header>
						<div className="card-content">
						<div className="content has-text-left">
						  <ul>
						  	{
						  		this.state.orderB.map((order, index) => {
						  			return <li key={index}>{order}</li>
						  		})
						  	}
						  </ul>
						</div>
						</div>
						</div>
					  </div>
					  <div className="column">
					  <div className="card home">
					  <header className="card-header">
						 <p className="card-header-title " style={{ "justifyContent": "center", 'alignItems': 'center' }} >
							<a>Table C</a>
						</p>
						</header>
						<div className="card-content">
						<div className="has-text-left">
						  <ul>
						  	{
						  		this.state.orderC.map((order, index) => {
						  			return <li key={index}>{order}</li>
						  		})
						  	}
						  </ul>
						</div>
						</div>
						</div>
					  </div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
