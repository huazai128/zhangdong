import React from 'react';
import './news.scss';
import 'js/lib/swiper-3.4.2.min.css';
import 'js/lib/countUp';
import { Link, hashHistory } from 'react-router';
import { get, post } from "js/api/fetch";
import { imgRoot } from 'js/api/config'

export default class NewsBg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      bgData: ''
    };
  }
  async componentDidMount() {
    await this.getAmount(0);
    let { result: { data } } = await this.getAdv();
    this.setState({
      bgData: data
    })
    var swiper1 = new window.Swiper('.swiper', {
      paginationClickable: true,
      spaceBetween: 0,
      slidesPerView: 1,
      // autoplay: true,//可选选项，自动滑动
      navigation: {
        nextEl: '.swiper .swiper-button-next',
        prevEl: '.swiper .swiper-button-prev',
      },
    });
    var options = {
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
    };
    setTimeout(() => {
      var demo = new window.CountUp('count', (this.state.amount - 4000), this.state.amount, 0, 5, options);
      if (!demo.error) {
        demo.start();
        setInterval(() => {
          let num = parseInt(Math.random() * 5);
          this.getAmount(num)
          this.state.amount += num;
          demo.update(this.state.amount);
        }, 1000 * 60 * 60);
      } else {
      }
      demo.start();
    }, 200);
  }
  getAdv = async () => await get("/adv");
  getAmount = (num) => {
    get("/views", { amount: num }).then((res) => {
      this.setState({
        amount: res.result.amount
      })
    })
  }
  render() {
    const { bgData } = this.state;
    return (
      <div id="bg">
        <div className="swiper-container swiper">
          <div className="swiper-wrapper">
            {bgData.length > 0 && bgData.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <a href={item.link ? item.link : 'javascript:void(0)'}>
                  <img src={`${imgRoot}${item.url}`} />
                </a>
                {index === 0 && (
                  <div className="bg-num">
                    <div className="bg-box">
                      <h3>覆盖移动终端</h3>
                      <div id="count"></div>
                      <h2>掌动智能质量云平台NQI-Cloud</h2>
                      <p>国内领先的质量测试、质量认证、</p>
                      <p>质量运营、质量变现四位一体的质量云平台</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    )
  }
}