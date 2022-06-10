import Link from 'next/link';

export const Footer: React.FC = () => (
  <footer>
    <div id="bottomFooter" className="clearfix">
      <div id="footerL">
        <p>Jun Yoshida Portfolio Website.</p>
        <p>
          <a href="https://www.facebook.com/jun.yoshida.775">Facebook</a>
        </p>
        <p>
          <a href="https://twitter.com/Ys_Jn">Twitter</a>
        </p>
      </div>
      <div id="footerR">
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/works">WORKS</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
    </div>

    <div id="footer">© 2013 Jun Yoshida All Rights Reserved.</div>
  </footer>
);
