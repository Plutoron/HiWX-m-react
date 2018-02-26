import React, { Component } from 'react';

const ensureList =[{
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/baozhang1.png',
      title: '人员保障',
      content: '所有专职工程师均通过岗前专业规范化 培训，具备一年以上维修服务经验。'
    }, {
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/baozhang2.png',
      title: '品质保障',
      content: '魅族、金立等品牌官方 授权维修服务商，所有配件均经过 专业检测合格后投入使用。'
    }, {
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/baozhang3.png',
      title: '隐私保障',
      content: '服务过程中，未经客户允许，不擅自翻看客户手机；全程视频录像，一对一当面维修。'
    }, {
      imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/baozhang4.png',
      title: '售后保障',
      content: '针对维修配件提供180天免费质保服务，为您排除后顾之忧！'
    }]

class EnsureBlock extends Component {
  render() {
    return (   
          <div className="commonDiv">
            <div className="commonTitle">
              <div className="commonTitleLine"></div>
              <div className="commonTitleContent">四大保障</div>
              <div className="commonTitleLine"></div>
            </div>
            {
              ensureList.map((v,i,a)=>{
                return(
                    <div className="ensureItem" key={i}>
                      <div className="ensureItemLeft">
                        <img src={v.imgUrl}/>
                      </div>
                      <div className="ensureItemRight">
                        <div className="top">{v.title}</div>
                        <div className="bottom">{v.content}</div>
                      </div>
                    </div>
                  )
              })
            }
          </div>
    );
  }
}
export default EnsureBlock;