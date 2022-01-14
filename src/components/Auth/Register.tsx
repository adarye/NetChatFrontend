import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';

 const Register = () => {
    return (
        <Grid textAlign='center' verticalAlign='middle' className='app'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h1" icon color="orange" textAlign='center'>
                    <Icon name="puzzle piece" color="orange"></Icon>
                    Register for NetChat
                </Header>
                <Form size='large'>
                <Segment>
                    <Form.Input fluid icon='user' name="usermane" iconPosition='left' placeholder='Username' type="text" />
                    <Form.Input fluid icon='mail' name="email" iconPosition='left' placeholder='Email Address' type="email" />
                    <Form.Input fluid icon='lock' name="password" iconPosition='left' placeholder='Password' type="password" />
                    <Form.Input fluid icon='repeat' name="passwordConfirmation" iconPosition='left' placeholder='Confirm Password' type="password" />
                    <Button color='orange' fluid size='large'>
                        Submit
                    </Button>
                    
                </Segment>

                </Form>
                <Message>
                    Already have an account? <Link to='/login'>Login</Link>
                </Message>
                </Grid.Column>
        </Grid>
    )
}

export default Register;
