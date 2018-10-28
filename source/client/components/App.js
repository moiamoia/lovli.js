import React from 'react';

import Logo from './Logo';
import TodoList from './todos/TodoList';
import AddTodoButton from './todos/AddTodoButton';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import styles from 'styles/app';
import { Pagination,Button } from 'antd';

const App = () => (
  <div>
    <div className={styles.container}>
      <Logo />
      <p className={styles.tCenter}>
        <b>Welcome.</b>
        <br />
        You're connected to <a href="https://github.com/rethinkdb/horizon" target="_blank">horizon</a>.
      </p>
      <TodoList limit={100} />
      <AddTodoButton />
      <div className={styles.footer}>
        ToDos are deleted automatically every 10 minutes.
        <br /><br />
        built with <i className="fa fa-heart" /> by <a href="https://github.com/flipace" target="_blank">@flipace</a>
      </div>
    </div>
    <div className={styles.social}>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=flipace&repo=lovli.js&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="85px"
        height="20px"
      />
      <iframe
        src="https://ghbtns.com/github-btn.html?user=flipace&repo=lovli.js&type=fork&count=true"
        frameBorder="0"
        scrolling="0"
        width="85px"
        height="20px"
      />
    </div>
  </div>
);

class App2 extends React.Component{

    constructor(){
        super()
        this.state = {
            pageNum:1,
            orderType:0,//0 无排序,1按时间正序,-1按时间倒序     2按名称正序 -2按时间倒序
        }
    }

    render(){
        const {pageNum,orderType} = this.state
        return <div>
          <div className={styles.container}>
            <Logo />
            <p className={styles.tCenter}>
              <b>Welcome.</b>
              <br />
              You're connected to <a href="https://github.com/rethinkdb/horizon" target="_blank">horizon</a>.
            </p>
            <div style={{
                textAlign:'center',
            }}>
                <Button
                    icon={orderType===1?'up':(orderType===-1?'down':'')}
                    type = {Math.abs(orderType) === 1 ?'primary':''}
                    onClick = {e=>{
                        this.setState({
                            orderType:Math.abs(orderType) === 1 ? -orderType :1
                        })
                    }}
                    >按时间排序</Button>
                <Button
                    icon={orderType===2?'up':(orderType===-2?'down':'')}
                    type = {Math.abs(orderType) === 2 ?'primary':''}
                    onClick = {e=>{
                        this.setState({
                            orderType:Math.abs(orderType) === 2 ? -orderType :2
                        })
                    }}
                    >按名字排序</Button>
            </div>
            <TodoList limit={100}
                orderType={orderType}
                 pageNum={pageNum} setPageNum={pageNum=>{
                this.setState({
                    pageNum
                })
            }} />
            <AddTodoButton />
            <div className={styles.footer}>
              ToDos are deleted automatically every 10 minutes.
              <br /><br />
              built with <i className="fa fa-heart" /> by <a href="https://github.com/flipace" target="_blank">@flipace</a>
            </div>
          </div>
          <div className={styles.social}>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=flipace&repo=lovli.js&type=star&count=true"
              frameBorder="0"
              scrolling="0"
              width="85px"
              height="20px"
            />
            <iframe
              src="https://ghbtns.com/github-btn.html?user=flipace&repo=lovli.js&type=fork&count=true"
              frameBorder="0"
              scrolling="0"
              width="85px"
              height="20px"
            />
          </div>
        </div>
    }
}

export default App2
