import type { NextPage } from 'next';
import Image from 'next/image';
import { WorksContents } from '@/modules/WorksContents';
import { WORKS } from 'lib/constants';

const works_tabs: NextPage = () => {
  const data = WORKS.find((work) => work.id === 'tabs');
  if (!data) {
    return null;
  }
  return (
    <WorksContents id="tabs">
      <div style={{ maxWidth: 600 }}>
        {data.gallery?.[1] && (
          <figure>
            <figcaption>ホバーでタブをプレビュー / Hover to quickly preview tabs.</figcaption>
            <Image
              src={data.gallery[1].src}
              width="480"
              height="270"
              layout="responsive"
              alt={data.gallery[1].alt}
            />
          </figure>
        )}
        {data.gallery?.[2] && (
          <figure>
            <figcaption>複数のウィンドウを管理 / Multiple window support.</figcaption>
            <Image
              src={data.gallery[2].src}
              width="480"
              height="270"
              layout="responsive"
              alt={data.gallery[2].alt}
            />
          </figure>
        )}
        {data.gallery?.[3] && (
          <figure>
            <figcaption>
              グリッド(またはカラム)ビューでウィンドウを俯瞰 / Grid (or column) layout for multiple
              windows overview.
            </figcaption>
            <Image
              src={data.gallery[3].src}
              width="480"
              height="270"
              layout="responsive"
              alt={data.gallery[3].alt}
            />
          </figure>
        )}
      </div>
    </WorksContents>
  );
};

export default works_tabs;
