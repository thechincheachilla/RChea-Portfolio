import { Theme, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { Page } from "../Page";
import { ProjectCards } from "../ProjectCards";

export function Projects() {
  const [maxLines, setMaxLines] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCardIndex, setModalCardIndex] = useState(0);

  const isMobile = useMediaQuery(
    ({ breakpoints }: Theme) => breakpoints.down("md"),
    {
      noSsr: true,
    }
  );

  const handleCardClicked = (index: number) => {
    setIsModalOpen(true);
    setModalCardIndex(index);
  };

  function getMaxLines(windowWidth: number) {
    if (windowWidth >= 1500) {
      return 21;
    }
    if (windowWidth <= 1000) {
      return parseInt(`${window.innerWidth / 150}`, 10);
    }
    return parseInt(`${window.innerWidth / 130}`, 10);
  }

  useEffect(() => {
    function handleResize() {
      setMaxLines(getMaxLines(window.innerWidth));
      console.log(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Page title="プロジェクト">
      <ProjectCards
        modalOpen={isModalOpen}
        isMobile={isMobile}
        maxLines={maxLines}
        modalCardIndex={modalCardIndex}
        onCardClicked={(index: number) => handleCardClicked(index)}
        onModalClose={() => setIsModalOpen(false)}
      />
    </Page>
  );
}
