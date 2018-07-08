import React, { Component } from 'react';


class EventItem extends Component {

  render() {
    
    return (
      <li>
        {this.props.title} - {this.props.year}
      </li>
    );
  }
}

export default EventItem;
