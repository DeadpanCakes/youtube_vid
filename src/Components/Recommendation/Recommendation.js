import db from "./recommendationsDB";
import RecommendedVid from "./RecommendedVid";

const Recommendation = () => {
  return (
    <aside>
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
