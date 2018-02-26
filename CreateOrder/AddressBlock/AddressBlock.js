import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddressBlock extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      unadd:true
    };
  }
  componentDidMount() {
   
  }
  render() {
    return (
        <div className='addressBlock'>
        {
            this.state.unadd ?
            <div className='unadd'>请添加服务地址</div> :
            <div className='added'>
                <div className='name'>预约时间，</div>
                <div className='addrInfo'>预约时间，切换日期选项，相应的时间列表没有滚动到顶部</div>
            </div>
        }
        </div>
    );
  }
}

export default AddressBlock;