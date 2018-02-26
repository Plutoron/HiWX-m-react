import React, { Component } from 'react';

class ServiceFlowBlock extends Component {
  render() {
    return (   
            <div className="commonDiv">
              <div className="commonTitle">
                <div className="commonTitleLine"></div>
                <div className="commonTitleContent">服务流程</div>
                <div className="commonTitleLine"></div>
              </div>
              <div className="serviceFlow">
                <img src="https://pic.hiweixiu.com/images/mobile/embedded/img3.png" />
              </div>
            </div>
    );
  }
}

export default ServiceFlowBlock;