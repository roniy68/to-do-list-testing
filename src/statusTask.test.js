/**
 * @jest-environment jsdom
 */

import { updateStatusTask, clearBtnAll } from './statusTask.js';
import * as localStorage from './localStorage.js';
import * as statusTasks from './statusTask.js';

// Testing for editing function

describe('Testing editing method', () => {
  const tasks = [
    {
      description: 'Fix err of last project',
      completed: false,
      index: 1,
    },
    {
      description: 'Complete test exercises',
      completed: false,
      index: 2,
    },
    {
      description: 'Meeting with coding partner',
      completed: false,
      index: 3,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Update status of the second task, completed propertie would be true', () => {
    jest.spyOn(localStorage, 'getTasks').mockReturnValueOnce(tasks);
    jest.spyOn(localStorage, 'saveTasks').mockReturnValueOnce(tasks);

    updateStatusTask(true, 2);
    expect(tasks[2].completed).toBe(true);
  });

});

// Testing for delete all completed task funciton

describe('Testing delete all completed task method', () => {
  const tasks = [
    {
      description: 'Fix err of last project',
      completed: true,
      index: 1,
    },
    {
      description: 'Complete test exercises',
      completed: false,
      index: 2,
    },
    {
      description: 'Meeting with coding partner',
      completed: false,
      index: 3,
    },
    {
      description: 'Read Programming book',
      completed: true,
      index: 4,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Delete those tasks have completed propertie is true', () => {
    jest.spyOn(localStorage, 'getTasks').mockReturnValueOnce(tasks);
    jest.spyOn(localStorage, 'saveTasks').mockReturnValueOnce(tasks);

    const mockClearAll = jest.spyOn(statusTasks, 'clearAllCompleted');

    document.body.innerHTML = `
      <button id="clear-completed">Clear all completed</button>
    `;

    const btnClear = document.getElementById('clear-completed');
    let result;

    btnClear.addEventListener = jest.fn().mockImplementationOnce((event) => {
      result = mockClearAll();
    });

    clearBtnAll();

    expect(btnClear.addEventListener).toBeCalledWith(
      'click',
      expect.any(Function)
    );

    expect(mockClearAll).toBeCalledTimes(1);

    expect(result).toHaveLength(2);
    expect(result[0].description).toBe('Complete test exercises');
    expect(result[0].index).toBe(1);
  });
});
