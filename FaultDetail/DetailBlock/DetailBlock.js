import React, { Component } from 'react';

class DetailBlock extends Component {
  render() {
    return (   
            <div className="detailBlock">
              <div className="blockTop">
                <div className="line"></div>
                <div className="text">详情</div>
                <div className="line"></div>
              </div>
              <div className="blockBottom">
                <div className="topImage">
                  <div className="first">
                    <img src={topImgList[0].imgUrl} />
                  </div>
                  <div className="second">
                    <img src={topImgList[1].imgUrl} />
                  </div>
                </div>

                <div className="faultImg">
                 {
                   faultList[0].imgList.map((v,i,a)=>{
                    return(
                      <div className="imgView" key={i}>
                        <img src={v.imgUrl} />
                      </div>
                      )
                   })
                 }
                </div>
              </div>
            </div>
    );
  }
}

export default DetailBlock;

const topImgList = [{ imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/img1.jpg' }, {imgUrl: 'https://pic.hiweixiu.com/images/mobile/embedded/img2.jpg'}];
const faultList = [{
      faultId: "34",
      faultName: "屏幕",
      imgList: [{
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_02.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_03.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_04.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_05.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_06.jpg'
      }]
    }, {
      faultId: "57",
      faultName: "按键",
      imgList: [{
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_02.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_03.png'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_04.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_05.png'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_06.jpg'
      }]
    }, {
      faultId: "37",
      faultName: "外壳/边框",
      imgList: [{
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_01.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_02.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_03.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_04.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_05.jpg'
      }]
    }, {
      faultId: "63",
      faultName: "声音",
      imgList: [{
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shengyin_01.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shengyin_02.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shengyin_03.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shengyin_04.jpg'
      }]
    }, {
      faultId: "68",
      faultName: "摄像与拍照",
      imgList: [{
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shexiangtou_01.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shexiangtou_02.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shexiangtou_03.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shexiangtou_04.jpg'
      }]
    }, {
      faultId: "84",
      faultName: "电池或不开机",
      imgList: [{
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/dianchi_01.jpg'
      }, {
        imgUrl: 'https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/dianchi_03.jpg'
      }]
    }, {
      faultId: "154",
      faultName: "其他"
    }]