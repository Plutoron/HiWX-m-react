import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

class SelectAddress extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	genderId: 1
    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='selectAddressDiv'>
          <XYNavLink title="填写地址"/>
          <div className='selectAddressContainer'>
	          <div className='line'>
	          	<div className='title'>联系人</div>
	          	<input className='borderDown' placeholder='请输入您的姓名'/>
	          </div>

	          <div className='line borderDown'>
	          	<div className='title'></div>
	          	<div className='genderSelect'>
	          		<div className='selectItem' data-id='1' onClick={this.selectGender.bind(this)}>
	          			<img src={ this.state.genderId == 1 ? 'https://pic.hiweixiu.com/hiweixiu-app/weapp/img/170204013.png' : 'https://pic.hiweixiu.com/hiweixiu-app/weapp/img/170204012.png' } />
	          			<span>男士</span>
	          		</div>

	          		<div className='selectItem' data-id='2' onClick={this.selectGender.bind(this)}>
	          			<img src={ this.state.genderId == 2 ? 'https://pic.hiweixiu.com/hiweixiu-app/weapp/img/170204013.png' : 'https://pic.hiweixiu.com/hiweixiu-app/weapp/img/170204012.png' } />
	          			<span>女士</span>
	          		</div>
	          	</div>
	          </div>

	          <div className='line borderDown'>
	          	<div className='title'>地址</div>
	          	<div className='addrDiv'>
	          		小区/写字楼/学校等
	          	</div>
	          </div>

	          <div className='line'>
	          	<div className='title'></div>
	          	<input placeholder='请输入详细地址'/>
	          </div>
		  </div>

		  <div className='confirmBtn'>确定</div>

        </div>
    );
  } 
  selectGender(e){
    	console.log(e.currentTarget);
    	let id = e.currentTarget.dataset.id;
    	console.log(id);
    	this.setState({
    		genderId: id
    	})

    }
}


export default SelectAddress;