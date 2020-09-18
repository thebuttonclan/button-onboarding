import { isTemplateElement } from '@babel/types';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { ItemModel } from './model/ItemModel'
import { TodoItem } from './TodoItem'

const graphql = require('babel-plugin-relay/macro');

class TodoListModel {
    list : ItemModel[]
}

class TodoList extends React.Component<TodoListModel>{

    render(){
        const itemsList = this.props.list;

        return(
            <div>
                <h3>Things to do:</h3>
                <div>
                    {itemsList.map(item => <TodoItem {...item} />)}
                </div>
            </div>
        );

    }
}


export default createFragmentContainer(TodoList, {
    list : graphql`
        fragment TodoList_list on Query {
            allTasks {
                nodes{
                    ...TodoItem_item
                }
            }
        }
    `
});