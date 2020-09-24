import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { TodoList_taskListData } from './__generated__/TodoList_taskListData.graphql'
import TodoItem from './TodoItem'
import Panel from 'muicss/lib/react/panel';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col'
import CreateTask from './CreateTask';
import { IRelayProps } from '../IRelayProps';

const graphql = require('babel-plugin-relay/macro');

interface IProps extends IRelayProps  {
    taskListData : TodoList_taskListData
}

class TodoList extends React.Component<IProps>{

    render(){       

        const taskList = this.props.taskListData.allTasks.nodes ; 

        return(
            <Panel>                
                <div className="mui--text-headline">Things to do:</div>
                <Row>
                    <Col className="mui--text-center">
                        <table style={{margin: "0 auto"}}>
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
                    </Col>                    
                </Row>
                <Row>
                    <Col md="8" md-offset="2">
                        <CreateTask></CreateTask>
                    </Col>
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