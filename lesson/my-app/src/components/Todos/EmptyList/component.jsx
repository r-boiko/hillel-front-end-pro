import useTestHook from '../../../hooks/useTestHook';

import './styles.scss';

const EmptyList = () => {

  useTestHook();

  return (
    <div className="empty-list">
      Empty list
    </div>
  )
}

export default EmptyList;
