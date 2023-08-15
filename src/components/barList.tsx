import { useContext, useLayoutEffect } from 'react';
import Bar from './common/bar';
import styled from 'styled-components';
import { arrayGenerator, getWindowDimensions } from '../utils/array';
import { AppContext } from '../contexts/context';

const BarList = () => {
  const { values, updateValues } = useContext(AppContext);

  // const [array, setArray] = useState<number[]>(
  //   arrayGenerator(0, 99, getWindowDimensions()),
  // );

  useLayoutEffect(() => {
    function handleResize() {
      updateValues(arrayGenerator(0, 99, getWindowDimensions()));
    }

    screen.orientation.addEventListener('change', handleResize);
    return () => screen.orientation.removeEventListener('change', handleResize);
  }, [updateValues]);

  return (
    <StyledSection>
      {values.map((el, index) => {
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
