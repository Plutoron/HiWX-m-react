import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopCarousel from './TopCarousel/TopCarousel.js';
import FaultList from './FaultList/FaultList.js';
import HotRepair from './HotRepair/HotRepair.js';
import TypeList from './TypeList/TypeList.js';
import './style.less';

class Home extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div>
              <TopCarousel />
              <TypeList />
              <FaultList />
              <HotRepair />

              <div className='homeOneKey'>
              	<Link to='/'>
              		<div className='array'>一键下单</div>
              		<div className='surTitle'>下单后，客服人员会与您联系确认问题</div>
              	</Link>
              </div>

             <div className='homeBrand'>
              	<Link to='/'>
              		<img src='https://pic.hiweixiu.com/hiweixiu-mobile/img/shouquan.png'/>
              	</Link>
              </div>

              <div className='homeShowBlock'>
              	 <div className='homeShowTitle'>Hi维修实力</div>
              	 <div className='homeShowList'>
	              	 {
	              	    [{
					      content: 'Hi维修保障',
					      imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/wxzl.png'
					    },{
					      content: '极速优质服务',
					      imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/jsyz.png'
					    },{
					      content: '价格公开透明',
					      imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/jgtm.png'
					    }].map((v,i,a)=>{
					    	return(
					    		<div className={ i == 1? 'homeShowListItem mid' : 'homeShowListItem'} key={i}>
					    			<img src={v.imgUrl}/>
					    			<span>{v.content}</span>
					    		</div>
					    	)
					    })
					}
              	</div>
              </div>

              <div className='homeFoot'>
              {
              	[{
              	 	content: '关于我们',
              	 	router: '/'
              	 },{
              	 	content: '服务流程',
              	 	router: '/'
              	 },{
              	 	content: '用户协议',
              	 	router: '/'
              	 }].map((v,i,a)=>{
              	 	return(
              	 		<Link className='homeFootItem' to={v.router}>
              	 			{v.content}
              	 		</Link>
              	 	)
              	 })

              }
              	 
              </div>
        </div>
    );
  }
}


export default Home;