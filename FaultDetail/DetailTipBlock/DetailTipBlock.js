import React, { Component } from 'react';

import fakedata from './fakedata.json';

class DetailTipBlock extends Component {

  render() {
    return (   
            <div className="detailTipDiv">
               <div className="detaiTipList" onTouchMove={(e)=>{ e.preventDefault(); e.stopPropagation(); }}>
                {
                  fakedata.data.explain.map((v,i,a)=>{
                      return(
                        <div className="detaiTipItem" key={i}>
                          <div className='itemTitle'>{v.title}</div>
                          <div className='itemContent'>
                            {
                              v.list.map((v,i,a)=>{
                                return(
                                  <div key={i}>{v}</div> 
                                )
                                 
                              })
                            }
                          </div>
                        </div>
                      )
                  })
                }
               </div>
               <div className="closeBtnDiv">
                  <img className='closeBtn' src="https://pic.hiweixiu.com/hiweixiu-app/weapp/img/close.png" />
                </div>
            </div>
    );
  }
}

export default DetailTipBlock;