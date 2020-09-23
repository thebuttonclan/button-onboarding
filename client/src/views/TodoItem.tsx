import React from 'react';
import {createFragmentContainer} from 'react-relay';
import { TodoItem_taskData } from './__generated__/TodoItem_taskData.graphql';
import Checkbox from 'muicss/lib/react/checkbox';
import Button from 'muicss/lib/react/button';

const graphql = require('babel-plugin-relay/macro');

interface Props {
    taskData : TodoItem_taskData
}

class TodoItem extends React.Component<Props> {
    render(){

        const model = this.props.taskData;

        return (
            <tr>
                <td>
                    <Checkbox defaultChecked={model.completed} label={model.task} />
                </td>
                <td>
                    <Button>Remove</Button>
                </td>  
            </tr>
        );
    }
}

export default createFragmentContainer(TodoItem, {
    taskData: graphql`
        fragment TodoItem_taskData on Task {
            id
            rowId
            task
            completed
            dateCreated
            dateUpdated
        }
    `
});