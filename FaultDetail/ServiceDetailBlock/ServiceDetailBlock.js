import React, { Component } from 'react';

class ServiceDetailBlock extends Component {
  render() {
    return (   
             <div className="commonDiv">
              <div className="commonTitle">
                <div className="commonTitleLine"></div>
                <div className="commonTitleContent">服务细节</div>
                <div className="commonTitleLine"></div>
              </div>
              <div className="serviceDetail">
              {
               serviceDtailList.map((v,i,a)=>{
                 return(
                  <div className="serviceDetailItem" key={i}>
                    <div className="note">{v.note}</div>
                    <img src={v.imgUrl} />
                  </div>
                  )
               })
              }
              </div>
            </div>
    );
  }
}

export default ServiceDetailBlock;

const  serviceDtailList = [{
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/fuwu1.jpg',
      note: '进门穿鞋套'
    }, {
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/fuwu2.jpg',
      note: '维修装备'
    }, {
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/fuwu3.jpg',
      note: '工具摆放'
    }, {
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/fuwu4.jpg',
      note: '全程录像'
    }, {
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/fuwu5.jpg',
      note: '微笑服务'
    }, {
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/fuwu6.jpg',
      note: '专业技术'
    }]