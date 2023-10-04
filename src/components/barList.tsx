import { useLayoutEffect, useContext } from 'react';
import styled from 'styled-components';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { AppContext } from '../contexts/context';
import Bar from './common/bar';
import { BarElement } from '../constants/types';
import { arrayGenerator, getWindowDimensions } from '../utils/array';

const BarList = () => {
  const { values, updateValues } = useContext(AppContext);
  const [parent] = useAutoAnimate();

  useLayoutEffect(() => {
    function handleResize() {
      updateValues(arrayGenerator(getWindowDimensions()));
    }

    screen.orientation.addEventListener('change', handleResize);
    return () => screen.orientation.removeEventListener('change', handleResize);
  }, [updateValues]);

  return (
    <StyledSection ref={parent}>
      {values.map((elem: BarElement) => {
        return <Bar {...elem} key={elem.id} />;
      })}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: start;
  flex-wrap: nowrap;
  margin-top: 2rem;
  margin-bottom: 3rem;
  margin-inline: auto;
`;

export default BarList;
