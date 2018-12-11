import React from 'react';
import PropTypes from 'prop-types';

const Assessment = (props) => {
  const {
    classifications,
    title,
    description,
    score,
  } = props;

  const classificationItems = classifications.map(
    classification => <li key={classification.id}>{classification.name}</li>,
  );

  return (
    <div>
      <h1>{title}</h1>
      <ul>{classificationItems}</ul>
      <p>{description}</p>
      <span>{score}</span>
    </div>
  );
};

Assessment.defaultProps = {
  classifications: [],
};

Assessment.propTypes = {
  classifications: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Assessment;
