import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session, reloadSession
}) => {
  const [username, setUsername] = useState('');

  const onSubmit = async () => {
    try {

    } catch (error) {
      console.log('onSubmit error: ', error);

    }
  }

  return (
    <Center height='100vh'>
      <Stack
        align='center'
        spacing={8}
      >
        {
          session ? (
            <>
              <Text
                fontSize='3xl'
                color='white'
              >Create username</Text>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Enter a Username"
              />
              <Button
                onClick={onSubmit}
                width='100%'
              >Save</Button>
            </>
          ) : (
            <>
              <Text fontSize='3xl' color='white'>
                Instant Messaging
              </Text>
              <Button
                onClick={() => signIn('google')}
                leftIcon={
                  <Image
                    height='20px'
                    src='/images/google-logo.png'
                  />
                }>
                Continue with Google
              </Button>
            </>
          )
        }
      </Stack>
    </Center>
  );
};

export default Auth;
