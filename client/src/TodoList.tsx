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

        const allItems = this.props.taskListData.allTasks.nodes.map(node => {
            return (
                <TodoItem taskId={node.id} taskData={node} />
            )
        });

        return(
            <div>
                <h3>Things to do:</h3>
                <div>
                    { 
                        allItems
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
                    id,
                    data {
                        ...TodoItem_taskData
                    }
                }                
            }
        }
    `
});