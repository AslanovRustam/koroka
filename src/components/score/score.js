import s from "./score.module.css";
import Alexa from "../../images/avaAlexa.png";
import Kathryn from "../../images/avaKathryn.png";
import Diane from "../../images/avaDiane.png";
import { ReactComponent as Student } from "../../images/Unionstudent.svg";
import { ReactComponent as Pen } from "../../images/Unionpen.svg";
import { ReactComponent as Video } from "../../images/Vectorvideo.svg";

export default function Score() {
  return (
    <div>
      <div>
        <div className={s.scoreCard}>
          <div className={s.userProgress}>
            <span className={s.progress}>Progress 12%</span>
          </div>
          <img className={s.avatarImg} src={Alexa} />
          <span className={s.avatarName}>Alexa</span>
        </div>
        <div className={s.informSection}>
          <h2 className={s.userLabel}>
            Take exam in Mathematics at 100 points
          </h2>
          <ul className={s.scoreInformation}>
            <li className={s.scoreTitleItem} />
            <Student className={s.icon} />
            <span className={s.scoreTitle}>12 lessons</span>
            <li className={s.scoreTitleItem} />
            <Pen className={s.icon} />
            <span className={s.scoreTitle}>12 tasks</span>
            <li className={s.scoreTitleItem} />
            <Video className={s.icon} />
            <span className={s.scoreTitle}>30 minutes</span>
          </ul>
          <button className={s.scoreButton} type="button">
            Continue
          </button>
          <button className={s.moreButton} type="button">
            More
          </button>
        </div>
      </div>
    </div>
  );
}
