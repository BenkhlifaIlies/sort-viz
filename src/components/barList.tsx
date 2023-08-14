import { useLayoutEffect, useState } from 'react';
import Bar from './common/bar';
import styled from 'styled-components';
import { arrayGenerator } from '../utils/array';

const getWindowDimensions = () =>
  Math.min(document.documentElement.clientWidth, 1440);

const BarList = () => {
  const [array, setArray] = useState<number[]>(
    arrayGenerator(0, 99, getWindowDimensions()),
  );

  useLayoutEffect(() => {
    function handleResize() {
      setArray(arrayGenerator(0, 99, getWindowDimensions()));
    }

    screen.orientation.addEventListener('change', handleResize);
    return () => screen.orientation.removeEventListener('change', handleResize);
  }, []);

  return (
    <StyledSection>
      {array.map((el, index) => {
        return <Bar key={index} className={'bar'} value={el} />;
      })}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  margin-top: 2rem;
  margin-bottom: 3rem;
  margin-inline: auto;
`;
export default BarList;
