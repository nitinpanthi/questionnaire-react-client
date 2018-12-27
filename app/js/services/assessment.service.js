export const getEditableAssessments = () => fetch('/secured/api/assessments?type=editable');
export const getReadOnlyAssessments = () => fetch('/secured/api/assessments?type=readonly');
export const get = assessmentId => fetch(`/secured/api/assessment/${assessmentId}`);

export const create = assessment => fetch('/secured/api/assessment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}, assessment);

export const remove = assessmentId => fetch(`/secured/api/user/${assessmentId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});
