import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import holidayClassicImg from "./Holiday_Classic.png";
import collegiateNationalsImg from "./Collegiate_Nationals.png";
import championshipImg from "./WA_Championship.jpg";
import rebootImg from "./Reboot.png";
import westCoastOpenImg from "./West_Coast_Open.jpg";
import rookieImg from "./Rookie.png";

type PowerliftingCard = {
  image: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

const powerliftingCards: PowerliftingCard[] = [
  {
    image: holidayClassicImg,
    title: "WA: Holiday Classic",
    date: "12.4.23",
    description:
      "A near disaster of a meet. After failing to hit squat depth twice in a row, I barely eeked out a successful lift to stay in the meet. Somehow, I had my best day on bench and deadlift, finally achieving a 100 kg bench, 200 kg deadlift, and 400+ DOTS.",
    link: "",
  },
  {
    image: collegiateNationalsImg,
    title: "IL: Collegiate Nationals",
    date: "3.27.22",
    description:
      "My first and last Collegiate Nationals, right at the end of my final quarter as an undergrad. I claimed the American squat record at 160 kg (353 lbs), (has since been broken), and took home the silver medal, after which, I received another drug test.",
    link: "https://www.youtube.com/watch?v=Yp6DECT15pU",
  },
  {
    image: championshipImg,
    title: "WA: State Championships",
    date: "10.3.21",
    description:
      "My first state championship meet, and my last time competing as a -53 kg lifter. After an intense 10 lb water cut, I had some abysmal squats followed by an American record deadlift at 187.5 kg (413 lbs). This was also my first time receiving a drug test.",
    link: "https://www.youtube.com/watch?v=ZlDwdFwi7iM&t=16s",
  },
  {
    image: rebootImg,
    title: "WA: Reboot",
    date: "4.17.21",
    description:
      "The first USAPL meet of WA state since the start of the pandemic. This was my second USAPL meet and I improved by a margin of 95 kg (209 lbs) since my first meet over a year prior. I achieved a total of 400 kg (882 lbs).",
    link: "https://www.youtube.com/watch?v=tySD-33krso&t=5s",
  },
  {
    image: westCoastOpenImg,
    title: "OR: USPA West Coast Open",
    date: "9.12.20",
    description:
      "My first and only USPA meet and only time competing at -52 kg. After the four hour drive to Corvallis, OR, I managed to snag the USPA tested national bench and deadlift records. A measly 75 kg (165 lbs) and 165.5 kg (365 lbs) respectively.",
    link: "",
  },
  {
    image: rookieImg,
    title: "WA: Rookie Meet",
    date: "2.1.20",
    description:
      "My entrance into competitive powerlifting started as a joke... to enter a rookie meet and win by default in the lighter -59 kg weight class. After totalling 305 kg (672 lbs), this joke spun off into an ambitious venture into powerlifting.",
    link: "",
  },
];

export function PowerliftingCards() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        mb={3}
        sx={{ textDecoration: "underline" }}
      >
        Competitions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {powerliftingCards.map((card) => (
          <Card sx={{ height: 500, width: 400 }}>
            <CardMedia component="img" src={card.image} sx={{ height: 300 }} />
            <CardContent sx={{ height: 120 }}>
              <Stack direction="row" gap={1} alignItems="center" mb={1}>
                <Typography variant="h3" color="primary.dark">
                  {`${card.title} |`}
                </Typography>
                <Typography variant="h3" color="black">
                  {card.date}
                </Typography>
              </Stack>
              <Typography variant="body1">{card.description}</Typography>
            </CardContent>
            <CardActions>
              {card.link && (
                <Button variant="text" href={card.link} target="_blank">
                  <Typography variant="h5">Full video</Typography>
                </Button>
              )}
              {!card.link && (
                <Button variant="text" disabled>
                  <Typography variant="h5">No video</Typography>
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
