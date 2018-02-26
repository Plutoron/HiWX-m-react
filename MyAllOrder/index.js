import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

class MyAllOrder extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='allOrderDiv'>
          <XYNavLink title="全部订单"/>
          <div className='allOrderList'>
            <div className='allOrderContent'>
              {
                [1,2,3,2,2,6,2,4,5].map((v,i,a)=>{
                  return(
                      <div className='allOrderItem'>
                        <div className='itemTitle'>
                            <img src={ v == 2 ? 'https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020402.png' : 'https://pic.hiweixiu.com/hiweixiu-app/weapp/img/huishou_icon.png'}/>
                            <span className='surTitle'>{ v == 2 ? '维修服务' : '回收业务'}</span>
                            <span className='status'>订单已取消</span>
                        </div>
                        <div className='itemContent'>
                            <div className='leftImg'><img src='https://pic.hiweixiu.com/images/uploadImg/modelImg/20160415/20160415101853_31560.png'/></div>
                            <div className='rightDiv'>
                                <span>iPhone6 感应故障（亮度与通话不黑屏）</span>
                            </div>

                        </div>
                        <div className='itemFoot'>
                            <span>价格：</span>
                            <span className='price'>1750.00</span>
                        </div>
                      </div>
                    )
                })
              }
            </div>

            <div className='allOrderFoot'>已经到底啦~</div>
          </div>
        </div>
    );
  }
}


export default MyAllOrder;