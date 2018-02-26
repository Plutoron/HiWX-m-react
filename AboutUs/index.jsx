import React from 'react'
import Iframe from 'react-iframe'
import XYNavLink from '../../../components/Nav/XYNavLink'

export default class AboutUs extends React.Component {

  render() {
    return (
        <div className="agressDiv">
          <XYNavLink title="关于我们"/>
            <div className="f1">
            <Iframe
              url="https://m.hiweixiu.com/index/aboutus"
              className="wrapFrame"
              position='unset'
            />
          </div>
        </div>
    )
  }
}