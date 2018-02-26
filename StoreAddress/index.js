import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';
import fakedata from './fakedata.json';

class StoreAddress extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    let data = fakedata.data;
    return (
        <div className='addressDiv'>
          <XYNavLink title="门店地址"/>
        
          <div className='addressList'>
          {
            data.map((v,i,a)=>{
              return(
                  <div className='addressListItem' key={i}>
                    <div className='leftDiv'><img src={v.store_image} /></div>
                    <div className='rightDiv'>
                      <div className='title'>{v.name}</div>
                      <div className='openTime'>{v.opening_time}</div>
                      <div className='addr'>{v.address}</div>
                    </div>
                  </div>
                )
            })

          }
          </div>

        </div>
    );
  }
}


export default StoreAddress;