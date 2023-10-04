import { useContext, useState } from 'react';
import styled from 'styled-components';

import Modal from './common/modal';
import Button from './common/button';
import DropDown from './common/dropDown';
import { Settings } from '../constants/types';
import { AppContext } from '../contexts/context';
import { algoOptions, animationoptions } from '../constants/constants';

interface IProps {
  setSettingslModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsModal = ({ setSettingslModalVisibility }: IProps) => {
  const {
    algorithm,
    updateAlgorithmSettings,
    speed,
    updateAnimationSettings,
    pushNotification,
  } = useContext(AppContext);

  const [settings, setSettings] = useState<Settings>({
    algorithm,
    speed,
  });
  const setField = (field: string, value: string | number) => {
    setSettings({
      ...settings,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    updateAlgorithmSettings(settings.algorithm);
    updateAnimationSettings(settings.speed);
    setSettingslModalVisibility(false);
    pushNotification('Settings updated.');
  };

  const handleClose = () => {
    setSettingslModalVisibility(false);
  };

  return (
    <Modal title="Settings" setOpenModal={setSettingslModalVisibility}>
      <Modal.Body>
        <Flex>
          <label htmlFor="algorithm">Algorithm</label>
          <div>
            <DropDown
              currentOption={settings.algorithm}
              options={algoOptions}
              applyTo={'algorithm'}
              setField={setField}
            ></DropDown>
          </div>
        </Flex>
        <Flex>
          <label htmlFor="speed">Speed</label>
          <div>
            <DropDown
              currentOption={String(settings.speed)}
              options={animationoptions}
              applyTo={'speed'}
              setField={setField}
            ></DropDown>
          </div>
        </Flex>
      </Modal.Body>
      <Modal.Footer>
        <FlexEnd>
          <Button
            label="Cancel"
            variant="cancel"
            onClick={handleClose}
            ariaLabel={'Cancel'}
          ></Button>
          <Button
            label="Save"
            variant="primary"
            onClick={handleSubmit}
            ariaLabel={'Save'}
          ></Button>
        </FlexEnd>
      </Modal.Footer>
    </Modal>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;
`;
const FlexEnd = styled(Flex)`
  justify-content: flex-end;
`;
export default SettingsModal;
