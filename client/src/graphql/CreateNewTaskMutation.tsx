
import {commitMutation, Environment} from 'react-relay';
import { TodoItem_taskData } from '../views/__generated__/TodoItem_taskData.graphql';


const graphql = require('babel-plugin-relay/macro');


const mutation = graphql`
    mutation CreateNewTaskMutation($input: CreateTaskInput!){
        createTask(input: $input){
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
                    task: {
                        task: task.task,
                        completed: task.completed
                    }
                }
            }
        }
    )
};

export default {commit};