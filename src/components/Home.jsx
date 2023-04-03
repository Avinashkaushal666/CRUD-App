import React from 'react'
import pin from '../Assets/landing.jpg'
import { Box, Button, Typography, styled } from '@mui/material';

const Container = styled(Box)`
  & > img {
    height: 100vh;
    width: 100%;
    z-index: 0;
  }
`
const Panel = styled(Box)`
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 10;
  position: absolute;
`

const Content = styled(Typography)`
    color: #fbfcfd;
    position: absolute;
    top: 40%;
    left: 8%;
    transform: translateY(-50%);
    z-index: 2;
`

const Text = styled(Typography)`
    font-size: 80px;
    margin: 10px 0 30px;
    line-height: 80px;
`

const ButtonPanel = styled(Box)`
  text-align: end;
`
export const Home = () => {

  return (
    <>
      <Container>
        <Panel>
        <Content>
          <Typography variant="h4">Lorem ipsum!</Typography>
          <Text variant="h1">Lorem<br /> ipsum dolor sit</Text>
          <ButtonPanel>
          <Button variant="contained" size="large" style={{marginRight: 10, background: '#0726f0'}} href="all" >All Users</Button>
            <Button variant="contained" style={{background: '#f50f0f'}} size="large" color="secondary" href="add">Add user</Button>
          </ButtonPanel>
        </Content>
        </Panel>
        <img src={pin} alt="landing"/>
      </Container>
    </>
  )
}
export default Home;