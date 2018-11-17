import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';
import { CategoryWrapper, Tab, TabItem } from './style.js';

class Category extends Component {
  render() {
    let path = this.props.match.path;

    return (
      <CategoryWrapper>
        <Tab>
          <TabItem>
            {/* <NavLink to="/category/type1">分类1</NavLink> */}
            <NavLink to={`${path}/type1`}>分类1</NavLink>
          </TabItem>
          <TabItem>
            <NavLink to={`${path}/type2`}>分类2</NavLink>
          </TabItem>
          <TabItem>
            <NavLink to={`${path}/type3`}>分类3</NavLink>
          </TabItem>
        </Tab>

        {/* localhost:3000/#/category/type1 */}
        <Switch>
          <Route path={`${path}/type1`} render={() => <h1>分类1</h1>}></Route>
          <Route path="/category/type2" render={() => <h1>分类2</h1>}></Route>
          <Route path="/category/type3" render={() => <h1>分类3</h1>}></Route>
          <Redirect from="/category" to="/category/type1"></Redirect>
        </Switch>

      </CategoryWrapper>
      // <CategoryWrapper>
      //   <Tab>
      //     <TabItem>
      //       <NavLink to="/category/type1">分类1</NavLink>
      //     </TabItem>
      //     <TabItem>
      //       <NavLink to="/category/type2">分类2</NavLink>
      //     </TabItem>
      //     <TabItem>
      //       <NavLink to="/category/type3">分类3</NavLink>
      //     </TabItem>
      //   </Tab>

      //   <Switch>
      //     <Route path="/category/type1" render={() => <h1>分类1</h1>} />
      //     <Route path="/category/type2" render={() => <h1>分类2</h1>} />
      //     <Route path="/category/type3" render={() => <h1>分类3</h1>} />
      //     <Route path="" render={() => <h1>分类1</h1>} />
      //   </Switch>

      // </CategoryWrapper>
    )
  }
}

export default Category;
