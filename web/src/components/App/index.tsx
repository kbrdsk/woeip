import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import Navbar from 'components/Header'
import 'semantic-ui-css/semantic.min.css'
import './index.scss'
import theme from 'theme'
import routes from 'routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </ThemeProvider>
)

export default App
