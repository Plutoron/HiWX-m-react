import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';


import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

class MapIframe extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        url : 'https://m.amap.com/picker/?key=11be5d75018d5bf370f5c5bcab522eb8'
    };
  }
  componentDidMount() {
    // var iframe = document.getElementById('map').contentWindow;
    // document.getElementById('map').onload = function(){
    //   iframe.postMessage('hello','https://m.amap.com/picker/');
    // };
    // window.addEventListener("message", function(e){
    //   alert('您选择了:' + e.data.name + ',' + e.data.location)
    // }, false);

    let url = this.state.url; 

    let map = new AMap.Map('map', {
          resizeEnable: true
      });
      map.plugin('AMap.Geolocation', function () {
          let geolocation = new AMap.Geolocation({
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              timeout: 10000,          //超过10秒后停止定位，默认：无穷大
              buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
              buttonPosition: 'RB'
          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, 'complete', (val)=>{
            console.log('val');
            console.log(val); 
            url +=  '&center=' + val.position.lng + ',' + val.position.lat;

            console.log(url);

            document.querySelector('#map').src = url;

            // this.setState({
            //   url
            // })
          });//返回定位信息
          AMap.event.addListener(geolocation, 'error', (err)=>{
            console.log('err');
            console.log(err);
          });      //返回定位出错信息
      });

      var iframe = document.getElementById('map').contentWindow;
      document.getElementById('map').onload = function(){
        iframe.postMessage('hello','https://m.amap.com/picker/');
      };

      window.addEventListener("message", function(e){
        console.log('e.data');
        console.log(e.data);
        if(!!!e.data.name) return
        alert('您选择了:' + e.data.name + ',' + e.data.location)
      }, false);
  }

  render() {
      

      return (
          <Iframe url={ this.state.url } 
            id="map"
            class=''
          />
      );
     
  }
}


export default MapIframe;