import React, { Component } from 'react';
import EventItem from './EventItem';


class Events extends Component {

  render() {
  	let dataItems;
  	if (this.props.datas) {

        if (this.props.sortMe) {

          dataItems = this.props.datas.sort((a,b) => {
              return new Date(a.releaseYear).getTime() - 
                  new Date(b.releaseYear).getTime()
          }).reverse();    

        }

    		dataItems = this.props.datas.map(data => {
          return(
              <EventItem key={data.id} title={data.title} year={data.releaseYear} />
          )
    		})        
  	}

    return (
      <div>

        <ul>
          {dataItems}
        </ul>
      </div>
    );
  }
}

export default Events;
