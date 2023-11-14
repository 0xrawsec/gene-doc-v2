import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Non pulvinar neque laoreet suspendisse interdum consectetur libero. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.
      </>
    ),
  },
  {
    title: 'Fast',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Quisque egestas diam in arcu cursus euismod. Non tellus orci ac auctor augue mauris augue.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
