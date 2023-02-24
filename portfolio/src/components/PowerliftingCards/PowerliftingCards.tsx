import { Card, CardMedia, CardContent, Stack, Typography } from "@mui/material";

type PowerliftingCard = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const powerliftingCards: PowerliftingCard[] = [
  {
    image: ".//Collegiate_Nationals.png",
    title: "Collegiate Nationals, 3-27-22",
    description: "",
    link: "https://www.youtube.com/watch?v=Yp6DECT15pU",
  },
];

export function PowerliftingCards() {
  return (
    <Stack direction="row" gap={3}>
      <Card sx={{ maxWidth: "50%", maxHeight: "25%" }}>
        <CardMedia
          component="img"
          src={require(".//Collegiate_Nationals.png")}
        />
        <CardContent>
          <Typography>Test</Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: "50%", maxHeight: "25%" }}>
        <CardMedia component="img" src={require(".//Reboot.png")} />
        <CardContent>
          <Typography>Test</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
