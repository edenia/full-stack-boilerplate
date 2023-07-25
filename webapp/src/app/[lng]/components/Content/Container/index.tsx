import Box from '@mui/material/Box'

type ContainerProps = {
  children: JSX.Element
  onclick(): void
}

const Container: React.FC<ContainerProps> = ({
  children,
  onclick
}: ContainerProps) => (
  <Box component='main' onClick={onclick} minHeight={'50vh'}>
    {children}
  </Box>
)

export default Container
