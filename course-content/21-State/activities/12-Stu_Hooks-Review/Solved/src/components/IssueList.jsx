/* eslint-disable react/prop-types */
import IssueItem from './IssueItem';

// Here we accept an array of issues as a prop
const IssueList = ({ issues }) => {
  console.log('IssueList -> issues', issues);

  // We create a list of rendered IssueItems by using the map method on `issues`
  const renderedList = issues.map((issue) => {
    return <IssueItem key={issue.id} issue={issue} />;
  });

  // Here we return our array of IssueItems wrapped inside a parent div
  return issues.length > 0 ? <div className="ui relaxed divided list">{renderedList}</div> : <p>No Issues to dislay</p>;
};

export default IssueList;
