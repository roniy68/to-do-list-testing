import { updateStatusTask, clearAllCompleted } from './statusTask.js';
import * as localStorage from './localStorage.js';
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

  const task = {
    description: 'Learn React',
    completed: false,
    index: 1,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

});

// Testing for updating funciton

describe('Testing remove method', () => {
  const tasks = [
    {
      description: 'Fix err of last project',
      completed: false,
      index: 1,
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Remove last task of list', () => {
    //update funciton test
  });

 
});

