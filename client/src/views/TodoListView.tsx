import React from 'react';
import { QueryRenderer } from 'react-relay';
import TodoList from './TodoList';
import environment from '../RelayEnvironment';
import { TodoListViewQuery } from './__generated__/TodoListViewQuery.graphql'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import CreateTask from './CreateTask';

const graphql = require('babel-plugin-relay/macro');


class TodoListView extends React.Component{

    render() {
        return(
            <QueryRenderer<TodoListViewQuery>
            environment={environment}
            query={
                graphql`
                query TodoListViewQuery {
                    query{
                        ...TodoList_taskListData
                    }
                }
                `
            }
            variables={{}} 
            render={({error, props}) => {
              if(error) {
                return (
                  <p>{JSON.stringify(error)}</p>
                );
              }
              if(!props || props == null){
                return (
                  <div>Loading...</div>
                );
              }

              return(
                  <Row>
                    <Col md="4" md-offset="4">
                      <TodoList taskListData={props.query} />
                    </Col>
                  </Row>
              );
            }}
          />
        );
    }
}

export default TodoListView;