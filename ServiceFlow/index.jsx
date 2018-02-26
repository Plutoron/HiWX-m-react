import React from 'react'
import Iframe from 'react-iframe'
import XYNavLink from '../../../components/Nav/XYNavLink'

export default class ServiceFlow extends React.Component {

  render() {
    return (
        <div className="agressDiv">
          <XYNavLink title="服务流程"/>
            <div className='holder'></div>
            <div className="f1">
            <Iframe
              url="https://m.hiweixiu.com/embedded/service"
              className="wrapFrame"
              position='unset'
            />
          </div>
        </div>
    )
  }
}