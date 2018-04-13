import React, { Component } from 'react';
import NavLink from '../component/navLink';
import { Link, hashHistory } from 'react-router';
import FormComponent from './form';
import ModalForm from './askModal';
import './navs.scss';

export default class NavsBox extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    const { datas=[], type=true, title, cls,vh='flex-vcenter' } = this.props;
    return (
      <div id="navs" className={cls}>
        <div className={ `navs-cont ${vh}` }>
          <div >
            <h3>{title}</h3>
            {datas.map((item, index) => (
              <p key={ index }>{item}</p>
            ))}
            <div className={ `top-nav ${ vh }` }>
              { type ? <FormComponent /> : <ModalForm /> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}