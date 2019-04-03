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
    <div className="assessment">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <p className="description">{description}</p>
      <span className="score">
        Average Score: {score}
      </span>
      <div className="categories">
        <div className="category_title">
          Categories
        </div>
        <ul>{classificationItems}</ul>
      </div>
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
