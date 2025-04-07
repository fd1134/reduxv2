import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // Parçanın adı
  name: "tasks",
  // Parçanın redüktörünün başlangıç durumu
  initialState: {
		items: [
	    { id: 0, text: 'Learn HTML and CSS', completed: true },
	    { id: 1, text: 'Get good at JavaScript', completed: true },
	    { id: 2, text: 'Master React', completed: false },
	    { id: 3, text: 'Discover Redux', completed: false },
	    { id: 4, text: 'Build amazing apps', completed: false },
	  ],
	},
  // Case-redüktörler nesnesi
  reducers: {
    addTask: (state, action) => {
	    return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteTask: (state, action) => {
	    return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload),
      };
    },
    toggleCompleted: (state, action) => {
	    return {
        ...state,
        items: state.items.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };
    },
  },
});

// Eylem fabrikalarını dışa aktarıyoruz
export const { addTask, deleteTask, toggleCompleted } = slice.actions;

// Parçanın redüktörünü dışa aktarıyoruz
export default slice.reducer;