import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import fakedata from './fakedata.json'

class FaultList extends Component {
	constructor(props) {
	  super(props);

	  this.state = {

	  }
	}
  componentDidMount() {
  
  }
  render() {
    let data = fakedata.data;
    console.log(data)
    return (
      <div className="homeFaultDiv">
        {
          data.map((v,i,a)=>{
            return(
              <Link className="homeFaultItem" to='/' key={i} data-id={v.Id}>
                <img src={v.imgurl}/>
                <span>{v.Name}</span>
              </Link>

              )
          })
        }
      </div>
    );
  }
}


export default FaultList;