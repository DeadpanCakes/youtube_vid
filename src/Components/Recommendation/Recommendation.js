import db from "./recommendationsDB";
import RecommendedVid from "./RecommendedVid";
import style from "./Recommendation.module.css";

const Recommendation = () => {
  return (
    <aside className={style.recommendation}>
      <ul>
        {db.map((vid) => {
          const { imgSrc, imgDesc, title, channel, views, date } = vid;
          return (
            <RecommendedVid
              imgSrc={imgSrc}
              imgDesc={imgDesc}
              title={title}
              channel={channel}
              views={views}
              date={date}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default Recommendation;
