import React, { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react'

const InitializeContainer: React.FC = ({ children }) => {
  const { setColorMode } = useColorMode()
  useEffect(() => {
    if (setColorMode) {
      setColorMode('dark')
    }
  }, [setColorMode])

  return <>{children}</>
}

export default InitializeContainer
