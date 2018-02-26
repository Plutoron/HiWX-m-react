import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
import List from 'antd-mobile/lib/list';  // 加载 JS

import 'antd-mobile/lib/date-picker/style';         // 加载 LESS
import 'antd-mobile/lib/list/style';         // 加载 LESS

import XYNavLink from '../../../components/Nav/XYNavLink';

import './style.less';


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr} ${timeStr}`;
}


class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      date: now,
      name: 'fdfd',
      phoneNumber: '110'
    };
  }
  componentDidMount() {
   
  }

  onChange(e) {
    let name = e.currentTarget.value;
    this.setState({ 
        name: name 
    });
  }

  render() {
    return (
        <div className='personalInfoDiv'>
          <XYNavLink title="个人信息"/>
          
          <div className='infoDiv'>
            <div className='infoItem'>
                <span className='title'>名字</span>
                <div><input value={this.state.name}  onChange={this.onChange.bind(this)} maxLength='20'/></div>
            </div>

            <div className='addBorder'>
              <DatePicker
                mode="date"
                title=""
                extra="Optional"
                value={this.state.date}
                onChange={date => this.setState({ date })}
              >
                <List.Item arrow="horizontal">生日</List.Item>
              </DatePicker>
            </div>

            <div className='infoItem'>
                <span className='title'>电话</span>
                <div>{this.state.phoneNumber}</div>
            </div>
          </div>

          <div className='editBtn'>确认修改</div>
          <div className='editBtn loginOut'>退出登录</div>
        </div>
    );
  }
}


export default PersonalInfo;