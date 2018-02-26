import React from 'react'
import Iframe from 'react-iframe'
import XYNavLink from '../../../components/Nav/XYNavLink'

export default class OnlineService extends React.Component {

  render() {
    return (
        <div className="agressDiv">
          <XYNavLink title="在线客服"/>
          <div className="holder"></div>
          <div className="f1">
            <Iframe
              url="https://a1.7x24cc.com/phone_webChat.html?accountId=N000000007871&chatId=hiweixiu-c2e8fd10-620f-11e7-9fe2-65f191263151"
              className="wrapFrame"
              position='unset'
            />
          </div>
        </div>
    )
  }
}