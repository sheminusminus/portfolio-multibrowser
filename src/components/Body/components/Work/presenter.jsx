import React from 'react';

import { classie } from 'utils';

import { OpenSource, Project, Talk } from './components';

import Divider from '../Divider';

import styles from './styles.module.css';

import work from './work';

const Work = (props) => {
  const { theme } = props;

  const { featured } = work;

  const featuredProject = (
    <Project
      type={featured.type}
      isFeatured={true}
      title={featured.title}
      images={featured.images}
      href={featured.href} />
  );

  const projects = work.projects.map((p, idx) =>
    <Project
      type={p.type}
      last={idx === work.projects.length - 1}
      key={`work-project-${idx}`}
      title={p.title}
      href={p.href}
      image={p.image} />);

  const talks = work.talks.map((t, idx) =>
    <Talk
      key={`work-talk-${idx}`}
      title={t.title}
      venue={t.venue}
      date={t.date}
      href={t.href}
      image={t.image} />);

  const openSource = work.openSource.map((os, idx) =>
    <OpenSource
      key={`open-source-${idx}`}
      images={os.images}
      image={os.image}
      href={os.href}
      title={os.title} />);

  return (
    <div className={styles.work}>
      <h2
        id="work"
        className={classie([theme.heading, styles.heading])}
      >
        Work
      </h2>

      <h4 className={classie([theme.subheading, styles.subheading])}>
        (That you can find in the wild)
      </h4>

      <div className={styles.gridFeatured}>
        {featuredProject}
      </div>

      <div className={styles.grid}>
        {projects}
      </div>

      <Divider />

      <h2
        id="talks"
        className={classie([theme.heading, styles.heading, styles.otherHeading])}
      >
        Talks
      </h2>

      <div className={styles.grid}>
        {talks}
      </div>

      <Divider />

      <h2
        id="openSource"
        className={classie([theme.heading, styles.heading, styles.otherHeading])}
      >
        Open Source
      </h2>

      <div className={styles.grid}>
        {openSource}
      </div>
    </div>
  );
};

export default Work;
