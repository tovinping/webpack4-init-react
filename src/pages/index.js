import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import Person from '../tools/decorator'
import {testGet, testPost} from '../api/test'
import Test from '../components/common/test'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1,3,4,5,6]
    };
    this.btnClick = this.btnClick.bind(this)
    this.showConsole = this.showConsole.bind(this)
    this.addUser = this.addUser.bind(this)
    this.getUserAndAdd = this.getUserAndAdd.bind(this)
    this.getData = this.getData.bind(this)
  }
  btnClick() {
    console.log(this.props)
    this.props.history.push('/pageA')
  }
  showConsole() {
    console.log(this)
    console.log(Person)
  }
  addUser() {
    this.props.addUser({name: '添加用户', sex: '女'})
  }
  getUserAndAdd() {
    this.props.getUserAndAdd('007')
  }
  getData() {
    testGet({id: 'abc'}, 2000).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>
        <Test />
        <p>state列表123aaa</p>
        {this.state.arr.map(item => <div key={item}>列表:{item}</div>)}
        <p>sotre列表123</p>
        {this.props.user.map((item, index) =><div key={index}>{item.name}</div>)}
        <button onClick={this.btnClick}>点我跳转</button>
        <button onClick={this.addUser}>添加用户</button>
        <button onClick={this.getUserAndAdd}>异步添加用户</button>
        <button onClick={this.getData}>请求数据(测试超时)</button>
        <br />
        <button onClick={this.showConsole}>clickShowConsole</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchTopProps = (dispatch) => {
  return {
    addUser: data => dispatch(actions.addUser(data)),
    getUserAndAdd: id => dispatch(actions.getUserAndAdd(id))
  }
}
export default connect(mapStateToProps, mapDispatchTopProps)(Home)