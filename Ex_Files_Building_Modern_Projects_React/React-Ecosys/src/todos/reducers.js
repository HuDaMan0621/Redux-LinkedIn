import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [] , action) => {  // the reducer takes 2 args, state and action, it's a function '=> {}'
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text, 
                isCompleted: false,
            };
            return state.concat(newTodo); // not to mutate the state

        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
    default: 
        return state; //returning the unchanged state
    }
}