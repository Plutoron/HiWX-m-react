import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

class MyCoupon extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='couponDiv'>
          <XYNavLink title="优惠券"/>
          <div className='codeTo'>
          	<input type='number' placeholder='请输入兑换码'/>
          	<span>兑换</span>
          </div>

          <div className='couponList'>

          	{ /*  添加 不同的class  on discount invalid   已使用按钮  按情况 显示*/}
          	<div className='couponItem on'>
          		<div className='itemTop'>
          			<div className='leftPart'>
          				<div className='leftTop'>

          					<span className='rmb'>¥</span>
          					<span className='num'>45</span>
          					{ /* <span className='zhe'>折</span> */ }
          				</div>
          				<div className='leftDown'>折扣券</div>
          			</div>
          			<div className='rightPart'>
          				<div className='code'>178427927142</div>
          				<div className='range'>全部城市可用</div>
          				<div className='range'>全部机型可用</div>
          				<div className='range'>全部故障可用</div>
          			</div>
          		</div>
          		<div className='itemDown'>有效期2017-12-07至2018-03-31</div>

          		<div className='selectBtn'><img src={require('../../../static/images/xzzf.png')} /></div>  

     		    <div className='used'>已使用</div>

          	</div>

          	<div className='couponItem'>
          		<div className='itemTop'>
          			<div className='leftPart'>
          				<div className='leftTop'>
          					<span className='rmb'>¥</span>
          					<span className='num'>45</span>
          					{ /* <span className='zhe'>折</span> */ }
          				</div>
          				<div className='leftDown'>折扣券</div>
          			</div>
          			<div className='rightPart'>
          				<div className='code'>178427927142</div>
          				<div className='range'>全部城市可用</div>
          				<div className='range'>全部机型可用</div>
          				<div className='range'>全部故障可用</div>
          			</div>
          		</div>
          		<div className='itemDown'>有效期2017-12-07至2018-03-31</div>

          		<div className='selectBtn'><img src={require('../../../static/images/xzzf.png')} /></div>

     			<div className='used'>已使用</div>

          	</div>

          	<div className='couponItem discount'>
          		<div className='itemTop'>
          			<div className='leftPart'>
          				<div className='leftTop'>
          					{ /* <span className='rmb'>¥</span>  */ }
          					<span className='num'>45</span>
          					 <span className='zhe'>折</span>
          				</div>
          				<div className='leftDown'>折扣券</div>
          			</div>
          			<div className='rightPart'>
          				<div className='code'>178427927142</div>
          				<div className='range'>全部城市可用</div>
          				<div className='range'>全部机型可用</div>
          				<div className='range'>全部故障可用</div>
          			</div>
          		</div>
          		<div className='itemDown'>有效期2017-12-07至2018-03-31</div>

          		<div className='selectBtn'><img src={require('../../../static/images/xzzf.png')} /></div> 

     			<div className='used'>已使用</div>

          	</div>

          	<div className='couponItem invalid'>
          		<div className='itemTop'>
          			<div className='leftPart'>
          				<div className='leftTop'>
          					{ /* <span className='rmb'>¥</span>  */ }
          					<span className='num'>45</span>
          					 <span className='zhe'>折</span>
          				</div>
          				<div className='leftDown'>折扣券</div>
          			</div>
          			<div className='rightPart'>
          				<div className='code'>178427927142</div>
          				<div className='range'>全部城市可用</div>
          				<div className='range'>全部机型可用</div>
          				<div className='range'>全部故障可用</div>
          			</div>
          		</div>
          		<div className='itemDown'>有效期2017-12-07至2018-03-31</div>

          		<div className='selectBtn'><img src={require('../../../static/images/xzzf.png')} /></div>

     			<div className='used'>已使用</div>

          	</div>

          	<div className='couponItem invalid hasUse'>
          		<div className='itemTop'>
          			<div className='leftPart'>
          				<div className='leftTop'>
          					{ /* <span className='rmb'>¥</span>  */ }
          					<span className='num'>45</span>
          					 <span className='zhe'>折</span>
          				</div>
          				<div className='leftDown'>折扣券</div>
          			</div>
          			<div className='rightPart'>
          				<div className='code'>178427927142</div>
          				<div className='range'>全部城市可用</div>
          				<div className='range'>全部机型可用</div>
          				<div className='range'>全部故障可用</div>
          			</div>
          		</div>
          		<div className='itemDown'>有效期2017-12-07至2018-03-31</div>

          		<div className='selectBtn'><img src={require('../../../static/images/xzzf.png')} /></div>

     			<div className='used'>已使用</div>

          	</div>
 
          </div>

          <div className='nullTicket'>暂无可用优惠券</div>

          <div className='confirmBtn'><span>确认</span></div>

        </div>
    );
  }
}

export default MyCoupon;