import reducer, { addPost, deletePost } from '../../../store/profile/profileSlice';

describe('Add post on the main page', () => {
  test('should add a new post', () => {
    const state = {
      posts: [
        { id: 1, message: 'Hi, how are you?', likes: 15 },
        { id: 2, message: 'My first post', likes: 20 },
      ],
    };

    const action = addPost('Hello World!');
    const result = reducer(state, action).posts.length;

    expect(result).toBe(3);
  });

  test('the new message should be correct', () => {
    const state = {
      posts: [
        { id: 1, message: 'Hi, how are you?', likes: 15 },
        { id: 2, message: 'My first post', likes: 20 },
      ],
    };

    const action = addPost('Hello World!');
    const result = reducer(state, action).posts[2].message;

    expect(result).toBe('Hello World!');
  });

  test('delete the post', () => {
    const state = {
      posts: [
        { id: 1, message: 'Hi, how are you?', likes: 15 },
        { id: 2, message: 'My first post', likes: 20 },
      ],
    };

    const action = deletePost(1);
    const result = reducer(state, action).posts.length;

    expect(result).toBe(1);
  })
});
