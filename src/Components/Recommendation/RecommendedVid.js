const RecommendedVid = (props) => {
  const { imgSrc, imgDesc, title, channel, views, date } = props;
  return (
    <li>
      <img src={imgSrc} alt={imgDesc} />
      <div>
        <h4>
          <strong>{title}</strong>
        </h4>
        <h4>{channel}</h4>
        <div>
          <h5>{views}</h5>
          <h5>{date}</h5>
        </div>
      </div>
    </li>
  );
};

export default RecommendedVid;
