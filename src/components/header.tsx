import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './common/button';
import Logo from '../assets/svg/sortviz.svg';
import { RunSvg, ShuffleSvg, RandomizeSvg, CogSvg } from './common/icons';

const header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <StyledDiv>
          <Link to={'/'}>
            <img src={Logo} alt="AlgoViz logo" />
            <span> AlgoViz </span>
          </Link>
        </StyledDiv>
        <ControlPanel>
          <Button
            variant="control-panel"
            label="run"
            onClick={() => console.log('Run been pressed')}
          >
            <RunSvg />
          </Button>
          <Button
            variant="control-panel"
            label="shuffle"
            onClick={() => console.log('Shuffle been pressed')}
          >
            <ShuffleSvg />
          </Button>
          <Button
            variant="control-panel"
            label="randomize"
            onClick={() => console.log('Randomized been pressed')}
          >
            <RandomizeSvg />
          </Button>
          <Button
            variant="control-panel"
            label=""
            onClick={() => console.log('Cog been pressed')}
          >
            <CogSvg />
          </Button>
        </ControlPanel>
      </Wrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 2rem;
  padding-block: 1rem;
  background-color: var(--gray97);
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  @media (min-width: 1200px) {
    height: 3rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: baseline;
  margin-inline: 1rem;
  @media (min-width: 1200px) {
  }
`;
const StyledDiv = styled.div`
  a {
    align-items: center;
    display: flex;
    text-decoration: none;
    color: inherit;
    cursor: inherit;
    &:hover {
      cursor: pointer;
    }
    img {
      height: 2rem;
      width: 2rem;
    }
    span {
      padding-left: 0.25rem;
      text-align: center;
      caret-color: transparent;
    }
  }
`;
const ControlPanel = styled.div`
  padding: 2px;
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default header;
