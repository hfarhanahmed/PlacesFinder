import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PlaceResult = {
  placeId: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
};

type PlacesState = {
  predictions: { description: string; placeId: string }[];
  searchHistory: string[];
  selected?: PlaceResult | null;
};

const initialState: PlacesState = {
  predictions: [],
  searchHistory: [],
  selected: null,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPredictions(state, action: PayloadAction<{ description: string; placeId: string }[]>) {
      state.predictions = action.payload;
    },
    addToHistory(state, action: PayloadAction<string>) {
      state.searchHistory = [action.payload, ...state.searchHistory.filter(h => h !== action.payload)].slice(0, 20);
    },
    clearPredictions(state) {
      state.predictions = [];
    },
    setSelectedPlace(state, action: PayloadAction<PlaceResult | null>) {
      state.selected = action.payload;
    }
  }
});

export const { setPredictions, addToHistory, clearPredictions, setSelectedPlace } = placesSlice.actions;
export default placesSlice.reducer;