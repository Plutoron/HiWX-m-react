import React, { Component } from 'react';

// import { Carousel } from 'antd-mobile';
import Carousel from 'antd-mobile/lib/carousel';  // 加载 JS
import 'antd-mobile/lib/carousel/style';        // 加载 CSS

class TopCarousel extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	data: ['', '', '']
	  };
	}
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a
              key={ii}
              href="http://www.alipay.com"
              className="carouselItem"
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                alt=""
                style={{ width: '100%', height: '100%'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}
export default TopCarousel;

