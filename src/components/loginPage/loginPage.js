import s from "./loginPage.module.css";
import VkIcon from "../../images/vk.svg";
export default function LoginPage() {
  return (
    <>
      <div className={s.loginPageContainer}>
        <div>
          <h1>Profile</h1>
          <nav>
            <ul>
              <li>
                <a href="">Registration</a>
              </li>
              <li>
                <a href="./portfolio.html">Sign in</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* options to sign-up */}
        <div className={s.signContainer}>
          <span>You can sign in with social</span>
          <ul className={s.links}>
            <li>
              <a className={s.linkSocial} href="https://vk.com/">
                <svg
                  className={s.linkIcon}
                  viewBox="0 0 24 24"
                  fill="#627DA1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8002 7.74C20.9302 7.32 20.8002 7 20.1802 7H18.1602C17.6402 7 17.4102 7.27 17.2802 7.57C17.2802 7.57 16.2502 10.08 14.7902 11.72C14.3102 12.19 14.1002 12.34 13.8402 12.34C13.7102 12.34 13.5002 12.19 13.5002 11.76V7.74C13.5002 7.23 13.3802 7 12.9502 7H9.7602C9.4402 7 9.2502 7.24 9.2502 7.47C9.2502 7.95 10.0002 8.07 10.0502 9.44V12.42C10.0502 13.08 9.9302 13.2 9.6802 13.2C9.0002 13.2 7.3202 10.67 6.3302 7.79C6.1302 7.23 5.9402 7 5.4202 7H3.3902C2.8202 7 2.7002 7.27 2.7002 7.57C2.7002 8.11 3.3902 10.77 5.9002 14.29C7.5702 16.7 9.9302 18 12.0802 18C13.3702 18 13.5302 17.71 13.5302 17.21V15.39C13.5302 14.82 13.6502 14.7 14.0602 14.7C14.3602 14.7 14.8702 14.85 16.0702 16C17.4502 17.38 17.6702 18 18.4502 18H20.4702C21.0502 18 21.3402 17.71 21.1802 17.14C21.0002 16.57 20.3402 15.74 19.4702 14.76C19.0002 14.21 18.2902 13.61 18.0702 13.3C17.7702 12.92 17.8602 12.75 18.0702 12.4C18.0702 12.4 20.5402 8.93 20.8002 7.74Z"
                    fill="#627DA1"
                  />
                </svg>
                {/* <svg className={s.linkIcon}>
                  <use href={VkIcon}></use>
                </svg> */}
              </a>
            </li>
            <li>
              <a className={s.linkSocial} href="https://www.facebook.com/">
                <svg
                  className={s.linkIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4V7.2H14.4C13.848 7.2 13.6 7.848 13.6 8.4V10.4H16V13.6H13.6V20H10.4V13.6H8V10.4H10.4V7.2C10.4 6.35131 10.7371 5.53737 11.3373 4.93726C11.9374 4.33714 12.7513 4 13.6 4H16Z"
                    fill="#4B629E"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className={s.linkSocial} href="https://www.google.com">
                <svg
                  className={s.linkIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.54632 13.6683L6.9894 15.7474L4.95387 15.7905C4.34554 14.6621 4.00049 13.3712 4.00049 11.9993C4.00049 10.6727 4.3231 9.42177 4.89496 8.32025H4.8954L6.70759 8.6525L7.50144 10.4538C7.33529 10.9382 7.24473 11.4582 7.24473 11.9993C7.2448 12.5866 7.35117 13.1492 7.54632 13.6683Z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M19.8604 10.5052C19.9523 10.9891 20.0002 11.4889 20.0002 11.9997C20.0002 12.5724 19.9399 13.1311 19.8252 13.67C19.4358 15.5038 18.4182 17.1051 17.0086 18.2383L17.0082 18.2378L14.7256 18.1214L14.4026 16.1047C15.3379 15.5561 16.0689 14.6977 16.454 13.67H12.1763V10.5052H16.5164H19.8604Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M17.0077 18.2383L17.0082 18.2387C15.6373 19.3407 13.8957 20 12 20C8.95349 20 6.30479 18.2972 4.95361 15.7913L7.54607 13.6692C8.22164 15.4722 9.96093 16.7557 12 16.7557C12.8764 16.7557 13.6975 16.5188 14.4021 16.1052L17.0077 18.2383Z"
                    fill="#28B446"
                  />
                  <path
                    d="M17.1068 5.84172L14.5152 7.96344C13.786 7.50763 12.924 7.24433 12.0005 7.24433C9.91533 7.24433 8.14351 8.58671 7.50178 10.4544L4.8957 8.32081H4.89526C6.22666 5.75382 8.90877 4 12.0005 4C13.9416 4 15.7213 4.69143 17.1068 5.84172Z"
                    fill="#F14336"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <form className={s.formContainer}>
          <label>
            <input placeholder="Your name"></input>
          </label>
          <label>
            <input placeholder="E-mail"></input>
          </label>
          <label>
            <input placeholder="Phone"></input>
          </label>
          <label className={s.checkBoxContainer}>
            <input className={s.checkbox} type="checkbox" value="check" />
            <span className={s.checkboxIcon}></span>I accept the terms of the
            offer of{" "}
            <a className={s.privacy} href="">
              the privacy policy
            </a>
          </label>
        </form>
      </div>
    </>
  );
}
