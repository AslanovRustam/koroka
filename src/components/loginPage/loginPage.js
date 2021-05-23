import { NavLink } from "react-router-dom";
import { ReactComponent as VKIcon } from "../../images/vk.svg";
import { ReactComponent as FacebookIcon } from "../../images/FB.svg";
import { ReactComponent as GoogleIcon } from "../../images/google.svg";
import s from "./loginPage.module.css";

export default function LoginPage() {
  return (
    <div className={s.loginPageContainer}>
      <div className={s.loginContainer}>
        <h1 className={s.profileStyles}>Profile</h1>
        <nav>
          <ul className={s.registration}>
            <li className={s.registrationItemActive}>
              <a href="#">Registration</a>
            </li>
            <li className={s.registrationItem}>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* options to sign-up */}
      <div className={s.signContainer}>
        <span className={s.signUpOptions}>You can sign in with social</span>
        <ul className={s.links}>
          <li>
            <a className={s.linkSocial} href="https://vk.com/">
              <VKIcon className={s.linkIcon} />
            </a>
          </li>
          <li>
            <a className={s.linkSocial} href="https://www.facebook.com/">
              <FacebookIcon className={s.linkIcon} />
            </a>
          </li>
          <li>
            <a className={s.linkSocialLast} href="https://www.google.com">
              <GoogleIcon className={s.linkIcon} />
            </a>
          </li>
        </ul>
      </div>
      {/* Form */}
      <div className={s.formSection}>
        <form className={s.formContainer}>
          <label>
            <input className={s.inputStyles} placeholder="Your name"></input>
          </label>
          <label>
            <input className={s.inputStyles} placeholder="E-mail"></input>
          </label>
          <label>
            <input className={s.inputStyles} placeholder="Phone"></input>
          </label>
          <label className={s.checkBoxContainer}>
            <input className={s.checkbox} type="checkbox" value="check" />
            <span className={s.checkboxIcon}></span>I accept the terms of the
            offer of{" "}
            <a className={s.privacy} href="#">
              {" "}
              the privacy policy
            </a>
          </label>
          <div className={s.buttonContainer}>
            <button className={s.registrationButton} type="submit">
              Registration
            </button>
            <NavLink to="/catalog" className={s.signInLink}>
              <button className={s.signInButton} type="button">
                Sign in
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
}
