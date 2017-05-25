import React, { Component } from 'react';

export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onMessageSend(
    (this.state.value))
  }

  render(){
    return(
      <div
        className='Search'>
        Search
      <form className='searchForm' onSubmit={this.handleSubmit}>
        <input label="Search" type="text" value={this.state.value} onChange={this.handleChange} />
        <button name="Search" type="submit" >Search</button>
      </form>
      </div>
    );
  }
};
