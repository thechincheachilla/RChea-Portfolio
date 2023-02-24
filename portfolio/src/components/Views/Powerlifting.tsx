import { useState } from "react";
import { Page } from "../Page";
import { PowerliftingCards } from "../PowerliftingCards";

export function Powerlifting() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCardIndex, setModalCardIndex] = useState(-1);

  const handleCardClicked = (index: number) => {
    setIsModalOpen(true);
    setModalCardIndex(index);
  };

  return (
    <Page>
      <PowerliftingCards
        modalOpen={isModalOpen}
        modalCardIndex={modalCardIndex}
        onCardClicked={(index) => handleCardClicked(index)}
        onModalClose={() => setIsModalOpen(false)}
      />
    </Page>
  );
}
