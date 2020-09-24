import React from 'react';

import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';


class CreateTask extends React.Component{

    addTask(evt) {
        
    }

    render() {
        return(
            <Row>
                <Col md="9">
                    <Input placeholder="New item to do"></Input>
                </Col>
                <Col md="3">
                    <Button variant="raised" color="primary" onClick={this.addTask} >Add</Button>
                </Col>
            </Row>
        );
    }

}



export default CreateTask;