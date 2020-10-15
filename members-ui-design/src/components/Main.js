import React from 'react';
import CardUsers from './CardUsers';
import './_main.scss';

const Main = () => {
  return (
    <main className="main_component">
      <Members title="Members" links={['Members', 'Teams', 'Pending']} />
      <CardUsers />
    </main>
  );
};

const Members = ({ title, links }) => {
  return (
    <>
      <h4>{title}</h4>
      <div className="links">
        {links.map((link, index) => (
          <a href="/" key={index}>
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Main;
