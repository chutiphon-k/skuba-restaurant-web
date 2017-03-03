import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'components/App'

const rootEl = document.getElementById('app')

render(
	<AppContainer>
		<App />
	</AppContainer>,
	rootEl
)

if(module.hot) {
	module.hot.accept('components/App', () => {
		const NextRootApp = require('components/App').default

		render(
			<AppContainer>
				<NextRootApp />
			</AppContainer>,
			rootEl
		)		
	})
}