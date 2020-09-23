
import {commitMutation, Environment} from 'react-relay';
import { TodoItem_taskData } from '../views/__generated__/TodoItem_taskData.graphql';


const graphql = require('babel-plugin-relay/macro');

const mutation = graphql`
    mutation ChangeTaskCompletedStatusMutation($input: UpdateTaskByRowIdInput!){
        updateTaskByRowId(input: $input){
            task {
                id,
                rowId,
                completed
            }
        }
    }
`


function commit(env: Environment, isComplete: boolean, task: TodoItem_taskData){
    return commitMutation(
        env,
        {
            mutation,
            variables: {
                input: {
                    rowId: task.rowId,
                    taskPatch: {
                        completed: isComplete
                    }
                }
            }
        }
    )
}

export default { commit };