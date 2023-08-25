import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './common/button';
import Modal from './common/modal';
import { InstallSvg, CogSvg } from './common/icons';

interface IProps {
  setTutorialModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
const FirstPage = () => {
  return (
    <p>
      AlgoViz visualizes various <b>sorting algorithms.</b>, can be{' '}
      <InstallSvg />
      <b> installed</b> and <b>used offline</b>.
      <br /> <br />
      <StyledColorBox $color=" var(--soft-cyan)" /> green denotes sorted
      elements, while <StyledColorBox $color="var(--hot-orange)" />
      orange stands for the element in the current iteration, and red{' '}
      <StyledColorBox $color=" var(--warm-coral)" /> represents the pointer
      required by some sorting algorithms.
    </p>
  );
};

const SecondPage = () => {
  return (
    <p>
      Find out more Features in the settings menu <CogSvg />.
      <br />
      <br />I sincerely hope you enjoy experimenting with this visualization
      tool as much as I enjoyed creating it!
    </p>
  );
};

const TutorialModal = ({ setTutorialModalVisibility }: IProps) => {
  const [pageCounter, setPageCounter] = useState<number>(1);

  const handleNext = () => {
    if (pageCounter === 2) setTutorialModalVisibility(false);
    setPageCounter(pageCounter + 1);
  };

  const handlePrevious = () => {
    setPageCounter(pageCounter - 1);
  };

  const ModalContent = () => {
    return pageCounter === 1 ? (
      <FirstPage />
    ) : pageCounter === 2 ? (
      <SecondPage />
    ) : null;
  };

  return (
    <Modal
      title="Welcome to AlgoViz!"
      setOpenModal={setTutorialModalVisibility}
    >
      <Modal.Body>
        <ModalContent />
      </Modal.Body>
      <Modal.Footer>
        <StyledDiv>
          {pageCounter !== 1 && (
            <Button
              label="Previous"
              variant="primary"
              onClick={handlePrevious}
            />
          )}
          <Button
            label={pageCounter < 2 ? `Next` : `Close`}
            variant="primary"
            onClick={handleNext}
          />
        </StyledDiv>
      </Modal.Footer>
    </Modal>
  );
};

export default TutorialModal;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1rem;
  span {
    display: flex;
  }
`;
const StyledColorBox = styled.span<{ $color?: string }>`
  display: inline-block;
  vertical-align: bottom;
  margin-right: 4px;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 0.5rem;
  background-color: ${props => props.$color};
`;
