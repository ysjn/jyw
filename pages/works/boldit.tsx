import type { NextPage } from 'next';
import Image from 'next/image';
import { WorksContents } from '@/modules/WorksContents';
import { WORKS } from 'lib/constants';

const boldit: NextPage = () => {
  const data = WORKS.find((work) => work.id === 'tabs');
  if (!data) {
    return null;
  }
  return (
    <WorksContents data={data}>
      <Image src="/works/boldit/bold-it.gif" width="839" height="654" alt="" />
    </WorksContents>
  );
};

export default boldit;
