import React from 'react';
import { subscribe } from 'horizon-react';

import TodoItem from './TodoItem';

import styles from './styles';

import { Pagination,Button } from 'antd';

const mapDataToProps = {
  todos: (hz, props) => hz('todos').limit(props.limit)
};

const TodoList = (props) => {
    let {todos,pageNum,orderType} = props
    let {length:total} = props.todos
    const length = total>3?3:total
    if(Math.abs(orderType) === 1){
        todos = todos.sort((a,b)=>(a.create_time - b.create_time)*orderType>0)
    }else if(Math.abs(orderType) === 2){
        todos = todos.sort((a,b)=>{
            if(orderType === 2){
                return a.text > b.text
            }
            return a.text < b.text
        })
    }

    const _todos = todos.slice(3*(pageNum-1),3*pageNum)

    if(total&&pageNum>Math.ceil(total/3)){
        props.setPageNum(pageNum-1)
    }

    return <section>
        <ul className={styles.list} style={{ height: length * 49 }}>
          {_todos.map(
            todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                horizon={props.horizon}
              />
            )
          )}
        </ul>
        <div
            style={{
                textAlign:'center',
                display:(total?'':'none')
            }}
            >
                <Pagination simple
                     pageSize = {3}
                     onChange={(num)=>{
                         props.setPageNum(num)
                     }}
                     current={pageNum} total={total} />
            </div>

    </section>
}

export default subscribe({
  mapDataToProps
})(TodoList);
