import React, { Component } from 'react';

class ServeCityBlock extends Component {
  render() {
    return (   
             <div className="commonDiv">
              <div className="commonTitle">
                <div className="commonTitleLine"></div>
                <div className="commonTitleContent">服务城市</div>
                <div className="commonTitleLine"></div>
              </div>

              <div className="serveCity">
                <img src="https://pic.hiweixiu.com/images/mobile/embedded/chengshi.png"/>
              </div>
              <div className="serveCityNote">
                <div className="left">备注：</div>
                <div className="right">以上城市客户均可享受上门维修服务，其他地区客户可咨询客服享受包邮寄修服务</div>
              </div>
            </div>
    );
  }
}

export default ServeCityBlock;