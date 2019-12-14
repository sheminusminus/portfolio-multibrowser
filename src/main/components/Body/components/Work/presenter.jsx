import React from 'react';

import { classie } from 'utils';

import { work } from 'data';

import { Divider } from 'components';

import styles from './styles.module.css';

const sections = Object.keys(work);

const Work = ({ theme }) => (
  <div className={styles.work}>
    {sections.map((key, i) => {
      const { Component, heading, items, subheading } = work[key];

      const isNotLast = i < sections.length - 1;

      return (
        <React.Fragment key={key}>
          <h2 className={classie([theme.heading, styles.heading])} id={key}>
            {heading}
          </h2>

          {subheading && (
            <h4 className={classie([theme.subheading, styles.subheading])}>
              {subheading}
            </h4>
          )}

          <div className={styles.grid}>
            {items.map((item, idx) => (
              <Component
                date={item.date}
                href={item.href}
                image={item.image}
                images={item.images}
                isFeatured={item.isFeatured}
                key={item.title}
                last={idx === items.length - 1}
                title={item.title}
                type={item.type}
                venue={item.venue}
              />
            ))}
          </div>

          {isNotLast && <Divider />}
        </React.Fragment>
      );
    })}
  </div>
);

export default Work;
