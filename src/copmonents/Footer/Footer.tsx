import classNames from 'classnames';
import { FilterStatus } from '../../types/FilterStatus';

type Props = {
  setFilterStatus: (link: FilterStatus) => void;
  filterStatus: FilterStatus;
  todosActiveQuantity: number;
  todosComplitedQuantity: number;
  clearAllComplitedTodos: () => void;
};

export const Footer: React.FC<Props> = ({
  setFilterStatus,
  filterStatus,
  todosActiveQuantity,
  todosComplitedQuantity,
  clearAllComplitedTodos,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {todosActiveQuantity} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: filterStatus === 'all',
          })}
          data-cy="FilterLinkAll"
          onClick={() => setFilterStatus('all')}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: filterStatus === 'active',
          })}
          data-cy="FilterLinkActive"
          onClick={() => setFilterStatus('active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: filterStatus === 'completed',
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilterStatus('completed')}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={todosComplitedQuantity === 0}
        onClick={clearAllComplitedTodos}
      >
        Clear completed
      </button>
    </footer>
  );
};
