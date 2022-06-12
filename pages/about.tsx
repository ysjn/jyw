import type { NextPage } from 'next';
import Head from 'next/head';

import styles from './about.module.scss';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Nav } from '@/components/Nav/Nav';

const About: NextPage = () => {
  return (
    <div className={styles.About}>
      <Head>
        <title>Jy. About</title>
      </Head>
      <Nav />
      <div className="Wrapper">
        <div className="Main">
          <Back />
          <div className={styles.About__profile}>
            <div className="util-MarginBottom--32">
              <p className="util-MarginBottom--16">
                吉田 淳
                <br />
                1991年 9月7日 生まれ
              </p>
              <table>
                <tr>
                  <td>2011年 4月 - 2015年 3月</td>
                  <td> | </td>
                  <td>多摩美術大学 情報デザイン学科 情報デザインコース 入学</td>
                </tr>
                <tr>
                  <td>2013年 9月 - 2014年 1月</td>
                  <td> | </td>
                  <td>スウェーデン マルメ大学 大学院 インタラクションデザインコース 留学</td>
                </tr>
                <tr>
                  <td>2015年 4月 - 現在</td>
                  <td> | </td>
                  <td>ヤフー株式会社 検索統括本部</td>
                </tr>
              </table>
            </div>
            <div className="util-MarginBottom--32">
              <p className="util-MarginBottom--16">
                Jun Yoshida
                <br />
                1991 Sep. 7 Birth.
              </p>
              <table>
                <tr>
                  <td>2011 Apr. - 2015 Mar. </td>
                  <td> | </td>
                  <td>Tama Art University Interaction Design Dept.</td>
                </tr>
                <tr>
                  <td>2013 Sep. - 2014 Jan.</td>
                  <td> | </td>
                  <td>Malmö Högskola, IxD Masters Course, Sweden. Exchange Study.</td>
                </tr>
                <tr>
                  <td>2015 Apr. - Present</td>
                  <td> | </td>
                  <td>Yahoo JAPAN Corporation Web Search Department</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
