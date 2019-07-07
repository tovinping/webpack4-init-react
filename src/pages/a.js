import React from 'react'
import ErrorContainer from '../components/common/errorContainer'
import ErrorCom from '../components/common/errorCom.js'

export default class PageA extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }
  render() {
    if (this.state.error) {
      return <h1 style={{color: 'red'}}>此组件加载失败</h1>
    }
    return <div className="page-a">
      这是页面AAAAA
      <ErrorContainer>
        <ErrorCom />        
      </ErrorContainer>
    </div>
  }
}