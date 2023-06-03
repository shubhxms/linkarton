import { useSession } from 'next-auth/react';
import UserProfile from '../components/User/UserProfile';
import { Auth } from '../components/Auth';
import Karton from '../components/karton/Karton';
// import TextEditor from '../components/Form/TextEditor';

// TODO fetch data from supabase in useEffect and set state

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
        />
        <Karton />
        {/* <TextEditor content="somwting" /> */}
      </>
    );
  }
  return <Auth />;
}
