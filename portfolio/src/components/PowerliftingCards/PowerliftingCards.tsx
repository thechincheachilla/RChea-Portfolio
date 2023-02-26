import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import holidayClassicImg from "./Holiday_Classic.png";
import collegiateNationalsImg from "./Collegiate_Nationals.png";
import championshipImg from "./WA_Championship.jpg";
import rebootImg from "./Reboot.png";
import westCoastOpenImg from "./West_Coast_Open.jpg";
import rookieImg from "./Rookie.png";

type PowerliftingCard = {
  image?: string;
  title?: string;
  date?: string;
  description?: string;
  link?: string;
  details?: {
    sanction?: string;
    class?: string;
    handler?: string;
    bodyWeight?: string;
    squat?: string[];
    bench?: string[];
    deadlift?: string[];
    total?: string;
    measures?: string;
    multipliers?: string;
    place?: string;
    drugTested?: string;
  };
};

const powerliftingCards: PowerliftingCard[] = [
  {
    image: holidayClassicImg,
    title: "WA: Holiday Classic",
    date: "12.4.22",
    description:
      "A near disaster of a meet. After failing to hit squat depth twice in a row, I barely eeked out a successful lift to stay in the meet. Somehow, I had my best day on bench and deadlift, finally achieving a 100 kg bench, 200 kg deadlift, and 400+ DOTS.",
    details: {
      sanction: "USAPL WA State Holiday Classic, Edgewood, WA",
      handler: "Andy Shaw",
      class: "56 kg Junior",
      bodyWeight: "55.3 kg/121.9 lbs",
      squat: [
        "1st Attempt: 152.5 kg / 336.2 lbs 🔴⚪🔴",
        "2nd Attempt: 152.5 kg / 336.2 lbs 🔴⚪🔴",
        "3rd Attempt: 152.5 kg / 336.2 lbs ⚪⚪⚪",
      ],
      bench: [
        "1st Attempt: 85 kg / 187.4 lbs ⚪⚪⚪",
        "2nd Attempt: 92.5 kg / 203.9 lbs ⚪⚪⚪",
        "3rd Attempt: 100 kg / 220.5 lbs ⚪⚪⚪",
      ],
      deadlift: [
        "1st Attempt: 180 kg / 396.8 lbs ⚪⚪⚪",
        "2nd Attempt: 190 kg / 418.9 lbs ⚪⚪⚪ (WA State record)",
        "3rd Attempt: 200 kg / 440.9 lbs ⚪⚪⚪ (WA State record)",
      ],
      total: "452.5 kg / 997.6 lbs (WA State record)",
      measures: "DOTS: 409.6, Wilks: 417.1",
      multipliers: "Squat: 2.76x, Bench: 1.81x, Deadlift: 3.62x, Total: 8.18x",
      place: "1st (uncontested)",
      drugTested: "No",
    },
  },
  {
    image: collegiateNationalsImg,
    title: "IL: Collegiate Nationals",
    date: "3.27.22",
    description:
      "My first and last Collegiate Nationals, right at the end of my final quarter as an undergrad. I claimed the American squat record at 160 kg (353 lbs), (has since been broken), and took home the silver medal, after which, I received another drug test.",
    link: "https://www.youtube.com/watch?v=Yp6DECT15pU",
    details: {
      sanction: "USAPL Collegiate Nationals, Lombard IL",
      handler: "Rato Chea",
      class: "56 kg Collegiate",
      bodyWeight: "55.28 kg/121.87 lbs",
      squat: [
        "1st Attempt: 145 kg / 319.7 lbs 🔴⚪⚪ (WA State record)",
        "2nd Attempt: 155 kg / 341.7 lbs 🔴⚪⚪ (WA State record)",
        "3rd Attempt: 160 kg / 352.7 lbs ⚪⚪⚪ (American record)",
      ],
      bench: [
        "1st Attempt: 82.5 kg / 181.9 lbs ⚪⚪⚪",
        "2nd Attempt: 92.5 kg / 203.9 lbs ⚪⚪⚪ (WA State record)",
        "3rd Attempt: 95 kg / 209.5 lbs ⚪⚪⚪ (WA State record)",
      ],
      deadlift: [
        "1st Attempt: 175 kg / 385.8 lbs ⚪⚪⚪",
        "2nd Attempt: 190 kg / 418.9 lbs 🔴🔴🔴 (American record attempt)",
        "3rd Attempt: 190 kg / 418.9 lbs 🔴🔴🔴 (American record attempt)",
      ],
      total: "430 kg / 948 lbs (WA State record)",
      multipliers: "Squat: 2.89x, Bench: 1.72x, Deadlift: 3.17x, Total: 7.78x",
      measures: "DOTS: 389.3, Wilks: 396.5",
      place: "2nd",
      drugTested: "Yes",
    },
  },
  {
    image: championshipImg,
    title: "WA: State Championships",
    date: "10.3.21",
    description:
      "My first state championship meet, and my last time competing as a -53 kg lifter. After an intense 10 lb water cut, I had some abysmal squats followed by an American record deadlift at 187.5 kg (413 lbs). This was also my first time receiving a drug test.",
    link: "https://www.youtube.com/watch?v=ZlDwdFwi7iM&t=16s",
    details: {
      sanction: "USAPL WA State Championship, Puyallup, WA",
      handler: "Anson Huang",
      class: "53 kg Junior + Collegiate",
      bodyWeight: "52.6 kg/116.0 lbs",
      squat: [
        "1st Attempt: 142.5 kg / 314.2 lbs ⚪⚪⚪ (WA State record - Collegiate + Junior)",
        "2nd Attempt: 157.5 kg / 347.2 lbs 🔴🔴🔴 (American record attempt - Collegiate)",
        "3rd Attempt: 157.5 kg / 347.2 lbs 🔴🔴🔴 (American record attempt - Collegiate)",
      ],
      bench: [
        "1st Attempt: 80 kg / 176.4 lbs ⚪⚪⚪",
        "2nd Attempt: 90 kg / 198.4 lbs ⚪⚪⚪ (WA State record - Collegiate)",
        "3rd Attempt: 95 kg / 209.5 lbs 🔴🔴🔴",
      ],
      deadlift: [
        "1st Attempt: 167.5 kg / 369.3 lbs ⚪⚪⚪",
        "2nd Attempt: 187.5 kg / 413.4 lbs 🔵🔵🔵 (American record attempt - Collegiate)",
        "3rd Attempt: 187.5 kg / 413.4 lbs ⚪⚪⚪ (American record - Collegiate)",
      ],
      total: "420 kg / 925.9 lbs (WA State record - Collegiate + Junior)",
      measures: "DOTS: 397.9, Wilks: 407.2",
      multipliers: "Squat: 2.71x, Bench: 1.71x, Deadlift: 3.56x, Total: 7.98x",
      place: "1st (uncontested)",
      drugTested: "Yes",
    },
  },
  {
    image: rebootImg,
    title: "WA: Reboot",
    date: "4.17.21",
    description:
      "The first USAPL meet of WA state since the start of the pandemic. This was my second USAPL meet and I improved by a margin of 95 kg (209 lbs) since my first meet over a year prior. I achieved a total of 400 kg (882 lbs).",
    link: "https://www.youtube.com/watch?v=tySD-33krso&t=5s",
    details: {
      sanction: "USAPL WA State Reboot, Tacoma WA",
      handler: "Nicco Garofalo",
      class: "53 kg Junior",
      bodyWeight: "52.2 kg/115.1 lbs",
      squat: [
        "1st Attempt: 125 kg / 275.6 lbs ⚪⚪⚪",
        "2nd Attempt: 137.5 kg / 303.1 lbs ⚪⚪⚪ (WA State record)",
        "3rd Attempt: 142.5 kg / 314.2 lbs 🔴🔴🔴",
      ],
      bench: [
        "1st Attempt: 77.5 kg / 170.9 lbs ⚪⚪⚪",
        "2nd Attempt: 85 kg / 187.4 lbs 🔴🔴🔴",
        "3rd Attempt: 85 kg / 187.4 lbs ⚪⚪⚪",
      ],
      deadlift: [
        "1st Attempt: 157.5 kg / 347.2 lbs ⚪⚪⚪ (WA State record)",
        "2nd Attempt: 170 kg / 374.8 lbs ⚪⚪⚪ (WA State record)",
        "3rd Attempt: 177.5 kg / 391.1 lbs ⚪⚪⚪ (WA State record)",
      ],
      total: "400 kg / 881.8 lbs (WA State record)",
      measures: "DOTS: 381.7, Wilks: 390.9",
      multipliers: "Squat: 2.63x, Bench: 1.63x, Deadlift: 3.40x, Total: 7.66x",
      place: "1st (uncontested)",
      drugTested: "No",
    },
  },
  {
    image: westCoastOpenImg,
    title: "OR: USPA West Coast Open",
    date: "9.12.20",
    description:
      "My first and only USPA meet and only time competing at -52 kg. After the four hour drive to Corvallis, OR, I managed to snag the USPA tested national bench and deadlift records. A measly 75 kg (165 lbs) and 165.5 kg (365 lbs) respectively.",
    details: {
      sanction: "USPA Drug Tested West Coast Open, Corvallis OR",
      handler: "Bruno Porras",
      class: "52 kg Junior (18/19) + Open",
      bodyWeight: "51.8 kg/114.2 lbs",
      squat: [
        "1st Attempt: 110 kg / 242.5 lbs ⚪⚪⚪ (WA State record - Junior + Open)",
        "2nd Attempt: 117.5 kg / 259.0 lbs ⚪⚪⚪ (WA State record - Junior + Open)",
        "3rd Attempt: 122.5 kg / 269.0 lbs 🔴🔴🔴",
      ],
      bench: [
        "1st Attempt: 75 kg / 165.2 lbs 🔴🔴🔴 (American record attempt - Junior)",
        "2nd Attempt: 75 kg / 187.4 lbs ⚪⚪⚪ (American record - Junior)",
        "3rd Attempt: 80 kg / 176.3 lbs 🔴🔴🔴 (American record attempt - Junior)",
      ],
      deadlift: [
        "1st Attempt: 142.5 kg / 314.7 lbs ⚪⚪⚪ (WA State record - Junior + Open)",
        "2nd Attempt: 157.5 kg / 347.2 lbs 🔴⚪⚪ (WA State record - Junior + Open)",
        "3rd Attempt: 162.5 kg / 358.3 lbs ⚪⚪⚪ (WA State record - Junior + Open)",
        "4th Attempt: 165.5 kg / 364.9 lbs ⚪⚪⚪ (American record - Junior)",
      ],
      total: "355 kg / 782.6 lbs (WA State record - Junior + Open)",
      measures: "DOTS: 341.3, Wilks: 350.0",
      multipliers: "Squat: 2.27x, Bench: 1.45x, Deadlift: 3.19, Total: 6.85x",
      place: "1st (uncontested)",
      drugTested: "No",
    },
  },
  {
    image: rookieImg,
    title: "WA: Rookie Meet",
    date: "2.1.20",
    description:
      "My entrance into competitive powerlifting started as a joke... to enter a rookie meet and win by default in the lighter -59 kg weight class. After totalling 305 kg (672 lbs), this joke spun off into an ambitious venture into powerlifting.",
    details: {
      sanction: "USAPL WA State Rookie Meet, Tacoma WA",
      handler: "None",
      class: "59 kg Teen 3 (18/19)",
      bodyWeight: "55.8 kg/123.0 lbs",
      squat: [
        "1st Attempt: 90 kg / 198.4 lbs ⚪⚪⚪",
        "2nd Attempt: 97.5 kg / 215.0 lbs ⚪⚪⚪",
        "3rd Attempt: 100 kg / 220.5 lbs ⚪⚪⚪",
      ],
      bench: [
        "1st Attempt: 62.5 kg / 137.8 lbs ⚪⚪⚪",
        "2nd Attempt: 67.5 kg / 148.8 lbs ⚪⚪⚪",
        "3rd Attempt: 70 kg / 154.3 lbs 🔴🔴🔴",
      ],
      deadlift: [
        "1st Attempt: 125 kg / 275.6 lbs ⚪⚪⚪",
        "2nd Attempt: 132.5 kg / 292.1 lbs ⚪⚪⚪",
        "3rd Attempt: 137.5 kg / 303.1 lbs ⚪⚪⚪",
      ],
      total: "305 kg / 672.4 lbs",
      measures: "DOTS: 273.9, Wilks: 278.6",
      place: "1st (uncontested)",
      drugTested: "No",
    },
  },
];

type HeadingProps = {
  card: PowerliftingCard;
};

function Heading({ card }: HeadingProps) {
  return (
    <Stack direction="row" gap={1} alignItems="center" mb={1}>
      <Typography variant="h3" color="primary.dark">
        {`${card.title} |`}
      </Typography>
      <Typography variant="h3" color="black">
        {card.date}
      </Typography>
    </Stack>
  );
}

type CardButtonProps = {
  card: PowerliftingCard;
};

function CardButton({ card }: CardButtonProps) {
  return (
    <>
      {card.link && (
        <Button variant="text" href={card.link} target="_blank">
          <Typography variant="h5" color="primary.dark">
            Full video
          </Typography>
        </Button>
      )}
      {!card.link && (
        <Button variant="text" disabled>
          <Typography variant="h5">No video</Typography>
        </Button>
      )}
    </>
  );
}

type DetailsProps = {
  type: string;
  details: string[];
};

function Details({ type, details }: DetailsProps) {
  return (
    <Stack direction={details.length === 1 ? "row" : "column"} gap={1}>
      <Typography variant="h5" color="primary">
        {type}
      </Typography>
      {details.map((detail) => (
        <Typography variant="body1">{detail}</Typography>
      ))}
    </Stack>
  );
}

type PowerliftingCardProps = {
  modalOpen: boolean;
  modalCardIndex: number;
  onCardClicked: (index: number) => void;
  onModalClose: () => void;
};

export function PowerliftingCards({
  modalOpen = false,
  modalCardIndex,
  onCardClicked,
  onModalClose,
}: PowerliftingCardProps) {
  const currCard = powerliftingCards[modalCardIndex];
  return (
    <>
      {modalOpen && (
        <Modal open={modalOpen}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              left: "50%",
              position: "absolute",
              top: "15vh",
              width: {
                xs: "100%",
                md: 900,
              },
              maxHeight: "80vh",
              transform: "translateX(-50%)",
            }}
          >
            <Box sx={{ overflow: "auto", px: 4, py: 4 }}>
              <Box
                sx={({ spacing }) => ({
                  position: "absolute",
                  right: spacing(2),
                  top: spacing(2),
                })}
              >
                <IconButton onClick={onModalClose}>
                  <CloseIcon fontSize="large"></CloseIcon>
                </IconButton>
              </Box>
              <Heading card={currCard} />
              <Typography variant="h5" mt={3} mb={1}>
                Summary:
              </Typography>
              <Typography variant="body1">{currCard.description}</Typography>
              <Typography variant="h5" mt={3} mb={1}>
                Competition Results:
              </Typography>
              <Stack gap={2} mb={2}>
                <Details
                  type={"Sanction:"}
                  details={[currCard.details?.sanction ?? ""]}
                />
                <Details
                  type={"Handler:"}
                  details={[currCard.details?.handler ?? ""]}
                />
                <Details
                  type={"Class:"}
                  details={[currCard.details?.class ?? ""]}
                />
                <Details
                  type={"Bodyweight:"}
                  details={[currCard.details?.bodyWeight ?? ""]}
                />
                <Details
                  type={"Squat:"}
                  details={currCard.details?.squat ?? []}
                />
                <Details
                  type={"Bench:"}
                  details={currCard.details?.bench ?? []}
                />
                <Details
                  type={"Deadlift:"}
                  details={currCard.details?.deadlift ?? []}
                />
                <Details
                  type={"Total:"}
                  details={[currCard.details?.total ?? ""]}
                />
                <Details
                  type={"Measures:"}
                  details={[currCard.details?.measures ?? ""]}
                />
                <Details
                  type={"Bodyweight Multipliers:"}
                  details={[currCard.details?.multipliers ?? ""]}
                />
                <Details
                  type={"Placement:"}
                  details={[currCard.details?.place ?? ""]}
                />
                <Details
                  type={"Drug Tested:"}
                  details={[currCard.details?.drugTested ?? ""]}
                />
              </Stack>
              <Box sx={{ ml: -1 }}>
                <CardButton card={currCard} />
              </Box>
            </Box>
          </Paper>
        </Modal>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
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
          {powerliftingCards.map((card, index) => (
            <Card
              sx={{
                height: 400,
                width: { xs: "100%" },
                maxWidth: 400,
              }}
              elevation={6}
            >
              <CardMedia
                component="img"
                src={card.image}
                sx={{ height: 300 }}
              />
              <CardContent sx={{ height: 15 }}>
                <Heading card={card} />
              </CardContent>
              <CardActions>
                <Button variant="text" onClick={() => onCardClicked(index)}>
                  <Typography variant="h5" color="primary">
                    More Details
                  </Typography>
                </Button>
                <CardButton card={card} />
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}
