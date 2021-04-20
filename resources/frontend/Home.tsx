import { Button } from '@chakra-ui/react'
import React from 'react'
import App from '../app/App'
import Modal from './components/Ux/Modal/index'
import { useDisclosure } from './hooks/useDisclosure'
import ContainerScreen from './components/Utils/ContainerScreen'
import Col from './components/Utils/Col'
import Title from './components/Ux/Page/Title'

const Home: React.FC = () => {
  const { onOpen } = useDisclosure('Modal.Test')

  return (
    <ContainerScreen>
      <Title value="Home Page" />
      <Col h={250} bg="gray.700"></Col>
    </ContainerScreen>
  )
}

export default Home
