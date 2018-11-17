import styled from 'styled-components';

// 这就相当于创建了一个组件，并且给了样式，并且样式是当前组件独有的。
export const CategoryWrapper = styled.div`
  flex: 1;
`

export const Tab = styled.ul`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #000;
  background: green;
`

export const TabItem = styled.li`
  flex: 1;
  text-align: center;

  .active {
    color: red;
  }
`

// import styled from 'styled-components';

// export const CategoryWrapper = styled.div`
//   flex: 1;
// `

// export const Tab = styled.ul`
//   display: flex;
//   height: 30px;
//   border-bottom: 1px solid #FFF;
// `

// export const TabItem = styled.li`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
