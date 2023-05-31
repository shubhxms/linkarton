import { useSession } from 'next-auth/react';
import UserProfile from '../components/User/UserProfile';
import { Auth } from '../components/Auth';

export default function HomePage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <UserProfile
          {...{
            avatar: session?.user?.image!,
            title: 'Software engineer',
            name: session?.user?.name!,
            username: session?.user?.email!,
          }}
        />{' '}
      </>
    );
  }
  return (
    <Auth />
  );
}
