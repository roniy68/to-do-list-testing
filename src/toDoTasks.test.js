import { add, remove, modify } from './toDoTasks.js';
import * as localStorage from './localStorage.js';

// Testing for add function

describe('Testing add method', () => {
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

  const task = {
    description: 'Learn React',
    completed: false,
    index: 1,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Add first task into list', () => {
    jest.spyOn(localStorage, 'getTasks').mockReturnValueOnce([]);
    jest.spyOn(localStorage, 'saveTasks').mockReturnValueOnce([].push(task));

    expect(add(task)).toContainEqual(task);
  });

  test('Add task into list which have several tasks, the index should be 4', () => {
    jest.spyOn(localStorage, 'getTasks').mockReturnValueOnce(tasks);
    jest.spyOn(localStorage, 'saveTasks').mockReturnValueOnce(tasks.push(task));

    expect(add(task)[3].index).toBe(4);
  });
});

// Testing for remove function

describe('Testing remove method', () => {
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
    {
      description: 'Read Programming book',
      completed: false,
      index: 4,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Remove last task of list', () => {
    jest.spyOn(localStorage, 'getTasks').mockReturnValueOnce(tasks);
    jest.spyOn(localStorage, 'saveTasks').mockReturnValueOnce(tasks);

    const result = remove(3);

    expect(result.length).toBe(3);
  });

  test('Remove the middle task and refresh index of list, the second task index should be 2', () => {
    jest.spyOn(localStorage, 'getTasks').mockReturnValueOnce(tasks);
    jest.spyOn(localStorage, 'saveTasks').mockReturnValueOnce(tasks);

    const result = remove(2);

    expect(result[1].index).toBe(2);

    expect(result[1].description).toBe('Read Programming book');
  });
});

// Testing for modify function

describe('Testing modify method', () => {
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
    {
      description: 'Read Programming book',
      completed: false,
      index: 4,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Modify last task of list', () => {
    jest.spyOn(localStorage, 'getTasks').mockReturnValueOnce(tasks);
    jest.spyOn(localStorage, 'saveTasks').mockReturnValueOnce(tasks);

    modify('Complete reading Programming book', 3);

    expect(tasks[3].description).toBe('Complete reading Programming book');
  });
});
