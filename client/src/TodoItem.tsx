import { isTemplateElement } from '@babel/types';
import React from 'react';
import {createFragmentContainer, Environment} from 'react-relay';
import { ItemModel } from './model/ItemModel';
const graphql = require('babel-plugin-relay/macro');


export class TodoItem extends React.Component<ItemModel> {

    render(){

        const task = this.props;

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
            task,
            completed
        }
    `
});