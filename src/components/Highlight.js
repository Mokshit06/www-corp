import { Text } from '@codeday/topo/Atom';
import { useColorMode } from '@codeday/topo/Theme';

export default function Highlight(props) {
  const { colorMode } = useColorMode();
  return <Text
    as="span"
    mb={0}
    fontWeight="bold"
    p={1}
    backgroundColor={colorMode === 'light' ? 'yellow.100' : 'yellow.800'}
    {...props}
  />
}
