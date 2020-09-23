import React from 'react';
import TodoListView from './views/TodoListView';

import 'muicss/dist/css/mui.min.css'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'

function App() {
    return (
      <div className="App">
        <main>
          <Container fluid={true} className="mui--text-center mainContainer">
            <Row>
              <TodoListView></TodoListView>
            </Row>
          </Container>
        </main>
      </div>
    );
}

export default App;
