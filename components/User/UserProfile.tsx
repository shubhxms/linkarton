import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { createStyles, Avatar, Text, Group, TextInput, ActionIcon, Button, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCopy, IconAt, IconLogout } from '@tabler/icons-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserProfileProps {
  avatar: string;
  name: string;
}

interface FormValues {
  username: string;
}

function getUsername(): Promise<FormValues> {
  // TODO: write fn to fetch username from supabase
  return new Promise((resolve) => {
    setTimeout(() => resolve({ username: 'shubhxms' }), 2000);
  });
}

const UserProfile = ({ avatar, name }: UserProfileProps) => {
  const { classes } = useStyles();
  const form = useForm<FormValues>({ initialValues: { username: '' } });

  useEffect(() => {
    getUsername().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <Container mx="auto">
      <Group noWrap mt="xl" mb="xl">
        <Group spacing={30} position="center">
          <Button.Group orientation="vertical">
            <ColorSchemeToggle />
            <ActionIcon
              onClick={() => signOut()}
              size="xl"
              mt={5}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
              })}
            >
              <IconLogout />
            </ActionIcon>
          </Button.Group>
          <Avatar src={avatar} size={94} radius="md" />
          <div>
            <Text fz="lg" fw={500} className={classes.name}>
              {name}
            </Text>

            <Group noWrap spacing={5} mt={3}>
              <IconAt stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                <TextInput {...form.getInputProps('username')} size="sm" />
              </Text>
              <IconCopy />
            </Group>
          </div>
        </Group>
      </Group>
    </Container>
  );
};

export default UserProfile;
