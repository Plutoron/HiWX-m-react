import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TypeList extends Component {
	constructor(props) {
	  super(props);

	  this.state = {

	  }
	}
  componentDidMount() {
  
  }
  render() {
    let data = [1,2,3,4];
    console.log(data)
    return (
      <div className="homeTypeListDiv">
        {
          data.map((v,i,a)=>{
            return(
              <Link className="typeListItem" to='/' key={i} data-id={v.Id}>
                <img src={v.imgurl}/>
                <span>21346</span>
              </Link>

              )
          })
        }
      </div>
    );
  }
}


export default TypeList;