import type { NextPage } from 'next';
import { WorksContents } from '@/modules/WorksContents';

const works_blocks: NextPage = () => (
  <WorksContents id="blks">
    <div className="Video">
      <iframe
        src="//player.vimeo.com/video/96424638?portrait=0&title=0&badge=0&byline=0"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </WorksContents>
);

export default works_blocks;
