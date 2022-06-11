import type { NextPage } from 'next';
import Head from 'next/head';

import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Nav } from '@/components/Nav/Nav';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jy. About</title>
      </Head>

      <Nav />
      <div className="Wrapper">
        <div className="Main">
          <Back />
          <div id="profile">
            <p>
              吉田 淳
              <br />
              <br />
              1991年 9月7日 生まれ
              <br />
              <br />
              2011年 4月 - 2015年 3月 | 多摩美術大学 情報デザイン学科 情報デザインコース 入学
              <br />
              2013年 9月 - 2014年 1月 | スウェーデン マルメ大学 大学院
              インタラクションデザインコース 留学
              <br />
              <br />
              <br />
              Jun Yoshida
              <br />
              <br />
              1991 Sep. 7 Birth.
              <br />
              <br />
              2011 Apr. - 2015 Mar.| Tama Art University Interaction Design Dept.
              <br />
              2013 Sep. - 2014 Jan. | Malmö Högskola, IxD Masters Course, Sweden. Exchange Study.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
