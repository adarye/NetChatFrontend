import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

 const Login = () => {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as = "h1" icon color="violet" textAlign="center">
                  <Icon name="code branch" color="violet"></Icon>
                    Login to NetChat
                 </Header>
                    <Form size="large">
                        <Segment>
                            <Form.Input fluid icon="mail" iconPosition="left" placeholder="Email Address" name="email" type="email" />
                            <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" name="password" type="password" />
                            <Button color="violet" fluid size="large">
                                Submit
                            </Button>

                        </Segment>
                    </Form>
                    <Message>
                        Don't have an account? <Link to="/register">Register</Link>
                        </Message>

      </Grid.Column>
      </Grid>
    )
}

export default Login;
