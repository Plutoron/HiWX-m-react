import React from 'react'
import Iframe from 'react-iframe'
import XYNavLink from '../../../components/Nav/XYNavLink'

export default class UserAgree extends React.Component {

  render() {
    return (
        <div className="agressDiv">
          <XYNavLink title="用户协议"/>
            <div className='holder'></div>
            <div className="f1">
            <Iframe
              url="https://hs.hiweixiu.com/site/agreement?is_weixin=1"
              className="wrapFrame"
              position='unset'
            />
          </div>
        </div>
    )
  }
}