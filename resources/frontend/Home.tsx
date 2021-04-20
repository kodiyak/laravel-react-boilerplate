import { Button } from '@chakra-ui/react'
import React from 'react'
import App from '../app/App'
import Modal from './components/Ux/Modal/index'
import { useDisclosure } from './hooks/useDisclosure'

const Home: React.FC = () => {
  const { onOpen } = useDisclosure('Modal.Test')

  return (
    <div>
      Home muda
      <Button onClick={() => onOpen({ item: 'obooaaaa' })}>Open</Button>
    </div>
  )
}

export default Home
