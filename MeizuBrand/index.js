import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

class MeizuBrand extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='brandDiv'>
          <XYNavLink title="魅族授权"/>
          
          <div className="banner">
              <img src="https://pic.hiweixiu.com/hiweixiu-app/weapp/img/meizu_banner.png" />
              <img src="https://pic.hiweixiu.com/hiweixiu-app/weapp/img/meizu2.png" className="shouquan" />
              <div className="bannertxt">魅族科技有限公司</div>
          </div>

          <div className="detail">
              <div className="title">关于魅族</div>
              <span>魅族成立于2003年，长达13年的历史文化沉淀使得它对于每一个细节都要做到完美，魅族因梦想而立，热爱而极致，专注和长久的追求，必将带来商业产品无与伦比的梦想之作。魅族的一切将超越常规，超乎想象。</span>
              <div className="title">关于Hi维修</div>
              <span>在Hi维修成立以来，就是为了用快乐方式解决“手机维修难”让更多的人分享快乐、让更多的人传播快乐！用透明价、成本价、免费上门、全程录像、售后质保等多项措施去保护顾客的利益，用电话回访、录像查看、地点定位等措施去维护顾客权益！一切服务以顾客的极致体验为前提，转变大家对手机维修行业的认知！</span>
              <div className="title">官方授权</div>
              <span>2016年8月魅族官方正式授权“Hi维修”成为其线上O2O手机维修商，意向—接洽—考察—合作，每一个步骤都经历了月余的光阴，Hi维修凭借其创新的模式、对待客户认真和负责的态度，一致赢得了魅族官方的高度满意和赞赏！</span>
              <div className="title">我们的优势</div>
              <div className="youshititle">官方授权</div>
              <span className="youshi">魅族手机官方授权线上O2O手机维修商，官方认证，品质有保障！</span>
              <div className="youshititle">覆盖全国</div>
              <span className="youshi">Hi维修已经开通上海、北京、深圳、杭州等12个城市，嬴得了数十万用户口碑赞誉！</span>
              <div className="youshititle">便捷服务</div>
              <span className="youshi">再也不用为手机售后烦忧了，动动手指一键下单，Hi维修为您免费上门服务！</span>
              <div className="youshititle">安全保障</div>
              <span className="youshi">担心零件被换？担心隐私泄露？一对一当面维修，维修过程全程录像保障你的隐私安全！</span>
              <div className="youshititle">透明价格</div>
              <span className="youshi">Hi维修作为魅族官方授权商，价格透明公开，从此告别黑心奸商！</span>
          </div>
        </div>
    );
  }
}

export default MeizuBrand;