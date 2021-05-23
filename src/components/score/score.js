import s from "./score.module.css";
import Alexa from "../../images/avaAlexa.png";
import Kathryn from "../../images/avaKathryn.png";
import Diane from "../../images/avaDiane.png";
import { ReactComponent as Student } from "../../images/Unionstudent.svg";
import { ReactComponent as Pen } from "../../images/Unionpen.svg";
import { ReactComponent as Video } from "../../images/Vectorvideo.svg";

export default function Score() {
  return (
    <div className={s.scoreContainer}>
      <div className={s.scoreSection}>
        <div className={s.scoreCard}>
          <div className={s.userProgress}>
            <div className={s.progressBox}></div>
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
            <li className={s.scoreListItem}>
              <div className={s.scoreTitleItem}>
                <Student className={s.icon} />
                <span className={s.scoreTitle}>12 lessons</span>
              </div>
            </li>
            <li className={s.scoreListItem}>
              <div className={s.scoreTitleItem}>
                <Pen className={s.icon} />
                <span className={s.scoreTitle}>12 tasks</span>
              </div>
            </li>
            <li className={s.scoreListItem}>
              <div className={s.scoreTitleItem}>
                <Video className={s.icon} />
                <span className={s.scoreTitle}>30 minutes</span>
              </div>
            </li>
          </ul>
          <div className={s.buttonContainer}>
            <button className={s.scoreButton} type="button">
              Continue
            </button>
            <button className={s.moreButton} type="button">
              More
            </button>
          </div>
        </div>
      </div>
      <div className={s.scoreSection}>
        <div className={s.scoreCard}>
          <div className={s.userProgressKathryn}>
            <div className={s.progressBox}></div>
            <span className={s.progress}>Progress 12%</span>
          </div>
          <img className={s.avatarImg} src={Kathryn} />
          <span className={s.avatarName}>Kathryn Nguyen</span>
        </div>
        <div className={s.informSection}>
          <h2 className={s.userLabel}>
            How buy new clothes without money in USA
          </h2>
          <ul className={s.scoreInformation}>
            <li className={s.scoreListItem}>
              <div className={s.scoreTitleItem}>
                <Student className={s.icon} />
                <span className={s.scoreTitle}>12 lessons</span>
              </div>
            </li>
            <li className={s.scoreListItem}>
              <div className={s.scoreTitleItem}>
                <Pen className={s.icon} />
                <span className={s.scoreTitle}>12 tasks</span>
              </div>
            </li>
            <li className={s.scoreListItem}>
              <div className={s.scoreTitleItem}>
                <Video className={s.icon} />
                <span className={s.scoreTitle}>30 minutes</span>
              </div>
            </li>
          </ul>
          <div className={s.buttonContainer}>
            <button className={s.scoreButton} type="button">
              Continue
            </button>
            <button className={s.moreButton} type="button">
              More
            </button>
          </div>
        </div>
      </div>
      <div className={s.scoreSection}>
        <div className={s.scoreCard}>
          <div className={s.userProgressDiane}>
            <div className={s.progressBox}></div>
            <span className={s.progress}>Progress 12%</span>
          </div>
          <img className={s.avatarImg} src={Diane} />
          <span className={s.avatarName}>Diane Miles</span>
        </div>
        <div className={s.informSection}>
          <h2 className={s.userLabel}>TWhy people hate me?</h2>
          <ul className={s.scoreInformation}>
            <li className={s.scoreListItem}>
              <div className={s.scoreTitleItem}>
                <Student className={s.icon} />
                <span className={s.scoreTitle}>12 lessons</span>
              </div>
            </li>
            <li className={s.scoreListItem}>
              <div className={s.scoreTitleItem}>
                <Pen className={s.icon} />
                <span className={s.scoreTitle}>12 tasks</span>
              </div>
            </li>
            <li className={s.scoreListItem}>
              <div className={s.scoreTitleItem}>
                <Video className={s.icon} />
                <span className={s.scoreTitle}>30 minutes</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={s.buttonContainer}>
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
