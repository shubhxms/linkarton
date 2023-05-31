import { signIn } from 'next-auth/react';
import { Text, Paper, Group, PaperProps, Button } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';

export function Auth(props: PaperProps) {
  return (
    <Paper radius="md" p="xl" withBorder {...props} styles={{ margin: 'auto' }}>
      <Text size="lg" weight={500}>
        Welcome to linKarton
      </Text>
      <Group mb="md" mt="md">
        <Button
          onClick={() => {
            signIn();
          }}
        >
          sign in with Google <IconBrandGoogle />
        </Button>
      </Group>
    </Paper>
  );
}
