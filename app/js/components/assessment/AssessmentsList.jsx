import React from 'react';
import Assessment from './Assessment';

export default function AssessmentsList() {
  const assessments = [{
    id: '10010',
    title: 'abc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur nec tortor sit amet accumsan. Donec consequat tortor ac condimentum dapibus. Fusce quam enim, efficitur a consequat id, aliquam ac metus. Curabitur pretium sollicitudin ante nec malesuada. Vestibulum sit amet est orci. Pellentesque efficitur sed nulla sed placerat. Maecenas efficitur faucibus posuere. Nulla ex sapien, placerat non nulla nec, consequat imperdiet dolor. Suspendisse porttitor est ut neque rutrum efficitur. Suspendisse gravida mi sed lorem pharetra, quis bibendum sem pellentesque. Cras suscipit metus et est viverra mattis.',
    score: 80,
    classifications: [
      { id: '10010', name: 'Lorem' },
      { id: '10011', name: 'Aliquam' },
    ],
  }];

  const assessmentsToDisplay = assessments
    .map(assessment => <li key={assessment.id}><Assessment {...assessment} /></li>);

  return (
    <div>
      <section>
        <input type="search" name="filter" id="filter" />
        <ul>
          {assessmentsToDisplay}
        </ul>
      </section>
    </div>
  );
}
