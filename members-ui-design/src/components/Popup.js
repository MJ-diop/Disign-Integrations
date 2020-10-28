import React from 'react';
import { BiTaskX, BiTrash } from 'react-icons/bi';
import { RiTimerLine } from 'react-icons/ri';

import './_popup.scss';

export const Popup = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <div className="popup">
          <BiTaskX />
          <span>Assign task</span>
          <RiTimerLine />
          <span>View time records</span>
          <BiTrash />
          <span>Remove</span>
        </div>
      ) : null}
    </>
  );
};
