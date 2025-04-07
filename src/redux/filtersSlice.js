import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
	  status: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
	    return {
        ...state,
        status: action.payload,
      };
    },
  },
});

// Eylem fabrikalarını dışa aktarıyoruz
export const { setStatusFilter } = slice.actions;

// Parçanın redüktörünü dışa aktarıyoruz
export default slice.reducer;