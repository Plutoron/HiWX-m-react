import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RepairDeviceInfo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      unlogin:false,
      selectedTime:false,
      selectedCoupon:false,
    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='RepairDeviceInfoBlock'>
            <div className='title'>iPhone100</div>
            <div className='repireContent'>
                <div className='perLine'>
                    <div className='leftTitle'>更换总成对换(质保180天)（旧屏收回）更换总成对换(质保180天)（旧屏收回）</div>
                    <div className='rightMoney'>¥180.00</div>
                </div>

                <div className='perLine'>
                    <div className='leftTitle'>上门费</div>
                    <div className='rightMoney'>¥180.00</div>
                </div>

                <div className='perLine'>
                    <div className='leftTitle'>手工费</div>
                    <div className='rightMoney'>¥180.00</div>
                </div>

                <div className='perLine'>
                    <div className='leftTitle'>优惠金额</div>
                    <div className='rightMoney'>¥180.00</div>
                </div>
            </div>
            <div className='foot'>
                <span>总额：¥180.00</span>
            </div>
        </div>
    );
  }
}

export default RepairDeviceInfo;