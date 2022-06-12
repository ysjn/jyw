import type { NextPage } from 'next';
import Image from 'next/image';
import { WorksContents } from '@/modules/WorksContents';

const works_boldit: NextPage = () => (
  <WorksContents id="boldit">
    <Image src="/works/boldit/bold-it.gif" width="839" height="654" alt="" />
  </WorksContents>
);

export default works_boldit;
