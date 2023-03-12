import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Avatar, Box, Paper, Typography } from "@mui/material";

import seekoutLogo from "/assets/Experience/seekout.jpg";
import gatechSeal from "/assets/Experience/gatechSeal.png";
import uwSeal from "/assets/Experience/uwSeal.png";
import uwCseLogo from "/assets/Experience/uwCseLogo.jpg";
import etsyLogo from "/assets/Experience/3dModdedPuzzlesLogo.png";
import attLogo from "/assets/Experience/attLogo.png";
import wtsaLogo from "/assets/Experience/wtsaLogo.jpg";
import mthsStemLogo from "/assets/Experience/mthsStemLogo.png";

type ExperienceDetails = {
  date?: string;
  title?: string;
  location?: string;
  description?: string;
  logo?: string;
};

const experiences: ExperienceDetails[] = [
  {
    date: "5.16.22 ~ Present",
    title: "SeekOut — SWE1",
    location: "Bellevue, Washington",
    description:
      "I started my first role as a Full Stack Software Engineer 1 at SeekOut. I am on the Grow team where my work focuses on the development of the Career Compass application. I work across the stack, specializing in backend API endpoint integration and architecture while producing front end UI component deliverables.",
    logo: seekoutLogo,
  },
  {
    date: "8.22.22 ~ Present",
    title: "Georgia Tech — Master's Student",
    location: "Atlanta, Georgia (Remote)",
    description:
      "I started as a Master's student in GaTech's OMSCS program to pursue an M.S. in Computer science with a specialization in Machine Learning. So far, I have taken Bayesian Statistics and am currently enrolled in Machine Learning for Trading. I intend to finish by 2025.",
    logo: gatechSeal,
  },
  {
    date: "8.13.15 ~ Present",
    title: "3D Modded Puzzles — Shop Owner",
    location: "Lynnwood, Washington",
    description:
      "In my first year of high school, I began tinkering with 3D printers and started creating CAD files to modify existing twisty puzzles into something new. Eventually, I started selling building and selling these puzzles on Etsy. Today, I continue to design, 3D print, post-process, and assemble these rare puzzles for customers across the globe.",
    logo: etsyLogo,
  },
  {
    date: "1.11.20 ~ Present",
    title: "WTSA — Judge, Coordinator",
    location: "Washington",
    description:
      "Every year, I judge and/or coordinate events for the WA Technology Student Association state conference. I have coordinated the Animatronics event, and have judged Animatronics, Structrual Design, Science Visualization, Biotechnology Design, Video Game Design, Webmaster, and other events.",
    logo: wtsaLogo,
  },
  {
    date: "9.28.19 ~ 3.18.22",
    title: "University of Washington — Undergraduate Student",
    location: "Seattle, Washington",
    description:
      "After two years and two quarters, I graduated from the University of Washington - Seattle, Cum Laude, with a B.S. in Computer Science (Data Science option). I focused on data science and machine learning CS courses such as AI, ML, Intro to Algorithms, and Computational Biology, and Databases. In addition, to increase my bilingual proficiency, I completed up to Spanish 203. At UW, I was a research assistant at the IDL and served as the Oversight Chair in the UW student senate.",
    logo: uwSeal,
  },
  {
    date: "1.3.22 ~ 3.18.22",
    title: "CSE 442 Data Visualization — TA",
    location: "Seattle, Washington",
    description:
      "I TA'd for the first time in my final quarter as an undergraduate student for UW's Data Visualization course. I maintained the policy of \"any-hour-office-hours\", hosting office hours as late as 1 am for students in dire need of assistance. I focused on explaining concepts to students and helping them determine the best decisions for their visualizations.",
    logo: uwCseLogo,
  },
  {
    date: "6.28.21 ~ 9.10.21",
    title: "AT&T TDP — SWE ML Intern",
    location: "Bothell, Washington",
    description:
      "I interned for AT&T over the summer of 2021 and worked with an ML team. Collaborating with another intern, I was responsible for developing a classification model for predicting tags of rows of data under the constraint that the data set was sparse. Halfway into my internship, I successfully developed a random forest classifier model with a test set accuracy exceeding 90%.",
    logo: attLogo,
  },
  {
    date: "6.29.20 ~ 9.11.20",
    title: "AT&T TDP — SWE WebDev Intern",
    location: "Bothell, Washington",
    description:
      "I interned for AT&T over the summer of 2020 and worked on an application called TOWER, the Tech-Ops Work Empowerment Repository, an internal tool for cost tracking. I was responsible for creating front end components and backend API routes with Vue.js and flask, and ultimately created an e2e feature near the end of my internship.",
    logo: attLogo,
  },
  {
    date: "9.9.15 ~ 6.15.19",
    title: "Mountlake Terrace HS — Student",
    location: "Mountlake Terrace, Washington",
    description:
      "I attended MTHS for high school and enrolled in the STEM program, specializing in the Computer Science pathway. My primary extracurricular activity was TSA (Technology Student Association), where I lead the club to prominence as a top TSA school in the state and nationwide while organizing fundraisers to ensure full coverage of student fees. MTHS TSA remains one of the top TSA programs in WA to this day. I also participated in FRC robotics, Jazz 1, STEM leadership, TEMPO yearbook, and more.",
    logo: mthsStemLogo,
  },
];

type ExperienceTimelineProps = {
  isDesktop: boolean;
};

export function ExperienceTimeline({ isDesktop }: ExperienceTimelineProps) {
  return (
    <Box sx={{ maxHeight: "65vh", overflow: "auto", mt: 4 }}>
      <Timeline
        position={isDesktop ? "alternate" : "right"}
        sx={{ ml: isDesktop ? 0 : "-60vw" }}
      >
        {experiences.map((experience) => (
          <TimelineItem>
            {isDesktop && (
              <TimelineOppositeContent sx={{ m: "auto 0" }}>
                <Typography variant="h5" color="primary.dark">
                  {experience.date}
                </Typography>
              </TimelineOppositeContent>
            )}

            <TimelineSeparator>
              <TimelineConnector sx={{ backgroundColor: "primary.dark" }} />
              <TimelineDot
                variant="outlined"
                sx={{ borderColor: "primary.dark" }}
              >
                <Avatar src={experience.logo} sx={{ width: 75, height: 75 }} />
              </TimelineDot>
              <TimelineConnector sx={{ backgroundColor: "primary.dark" }} />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper elevation={6} sx={{ px: 4, py: 4 }}>
                <Typography variant="h4" color="primary.dark" align="left">
                  {experience.title}
                </Typography>
                {!isDesktop && (
                  <Typography variant="h6" color="black" align="left">
                    {experience.date}
                  </Typography>
                )}
                <Typography variant="h6" color="primary" align="left" mb={2}>
                  {experience.location}
                </Typography>
                <Typography variant="body1" align="left">
                  {experience.description}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
