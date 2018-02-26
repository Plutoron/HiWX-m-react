import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

import fakedata from './fakedata.json';

class SelectFault extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='selectFaultDiv'>
          <XYNavLink title="选择故障大类"/>
          {
              fakedata.data.map((v,i,a)=>{

                  if(v.jump_type == 1) return;

                  return(
                      <div className='selectFaultItem' key={i}>
                          <img src={v.icon}/>
                          <div>
                              <span className='title'>{v.Name}</span>
                              <span className='surTitle'>{v.desc}</span>
                          </div>
                      </div>
                  )
              })
          }
          
        </div>
    );
  }
}

export default SelectFault;