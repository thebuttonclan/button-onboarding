import React from 'react';
import {createFragmentContainer} from 'react-relay';
import { TodoItem_taskData } from './__generated__/TodoItem_taskData.graphql';
import Checkbox from "muicss/lib/react/checkbox"

const graphql = require('babel-plugin-relay/macro');

interface Props {
    taskData : TodoItem_taskData
}

class TodoItem extends React.Component<Props> {
    render(){

        const model = this.props.taskData;

        return (
            <Checkbox defaultChecked={model.completed} label={model.task}>                    
            </Checkbox>            
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