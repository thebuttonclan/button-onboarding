

import {commitMutation, Environment} from 'react-relay';
import { TodoItem_taskData } from '../views/__generated__/TodoItem_taskData.graphql';


const graphql = require('babel-plugin-relay/macro');


const mutation = graphql`
    mutation DeleteTaskMutation($input: DeleteTaskByRowIdInput!){
        deleteTaskByRowId(input: $input) {
            task{
                ...TodoItem_taskData
            }            
        }
    }
`;

function commit(env: Environment, task: TodoItem_taskData){
    return commitMutation(
        env,
        {
            mutation,
            variables:{
                input:{
                    rowId: task.rowId
                }
            }
        }
    )
};

export default {commit};