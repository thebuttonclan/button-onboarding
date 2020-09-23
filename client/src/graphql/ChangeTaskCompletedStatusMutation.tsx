
import {commitMutation} from 'react-relay';

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


function commit(env, isComplete, task){
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