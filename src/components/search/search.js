import s from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../images/Vector.svg";
import { ReactComponent as Union } from "../../images/Union.svg";
import { ReactComponent as Check } from "../../images/check.svg";

export default function Search() {
  return (
    <div>
      <div className={s.searchContainer}>
        <h1 className={s.searchHeader}>Course catalog</h1>
        <div className={s.searchExplain}>
          <span>
            Each course contains video lectures, tasks, and text materials. All
            courses viewed by you are displayed in your personal account
          </span>
        </div>
      </div>
      <div>
        <form className={s.formContainer}>
          <label className={s.labelSearch}>
            <SearchIcon className={s.icon} />
            <input className={s.inputStyles} placeholder="Search" />
          </label>
          <label className={s.labelCountry}>
            {/* <input className={s.inputStylesCountry} placeholder=""></input> */}
            <input className={s.inputStylesPlaceholder} placeholder=""></input>
            <span className={s.inputStylesCountry}>Your country</span>
            <span className={s.inputStylesUSA}>USA</span>
            <Union className={s.iconUnion} />
            <Check className={s.iconCheck} />
          </label>
        </form>
      </div>
    </div>
  );
}
