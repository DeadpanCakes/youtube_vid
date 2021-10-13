import savageGood3d from "../../Assets/3D.webp";
import beSweet from "../../Assets/beSweet.webp";
import blackBetty from "../../Assets/blackBetty.webp";
import boyish from "../../Assets/boyish.webp";
import clairo from "../../Assets/clairo.webp";
import courtney from "../../Assets/courtneyB.webp";
import everybody from "../../Assets/everybodyJ.webp";
import fantano from "../../Assets/fantano.webp";
import freaks from "../../Assets/freaks.webp";
import glider from "../../Assets/glider.webp";
import inmybag from "../../Assets/inmybag.webp";
import jbrekkyKEXP from "../../Assets/jbrekkyKEXP.webp";
import overunder from "../../Assets/overunder.webp";
import sharonVan from "../../Assets/sharonVan.webp";

const recommendationFactory = (
  imgSrc,
  imgDesc,
  title,
  channel,
  views,
  date
) => ({
  imgSrc,
  imgDesc,
  title,
  channel,
  views,
  date,
});

const db = [
  recommendationFactory(
    beSweet,
    "A shot from the music video",
    "Japanese Breakfast - Be Sweet (Official Video)",
    "Japanese Breakfast",
    "967k views",
    "7 months ago"
  ),
  recommendationFactory(
    inmybag,
    "Japanese breakfast smiling",
    "Japanese Breakfast - What's In My Bag?",
    "Amoeba",
    "179K views",
    "3 years ago"
  ),
  recommendationFactory(
    savageGood3d,
    "A shot from the music video",
    "Japanese Breakfast - Savage Good Boy (3D Audio)",
    "kxmaeda.mp4",
    "182 views",
    "4 months ago"
  ),
  recommendationFactory(
    overunder,
    "Japanese Breakfast beside the over/under logo",
    "Japanese Breakfast Rates Big Gulps, Edibles and Butt Stuff...",
    "Pitchfork",
    "112K views",
    "2 years ago"
  ),
  recommendationFactory(
    clairo,
    "Clairo performing",
    'Clairo - "Bags" (Recorded Live for World Cafe)',
    "World Cafe",
    "3M views",
    "1 year ago"
  ),
  recommendationFactory(
    sharonVan,
    "A shot from the music video",
    "Sharon Van Etten & Angel Olsen - Like I Used To (Offici...",
    "Sharon Van Etten",
    "960K views",
    "4 months ago"
  ),
  recommendationFactory(
    everybody,
    "A shot from the music video",
    "Japanese Breakfast - Everybody Wants To Love Yo...",
    "Japanese Breakfast",
    "1.2M",
    "5 years ago"
  ),
  recommendationFactory(
    glider,
    "A shot from the video game 'Sable'",
    'Japanese Breakfast - "Glider"',
    "Japanese Breakfast",
    "82K",
    "1 month ago"
  ),
  recommendationFactory(
    fantano,
    "fantano and Japanese Breakfast smiling",
    "Japanese Breakfast INTERVIEW",
    "fantano",
    "57K",
    "3 months ago"
  ),
  recommendationFactory(
    blackBetty,
    "A shot from the music video",
    "Ram Jam - Black Betty",
    "RamJamVEVO",
    "238M",
    "4 years ago"
  ),
  recommendationFactory(
    jbrekkyKEXP,
    "Japanese Breakfast performing live",
    "Japanese Breakfast - Full Performance (Live on KEXP a...)",
    "KEXP",
    "108K",
    "3 months ago"
  ),
  recommendationFactory(
    freaks,
    "Album cover for Buds",
    "Freaks",
    "Surf Curse",
    "50M",
    "4 months ago"
  ),
  recommendationFactory(
    courtney,
    "A shot from the music video",
    "Courtney Barnett - Before You Gotta Go (Official Video)",
    "courtneybarnett",
    "215K",
    "4 weeks ago"
  ),
  recommendationFactory(
    boyish,
    "A shot from the music video",
    "Japanese Breakfast - Boyish (Official Video)",
    "Japanese Breakfast",
    "4.4M",
    "3 years ago;"
  ),
];

export default db;
