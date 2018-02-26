import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

import DetailBlock from './DetailBlock/DetailBlock.js'
import ServiceFlowBlock from './ServiceFlowBlock/ServiceFlowBlock.js'
import ServiceDetailBlock from './ServiceDetailBlock/ServiceDetailBlock.js'
import EnsureBlock from './EnsureBlock/EnsureBlock.js'
import ServeCityBlock from './ServeCityBlock/ServeCityBlock.js'
import TipBlock from './TipBlock/TipBlock.js'
import DetailTipBlock from './DetailTipBlock/DetailTipBlock.js'

class FaultDetail extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='faultDetailDiv'>
          <XYNavLink title="故障详情"/>
          
          <div className='detailContent'>
            <div className="topImg">
               <img src="https://pic.hiweixiu.com/hiweixiu-app/weixiudetail/iphone_screen.png?v=20170831" alt="故障图片"/>
            </div>

            <div className='markInfo'>
               <div className="left">故障表现：</div>
               <div className="right">屏幕碎裂、屏幕不亮、触控失灵等屏幕碎裂、屏幕不亮、触控失灵等</div>
            </div>

            <div className="tipDiv">
              <div className="tipItem">免费上门</div>
              <div className="tipItem">20分钟快修</div>
              <div className="tipItem">修完后付款</div>
            </div>

            <div className="selectDevice">
              <div className="left">维修机型</div>
              <div className="mid">iPhone6</div>
              <Link to='/'><div className="right">修改</div></Link>
            </div>

            <div className="infoAndColor">
              <div className="infoTitle">保障信息</div>
              <div className="infoContent">
                  { /* 添加 class on  */}

                  <div className="selectItem on">11</div>
                  <div className="selectItem">22</div>
                  <div className="selectItem">33</div>
              </div>
            </div>

            <div className="infoAndColor">
              <div className="infoTitle">颜色</div>
              <div className="infoContent">
                <div className="selectItem on">11</div>
                <div className="selectItem">22</div>
                <div className="selectItem">33</div>
              </div>
            </div>

            <div className="repairMsg">
              <div className="repairMsgHead">
                <div className="msgPlan">维修方案</div>
                <div className="msgInfo">维修信息</div>
              </div>

              <div className="repairMsgContent">
                 <div className="contentItem">
                    <span>屏幕碎</span>
                    <span className='money'>600.00</span>
                 </div>
              </div>
            </div>
               
            <div className='detailContainer'>
            	<DetailBlock/>
	            <ServiceFlowBlock/>
	            <ServiceDetailBlock/>
	            <EnsureBlock/>
	            <ServeCityBlock/>
	            <TipBlock/>
            </div>

          </div>
          
          { /* <DetailTipBlock/>   这个是维修方案 */}
<DetailTipBlock/>
          <div className="faultDetailFoot">
             <div className='left'>金额：<span>¥110.00~120.00</span></div>
             <div className='right'>下一步</div>
          </div>
        </div>
    );
  }
}


export default FaultDetail;