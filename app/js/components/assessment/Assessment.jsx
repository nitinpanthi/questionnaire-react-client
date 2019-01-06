import React from 'react';
import PropTypes from 'prop-types';

const Assessment = ({
  classifications,
  title,
  description,
  score,
}) => {
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
  classifications: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Assessment;
