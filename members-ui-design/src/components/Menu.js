import React from 'react';

import './_menu.scss';

import {
  MdStarBorder,
  MdTimer,
  MdKeyboardArrowDown,
  MdClose,
} from 'react-icons/md';
import { RiTimer2Line } from 'react-icons/ri';
import { BiChalkboard } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Active = () => <span className="active">.</span>;

const Menu = () => {
  return (
    <section className="menu">
      <div className="blur">blblblbl</div>
      <span className="close_icon">{<MdClose size="22" />}</span>
      <Menus
        title="Recently Accessed"
        projetK="Projet K"
        projetA="Projet A"
        iconTime={<RiTimer2Line />}
        iconArrowDown={<MdKeyboardArrowDown style={{ marginLeft: '10px' }} />}
      />
      <Menus title="Boards" iconboard={<BiChalkboard />} />
      <Menus
        title="Following"
        iconStarBorder={<MdStarBorder />}
        active={<Active />}
      />
      <Menus title="Time Records" iconMdTimer={<MdTimer />} />
      <Menus title="Members" iconFaUsers={<FaUsers />} active={<Active />} />
      <Menus title="Settings" iconFiSettings={<FiSettings />} />
    </section>
  );
};

export const Menus = ({
  title,
  projetK,
  projetA,
  iconTime,
  iconboard,
  iconStarBorder,
  iconMdTimer,
  iconFaUsers,
  iconFiSettings,
  iconArrowDown,
  active,
}) => {
  return (
    <div className="menus">
      {iconTime}
      {iconboard}
      {iconStarBorder}
      {iconMdTimer}
      {iconFaUsers}
      {iconFiSettings}
      {active}
      {title}
      {iconArrowDown}
      <div className="menus_items">
        <a href="/">{projetK}</a>
        <a href="/">{projetA}</a>
      </div>
    </div>
  );
};

export default Menu;
