import React from 'react';
import {createFragmentContainer} from 'react-relay';
import { TodoItem_taskData } from './__generated__/TodoItem_taskData.graphql';
import Checkbox from 'muicss/lib/react/checkbox';
import Button from 'muicss/lib/react/button';
import ChangeTaskCompletedStatusMutation from '../graphql/ChangeTaskCompletedStatusMutation'
import {IRelayProps} from '../IRelayProps';

const graphql = require('babel-plugin-relay/macro');

interface IProps extends IRelayProps {
    taskData : TodoItem_taskData
}

class TodoItem extends React.Component<IProps> {
    
    onCheckboxChanged(evt){
        console.warn(this.props);

        const complete = evt.target.checked;

        ChangeTaskCompletedStatusMutation.commit(
            this.props.relay.environment,
            complete,
            this.props.taskData
        )
    }
    
    render(){

        const model = this.props.taskData;

        return (
            <tr>
                <td>
                    <Checkbox 
                        defaultChecked={model.completed} 
                        label={model.task} 
                        onChange={this.onCheckboxChanged.bind(this)}
                    />
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