import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'containers/Home'

const styles = {
	site: {
	  display: 'flex',
	  minHeight: '100vh',
	  flexDirection: 'column'
	},
	siteContent: {
	  flex: 1,
	  margin: 20
	}
}


const App = ({ children }) => {
	return (
		<div style={styles.site}>
			<div style={styles.siteContent}>
				<section className="section">
					<div className="container">
						<Home />
					</div>
				</section>
			</div>
			<Footer />
		</div>
	)
}

export default App