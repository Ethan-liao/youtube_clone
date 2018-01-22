import React,{ Component } from 'react';

class SearchBar extends Component {
  // only class have states
  //functions dont have states
  constructor(props) {
    super(props);

    this.state = {
      term:'Search Here'
    };
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <div className='search-bar'>
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }
}

export default SearchBar;
