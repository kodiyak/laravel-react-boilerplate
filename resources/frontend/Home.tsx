import { Box, Button, Checkbox, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import App from '../app/App'
import Modal from './components/Ux/Modal/index'
import { useDisclosure } from './hooks/useDisclosure'
import ContainerScreen from './components/Utils/ContainerScreen'
import Col from './components/Utils/Col'
import Title from './components/Ux/Page/Title'
import AppResume from './components/Ux/Debug/AppResume'
import { FormProvider } from './contexts/FormProvider'
import InputField from './components/Form/InputField'
import CheckOptionsInput from './components/Form/CheckOptionsInput'
import DropdownOptionsInput from './components/Form/DropdownOptionsInput'
import Row from './components/Utils/Row'
import { Text } from '@chakra-ui/layout'
import { DownIcon } from './components/Ux/Icons'
import TextareaField from './components/Form/TextareaField'

const Home: React.FC = () => {
  const { onOpen } = useDisclosure('Modal.Test')

  return (
    <ContainerScreen>
      <Title value="Home Page" />
      <Col h={250} bg="gray.700"></Col>
      <AppResume />
      <FormProvider
        onSubmit={(data) => {
          console.log('data', data)
        }}
      >
        <InputField
          name="title"
          label="Titulo"
          description="Pai ta on"
          placeholder="Salve do cachorro loca!"
        />
        <InputField name="description" label="Descrição" />
        <TextareaField
          name="long_description"
          label="Descrição Longa \o\"
          description="Max. 200 characters"
        />
        <SimpleGrid columns={4} gap={4}>
          <CheckOptionsInput
            CheckComponent={Checkbox}
            isMultiple
            name="test"
            index="id"
            label="label"
            options={[
              {
                label: 'Salve',
                id: 1,
              },
              {
                label: 'Salva',
                id: 2,
              },
            ]}
          >
            <Row p={4}>
              <Text mr="auto">Select...</Text>
              <DownIcon />
            </Row>
          </CheckOptionsInput>
          <DropdownOptionsInput
            isMultiple
            name="test"
            index="id"
            label="label"
            options={[
              {
                label: 'Salve',
                id: 1,
              },
              {
                label: 'Salva',
                id: 2,
              },
            ]}
          >
            <Row p={4}>
              <Text mr="auto">Select...</Text>
              <DownIcon />
            </Row>
          </DropdownOptionsInput>
        </SimpleGrid>
        <Button type="submit">Enviar</Button>
      </FormProvider>
    </ContainerScreen>
  )
}

export default Home
