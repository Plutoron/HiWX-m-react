import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';

class BrandAuthor extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='brandAuthorDiv'>
          <XYNavLink title="Hi维修"/>

          <div className='brandAuthorItem'>
              <img src='https://pic.hiweixiu.com/hiweixiu-app/weapp/img/meizu2.png'/>
              <div>魅族官方授权</div>
          </div>

            <div className='brandAuthorItem'>
              <img src='https://pic.hiweixiu.com/hiweixiu-app/weapp/img/gionee.png'/>
              <div>金立官方授权</div>
          </div>

            <div className='brandAuthorItem'>
              <img src='https://pic.hiweixiu.com/hiweixiu-app/weapp/img/qidai.png'/>
              <div>敬请期待</div>
          </div>
          
        </div>
    );
  }
}

export default BrandAuthor;