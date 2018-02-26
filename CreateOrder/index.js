import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

import AddressBlock from './AddressBlock/AddressBlock.js';
import OrderUserInfo from './OrderUserInfo/OrderUserInfo.js';
import RepairDeviceInfo from './RepairDeviceInfo/RepairDeviceInfo.js';

class CreateOrder extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='createOrderDiv'>
          <XYNavLink title="立即下单"/>
          <AddressBlock />

          <OrderUserInfo />

          <RepairDeviceInfo />

          <div className='createOrderFixedBottom'>
             <div className='leftContent'>
                <div className='topMoney'>总额：<span>180</span></div>
                <div>
                  <span>提交订单等同于同意</span>
                  <Link to="/">Hi维修服务条款</Link>
                </div>
             </div>
        
            <div className='rightBtn'>
              <Link to='/'>一键下单</Link>
            </div>
              
          </div>

        </div>
    );
  }
}


export default CreateOrder;