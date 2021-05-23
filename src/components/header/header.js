import { ReactComponent as Avatar } from "../../images/avatar.svg";
import s from "./header.module.css";

export default function Header() {
  return (
    <div className={s.headerSection}>
      <div className={s.headerContainer}>
        <div className={s.logoContainer}>
          <a href="#">
            <h1 className={s.logo}>Logo</h1>
          </a>
        </div>
        <div className={s.headerSectionContainer}>
          <div className={s.headerLinksContainer}>
            <ul className={s.headerLinkList}>
              <li>
                <a className={s.headerLinkItem} href="">
                  Free test
                </a>
              </li>
              <li>
                <a className={s.headerLinkItemActive} href="">
                  Catalog
                </a>
              </li>
              <li>
                <a className={s.headerLinkItem} href="">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <a className={s.userContainer} href="#">
            <span className={s.userName}>Michael Browk</span>
            <Avatar className={s.avatar} />
          </a>
        </div>
      </div>
    </div>
  );
}
