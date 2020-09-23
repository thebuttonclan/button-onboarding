import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from './RelayEnvironment';
import TodoList from './TodoList';
import {AppQuery} from './__generated__/AppQuery.graphql'

import 'muicss/dist/css/mui.min.css'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'


function App() {
    return (
      <div className="App">
        <main>
          <QueryRenderer<AppQuery>
            environment={environment}
            query={ graphql`
              query AppQuery {
                query {
                  ...TodoList_taskListData
                }
              }
            `}

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
                <Container fluid={true} className="mui--text-center mainContainer">
                  <Row>
                    <Col md="4" md-offset="4">
                      <TodoList taskListData={props.query} />
                    </Col>
                  </Row>
                </Container>
              );
            }}
          />
        </main>
      </div>
    );
}

export default App;
