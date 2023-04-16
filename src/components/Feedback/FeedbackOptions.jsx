import PropTypes from 'prop-types';
import { FeedbackBtns } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackBtns onClick={onLeaveFeedback}>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button">{option}</button>
            </li>
          );
        })}
      </FeedbackBtns>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.elementType,
};

export default FeedbackOptions;
