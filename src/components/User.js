import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const User = ({ User }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardBody>
            <Heading size="md">{User.username}</Heading>

            <Text py="2">{User.name}</Text>
          </CardBody>

          <CardFooter>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => navigate(`/details/${User.id}`)}
            >
              See details{' '}
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default User;
