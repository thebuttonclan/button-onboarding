import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { TodoList_taskListData } from './__generated__/TodoList_taskListData.graphql'
import TodoItem from './TodoItem'
import Panel from 'muicss/lib/react/panel';
import Row from 'muicss/lib/react/row';

const graphql = require('babel-plugin-relay/macro');

interface Props  {
    taskListData : TodoList_taskListData
}

class TodoList extends React.Component<Props>{

    render(){       

        const taskList = this.props.taskListData.allTasks.nodes ; 

        return(
            <Panel>                
                <div className="mui--text-headline">Things to do:</div>
                <Row>
                    <table>
                        <tbody>
                            { 
                                taskList.map(task => 
                                    <TodoItem 
                                        key={task.rowId}
                                        taskData={task}
                                    />
                                )
                            }
                        </tbody>
                    </table>
                </Row>
            </Panel>
        );

    }
}


export default createFragmentContainer(TodoList, {
    taskListData : graphql`
        fragment TodoList_taskListData on Query {
            allTasks {                
                nodes {
                    rowId,
                    ...TodoItem_taskData
                }                
            }
        }
    `
});