import style from "./MainVideo.module.css";
import channelImg from "../../Assets/jubilee.jpg";
import { useState } from "react";

const MainVideo = () => {
  const [descMin, setDescMin] = useState(true);
  const toggleDesc = () => setDescMin((prevState) => !prevState);

  return (
    <main className={style.mainVid}>
      <iframe
        width="1278"
        height="719"
        src="https://www.youtube.com/embed/mcoC5ZgaFjY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className={style.vidInfo}>
        <h1 className={style.vidTitle}>
          Japanese Breakfast - Savage Good Boy (Official Video)
        </h1>
        <div className={style.vidDetails}>
          <h3>781,935 Views</h3>
          <h3>Premiered May 19, 2021</h3>
          <span className={style.controls}>
            <span className="rating">
              <button>14K</button>
              <button>1.3K</button>
            </span>
            <button>Share</button>
            <button>Save</button>
            <button>Controls</button>
          </span>
        </div>
      </div>
      <div className={style.vidDesc}>
        <div className={style.descInfo}>
          <a href="https://www.youtube.com/channel/UC7RgHJCaozoM7mdjmJmca4Q">
            <img
              alt="The Jubilee album cover"
              src={channelImg}
              className={style.channelImg}
            ></img>
          </a>
          <h2>Japanese Breakfast</h2>
          <h4>82.9k Subscribers</h4>
          <div>
            {descMin ? (
              <p>
                “Savage Good Boy” the new song by Japanese Breakfast from the
                album ‘Jubilee’, out June 4th on Dead Oceans.
              </p>
            ) : (
              <p>
                “Savage Good Boy” the new song by Japanese Breakfast from the
                album ‘Jubilee’, out June 4th on Dead Oceans. STREAM/BUY:
                https://japanesebreakfast.ffm.to/jubilee
                http://japanesebreakfast.rocks/
                https://www.instagram.com/jbrekkie/ https://twitter.com/jbrekkie
                Starring Michael Imperioli and Michelle Zauner Director -
                Michelle Zauner Executive Producer - Evaline Huang Producer -
                Carine Teoh Director of Photography - Adam Kolodny 1st AC - Joe
                Mcnairy 2nd AC - Fernando Lopez Gaffer - David Williamson Key
                Grip - Jordan Fliehler Dolly Grip - Jay Swuen Electrician -
                Anderson Ko BTS - Dustin Liu Stills - Kristen Jan Wong
                Production Designer - Evaline Huang Art Director - Carine Teoh
                Stylist - Cece Liu Costumer - Hannah Arnold Hair - Kelly Park
                Make-Up Artist - Sherri Celis Nails - Hana Jeon Editor - Robert
                Kolodny & Michelle Zauner Color - Kevin Ratigan Processing &
                Scan – Fotokem Covid Compliance - Aaron Meritt Production
                Assistant - Saul Maynez Production Assistant - Austin Anderson
              </p>
            )}
            <button onClick={toggleDesc}>
              {descMin ? "Show More" : "Show Less"}
            </button>
          </div>
        </div>
        <button className={style.subscribeBtn}>Subscribe</button>
      </div>
    </main>
  );
};

export default MainVideo;
