import { useState } from 'react';
// import { observer } from "mobx-react";
import styled from 'styled-components';

import Modal from './common/modal';
import Button from './common/button';
import DropDown from './common/dropDown';

// import store from "../store/store";
// import { Algorithm } from "../constants/types";
// import { animationDurationArray } from "../constants/numbers";

interface IProps {
  setSettingslModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
type SettingsObject = {
  algorithm: 'bubble sort' | 'insertion sort';
  speed: string;
};

const SettingsModal = ({ setSettingslModalVisibility }: IProps) => {
  const [settings] = useState<SettingsObject>({
    algorithm: 'bubble sort',
    speed: '200',
  });

  //   const setField = (field: string, value: string | number) => {
  //     setSettings({
  //       ...settings,
  //       [field]: value,
  //     });
  //   };

  const handleSubmit = () => {
    setSettingslModalVisibility(false);
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
              options={[settings.algorithm, settings.algorithm]}
            ></DropDown>
          </div>
        </Flex>
        <Flex>
          <label htmlFor="speed">Speed</label>
          <div>
            <DropDown
              currentOption={settings.speed}
              options={[settings.speed, settings.speed]}
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
          ></Button>
          <Button
            label="Save"
            variant="primary"
            onClick={handleSubmit}
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
