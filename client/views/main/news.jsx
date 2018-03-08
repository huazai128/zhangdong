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
    let { result: { data } } = await this.getAdv();
    this.setState({
      bgData: data
    })
    var swiper1 = new window.Swiper('.swiper', {
      paginationClickable: true,
      spaceBetween: 0,
      slidesPerView: 1,
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
    let count = 184033;
    setTimeout(function () {
      var demo = new window.CountUp('count', 180000, 184033, 0, 5, options);
      if (!demo.error) {
        demo.start();
        setInterval(() => {
          count += parseInt(Math.random() * 5);
          demo.update(count);
        }, 3500);
      } else {
      }
      demo.start();
    }, 200);
  }
  getAdv = async () => await get("/adv");
  render() {
    const { bgData } = this.state;
    return (
      <div id="bg">
        <div className="swiper-container swiper">
          <div className="swiper-wrapper">
            {bgData.length > 0 && bgData.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <a href={item.link}>
                  <img src={  `${imgRoot}${item.url}`} />
                </a>
                {index === 0 && (
                  <div className="bg-num">
                    <a href={item.link}>
                      <div className="bg-box">
                        <div id="count"></div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="swiper-button-next"></div>s
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    )
  }
}