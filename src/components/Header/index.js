import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleNav: false
    }
  }

  render() {
    return (
      <div className="elm-head">
        <div
          className="left"
          onClick={() => {
            this.setState({
              visibleNav: !this.state.visibleNav
            })
          }}
          >
          <div className="menu">
            <Icon type="ellipsis" color="#FFF" />
          </div>
          <h2>卖座电影</h2>
        </div>

        <div className="right">
          <a href="#" className="city">
            深圳
            <i className="iconfont icon-xiala"></i>
          </a>
          <a href="#" className="iconfont icon-user"></a>
        </div>

        <CSSTransition
          in={this.state.visibleNav}
          timeout={300}
          classNames="slide"
          unmountOnExit
          >
          <div className="nav-container">
            <ul>
              <li>
                <a>
                  首页
                  <i className="iconfont icon-xiayibu"></i>
                </a>
              </li>
              <li>
                <a>
                  影片
                  <i className="iconfont icon-xiayibu"></i>
                </a>
              </li>
              <li>
                <a>
                  影院
                  <i className="iconfont icon-xiayibu"></i>
                </a>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default Header;
