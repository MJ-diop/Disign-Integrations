import React, { useState } from 'react';
import './_cardusers.scss';

import { datas } from '../datas';
import { Popup } from './Popup';

const donees = datas;

const CardUsers = () => {
  const [show, setShow] = useState(false);
  const openPopup = () => setShow((show) => !show);

  return (
    <div className="cards">
      {donees.map((data, id) => (
        <section className="card_users" key={id}>
          <img src={data.img} alt="" />
          <h4 className="user_name">{data.name}</h4>
          <span className="user_proffession" onClick={openPopup}>
            {data.proffession}
            {<Popup show={show} setShow={setShow} />}
          </span>
          <div className="board_tasks">
            <div className="boards">
              <span className="board_number">{data.boards}</span>
              <span className="board">Boards</span>
            </div>
            <div className="tasks">
              <span className="task_number">{data.tasks}</span>
              <span className="tasks">Tasks</span>
            </div>
          </div>
          <span className="overdue">
            {data.overdue.done ? `${data.overdue.overs}  task overdue!` : null}
          </span>
        </section>
      ))}
    </div>
  );
};

export default CardUsers;
