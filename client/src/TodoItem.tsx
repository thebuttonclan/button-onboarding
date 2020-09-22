import { isTemplateElement } from '@babel/types';
import React from 'react';
import {createFragmentContainer, Environment} from 'react-relay';
import { TodoItem_item } from './__generated__/TodoItem_item.graphql';
const graphql = require('babel-plugin-relay/macro');

interface Props {
    task : TodoItem_item
}

export class TodoItem extends React.Component<Props> {

    render(){

        const task = this.props.task;

        return (
            <div>
                <p>To Do : {task.task}</p>
            </div>
        );
    }
}

export default createFragmentContainer(TodoItem, {
    item: graphql`
        fragment TodoItem_item on Task {
            id,
            rowId,
            task,
            completed,
            dateCreated,
            dateUpdated
        }
    `
});