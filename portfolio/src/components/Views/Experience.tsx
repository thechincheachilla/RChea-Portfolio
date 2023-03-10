import { Theme, useMediaQuery } from "@mui/material";
import { ExperienceTimeline } from "../ExperienceTimeline";
import { Page } from "../Page";
import { ExperienceAccordion } from "../ExperienceAccordion";

export function Experience() {
  var isDesktop = useMediaQuery(
    ({ breakpoints }: Theme) => breakpoints.up("md"),
    {
      noSsr: true,
    }
  );

  return (
    <Page title="経験">
      <ExperienceAccordion />
      <ExperienceTimeline isDesktop={isDesktop} />
    </Page>
  );
}
