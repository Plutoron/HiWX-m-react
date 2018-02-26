import React, { Component } from 'react';

class TipBlock extends Component {
  render() {
    return (   
            <div className="commonDiv">
              <div className="commonTitle">
                <div className="commonTitleLine"></div>
                <div className="commonTitleContent">温馨提示</div>
                <div className="commonTitleLine"></div>
              </div>

              <div className="tipContent">
                <div>如果您设置了锁屏密码，请在维修前取消密码，以便于我们更好地维修您的设备。</div>
                <div>维修前，备份好您的数据；我们不会备份和泄露您的数据，亦不对数据丢失负责。</div>
              </div>
            </div>
    );
  }
}

export default TipBlock;