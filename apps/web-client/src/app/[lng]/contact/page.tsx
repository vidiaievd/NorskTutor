import Link from 'next/link'
import { FC } from 'react';

interface PageProps {
  params: {
    lng: string;
  };
}

const Page: FC<PageProps> = ({ params: { lng } }) => {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
    </>
  )
}

export default Page;
