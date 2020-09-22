import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { TodoList_list } from './__generated__/TodoList_list.graphql'
import { TodoItem } from './TodoItem'

const graphql = require('babel-plugin-relay/macro');

interface Props  {
    list : TodoList_list
}

class TodoList extends React.Component<Props>{

    render(){
        const itemsList = this.props.list.allTasks.nodes;

        return(
            <div>
                <h3>Things to do:</h3>
                <div>
                    { 
                        itemsList.map(i => <TodoItem item={i} />)
                    }
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