import { combineEpics, ofType } from 'redux-observable';
import { debounceTime, switchMap } from 'rxjs';
import { fetchPlaceDetails, fetchPlacePredictions } from '../api/googlePlaces';

// Action types (string literals used indirectly via actions in slice; use plain action type strings here)
const PREDICTION_REQUEST = 'places/predictionRequest';
const PLACE_DETAILS_REQUEST = 'places/placeDetailsRequest';

export const predictionRequest = (payload: { input: string }) => ({ type: PREDICTION_REQUEST, payload });
export const placeDetailsRequest = (payload: { placeId: string }) => ({ type: PLACE_DETAILS_REQUEST, payload });

const fetchPredictionsEpic = (action$: any) => action$.pipe(
  ofType(PREDICTION_REQUEST),
  debounceTime(300),
  switchMap((action: any) =>
    fetchPlacePredictions(action.payload.input)
      .then((predictions) => ({ type: 'places/setPredictions', payload: predictions.map((p: any) => ({ description: p.description, placeId: p.place_id })) }))
      .catch(() => ({ type: 'places/setPredictions', payload: [] }))
  )
);

const fetchPlaceDetailsEpic = (action$: any) => action$.pipe(
  ofType(PLACE_DETAILS_REQUEST),
  switchMap((action: any) =>
    fetchPlaceDetails(action.payload.placeId)
      .then((details: any) => ({ type: 'places/setSelectedPlace', payload: {
        placeId: action.payload.placeId,
        name: details.name,
        address: details.formatted_address,
        lat: details.geometry.location.lat,
        lng: details.geometry.location.lng
      }}))
      .catch(() => ({ type: 'places/setSelectedPlace', payload: null }))
  )
);

export const rootEpic = combineEpics(fetchPredictionsEpic, fetchPlaceDetailsEpic);