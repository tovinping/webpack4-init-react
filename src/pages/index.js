import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
// import Person from '../tools/decorator'
import {testGet} from '../api/test'
import Test from '../components/common/test'
import '../assets/css/reset.scss'
import '../assets/css/home.scss'
const img32kb = require('../assets/images/32kb.webp')
const img4kb = require('../assets/images/4kb.png')
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 3, 5, 7]
    };
    this.btnClick = this.btnClick.bind(this)
    this.addUser = this.addUser.bind(this)
    this.getUserAndAdd = this.getUserAndAdd.bind(this)
    this.getData = this.getData.bind(this)
  }
  componentDidMount() {
    console.log('ENV============:'+process.env.NODE_ENV)
  }
  btnClick() {
    this.props.history.push('/pageA')
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
      console.error(err)
    })
  }
  render() {
    return (
      <div>
        <Test />
        <div className="img-list">
        <img src={img32kb} alt=""/>
        <img src={img4kb} alt=""/>
        </div>
        <div className="flex">
          <span>one</span>
          <span>two</span>
        </div>
        <h2>componentStateList:</h2>
        {this.state.arr.map(item => <div key={item}>列表:{item}</div>)}
        <h2>reduxUserList:</h2>
        {this.props.user.map((item, index) =><div key={index}>{item.name}</div>)}
        <button onClick={this.btnClick}>点我跳转</button>
        <br/>
        <button onClick={this.addUser}>添加用户(redux)</button>
        <br/>
        <button onClick={this.getUserAndAdd}>异步添加用户(redux)</button>
        <br/>
        <button onClick={this.getData}>请求数据(测试超时)</button>
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