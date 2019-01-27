import React from 'react'
import { hot } from 'react-hot-loader'

import './normalize.css'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    staesfsef: 'cpoo ponkey',
    count: 1
  }
  render() {
    return (
      <div>
        <h1>Hi</h1>
        <h2>Coaunt: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click dicksdf
        </button>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
