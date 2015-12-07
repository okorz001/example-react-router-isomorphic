import React from 'react'
import { Router, Route, Link } from 'react-router'

class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    )
  }
}

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return <div>Home</div>
  }
}

class About extends React.Component {
  render() {
    return <div>About</div>
  }
}

export default (
  <Route path="/" component={Layout}>
    <Route path="home" component={Home} />
    <Route path="about" component={About} />
  </Route>
)
