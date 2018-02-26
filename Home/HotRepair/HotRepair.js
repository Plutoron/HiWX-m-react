import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import fakedata from './fakedata.json'

class HotRepair extends Component {
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
      <div className="homeHotRepair">
        <div className="hotTitle">热门维修</div>
        <div className="scrollContainer">
          <div className="hotScroll">
            {
              data.map((v,i,a)=>{
                return(
                  <Link to='/' key={i} data-id={v.Id}>
                    <div className="hotScrollItem">
                      <span className='mould'>iPhone6</span>
                      <span className='fault'>外屏碎（显示正常）</span>
                      <div className='lineDiv'>
                        <span></span>  
                      </div>
                      <span className='money'>¥180</span>
                    </div>
                  </Link>
                  )
              })
            }
          </div>
        </div>
        
      </div>
    );
  }
}


export default HotRepair;