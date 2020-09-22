import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { TodoList_taskListData } from './__generated__/TodoList_taskListData.graphql'
import { TodoItem } from './TodoItem'

const graphql = require('babel-plugin-relay/macro');

interface Props  {
    taskListData : TodoList_taskListData
}

class TodoList extends React.Component<Props>{

    render(){       

        const allTasks = this.props.taskListData.allTasks.nodes ; 

        return(
            <div>
                <h3>Things to do:</h3>
                <div>
                    { 
                        allTasks.map(task => 
                            <TodoItem taskData={task}></TodoItem>                            
                        )
                    }
                </div>
            </div>
        );

    }
}


export default createFragmentContainer(TodoList, {
    taskListData : graphql`
        fragment TodoList_taskListData on Query {
            allTasks {                
                nodes {
                    ...TodoItem_taskData
                }                
            }
        }
    `
});