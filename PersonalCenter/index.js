import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.less';

class PersonalCenter extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='personalDiv'>
             <div className='userInfo'>
                <img className='headPic' alt='头像' src='https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020405.png'/>
                <span className='title'>点击登录</span>
                <span className='surTitle'>快乐方式解决手机维修</span>
             </div>

             <div className="actDiv">
                <Link to='/'>
                  <div className="actItem">
                    <img src="https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020406.png" alt="订单icon" className="icon"/>
                    <div className="title">我的订单</div>
                  </div>
                </Link>

                 <Link to='/'>
                  <div className="actItem">
                    <img src="http://pic.hiweixiu.com/hiweixiu-app/weapp/img/ticket.png" alt="优惠券icon" className="icon"/>
                    <div className="title">我的优惠券</div>
                  </div>
                </Link>

                 <a href="tel:4000171010">
                  <div className="actItem">
                    <img src="https://pic.hiweixiu.com/hiweixiu-app/weapp/img/kfdh.png" alt="订单icon" className="icon"/>
                    <div className="title">客服电话</div>
                  </div>
                </a>

                 <Link to='/'>
                  <div className="actItem">
                    <img src="https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020407.png" alt="订单icon" className="icon"/>
                    <div className="title borderNone">在线客服</div>
                  </div>
                </Link>
                 
             </div>  
        </div>
    );
  }
}


export default PersonalCenter;