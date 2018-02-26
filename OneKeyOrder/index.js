import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

class OneKeyOrder extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='oneKeyDiv'>
          <XYNavLink title="一键下单"/>
          <div className="oneKeyItem">
            <input type="text" className="inputInfo" placeholder='请输入您的姓名'/>
          </div>

          <div className="oneKeyItem">
            <input type="text" className="inputInfo" placeholder='请输入您的手机'/>
          </div>

          <div className="oneKeyItem">
            <input type="text" className="inputInfo" placeholder='请输入图片验证码'/>
            <img className='getCode' src='data:image/jpeg;base64,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'/>

          </div>

          <div className="oneKeyItem">
            <input type="text" className="inputInfo" placeholder='请输入短信验证码'/>
            <span className='getCode'>获取验证码</span>
          </div>

          <div className="oneKeyItem">
             <select className="select">
             	<option>请选择市</option>
             </select>
             <select className="select">
             	<option>请选择区</option>
             </select>
          </div>

          <div className="oneKeyItem">
            <textarea type="text" className="inputInfo" placeholder='请输入详细地址'/>
          </div>

          <div className='oneKeyBtn'>立即下单</div>
        </div>
    );
  }
}

export default OneKeyOrder;