import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { WorksContents } from '@/modules/WorksContents';
import { WORKS } from 'lib/constants';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = WORKS.filter((work) => work.id).map((work) => ({ params: { id: work.id } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const id = context.params?.id;
  const data = WORKS.find((work) => work.id === id);

  return {
    props: { data },
  };
};

interface WorksProps {
  data: typeof WORKS extends (infer U)[] ? U : never;
}
const Works: NextPage<WorksProps> = (props) => {
  return <WorksContents data={props.data} />;
};

export default Works;
