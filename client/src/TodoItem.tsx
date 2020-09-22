import { isTemplateElement } from '@babel/types';
import React from 'react';
import {createFragmentContainer, Environment} from 'react-relay';
import { TodoItem_taskData } from './__generated__/TodoItem_taskData.graphql';
const graphql = require('babel-plugin-relay/macro');

export interface Props {
    taskId: string,
    taskData : TodoItem_taskData
}

export class TodoItem extends React.Component<Props> {

    render(){

        const model = this.props.taskData;

        return (
            <div>
                <p>To Do : {model.task}</p>
            </div>
        );
    }
}

export default createFragmentContainer(TodoItem, {
    taskData: graphql`
        fragment TodoItem_taskData on Task {
            id,
            rowId,
            task,
            completed,
            dateCreated,
            dateUpdated
        }
    `
});