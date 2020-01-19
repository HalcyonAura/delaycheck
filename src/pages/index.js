import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
export default class IndexPage extends React.Component {
  state = {flightNumber: ""}

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.flightNumber);
    return false;
  }

  handleChange = event => {
    this.setState({flightNumber: event.target.value})
  }

  stopEnter = event => {
    event.preventDefault();
  }

  render() {
    return (
      <Layout>
    <SEO title="Delay Check" />
    <h1>Flight number</h1>
    <div style = {{position: 'relative', background: '#FFFFFF', maxWidth: '360px', margin: '0 auto 100px', padding: 'px', textAlign: 'center'}}>
    
    <form onSubmit={e => this.stopEnter(e)}
      style = {{
      outline: '0',
      background: '#f2f2f2',
      width: '100%',
      border: '0',
      margin: '0 0 15px',
      padding: '15px',
      boxSizing: 'border-box',
      fontSize: '14px'
      }}>
        
        Enter your flight info
        <br></br>
        <input type="text" name="flightNumber" placeholder="Flight Number" onChange={e => this.handleChange(e)}/>
        <br></br>     
        <button type="button" onClick={(e) => this.handleSubmit(e)}>Go!</button>
    </form>
    </div>
    <Link to="/status/">Check your flight status</Link>
  </Layout>
       )}
  }
