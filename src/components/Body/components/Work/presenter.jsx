import React, { Component } from 'react';

import { Project, Talk } from './components';

import styles from './styles.css';

import work from './work';

class Work extends Component {
  render() {
    const projects = work.projects.map(project => <div>{project.title}</div>);
    const talks = work.talks.map(talk => <div>{talk.title}</div>);
    const openSource = work.openSource.map(os => <div>{os.title}</div>);

    return (
      <div className={styles.work}>
        {projects}
        {talks}
        {openSource}
      </div>
    );
  }
}

export default Work;
