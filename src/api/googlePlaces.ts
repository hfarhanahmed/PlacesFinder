import { GOOGLE_API_KEY, GOOGLE_PLACES_AUTOCOMPLETE_URL, GOOGLE_PLACE_DETAILS_URL } from '../config';

export type Prediction = {
  description: string;
  place_id: string;
};

export async function fetchPlacePredictions(input: string): Promise<Prediction[]> {
  if (!input) return [];
  const url = `${GOOGLE_PLACES_AUTOCOMPLETE_URL}?input=${encodeURIComponent(input)}&key=${GOOGLE_API_KEY}&types=geocode`;
  const res = await fetch(url);
  const json = await res.json();
  if (json.status !== 'OK') return [];
  return json.predictions.map((p: any) => ({ description: p.description, place_id: p.place_id }));
}

export async function fetchPlaceDetails(placeId: string) {
  const url = `${GOOGLE_PLACE_DETAILS_URL}?place_id=${placeId}&key=${GOOGLE_API_KEY}&fields=geometry,name,formatted_address`;
  const res = await fetch(url);
  const json = await res.json();
  if (json.status !== 'OK') throw new Error(json.error_message || 'Failed to fetch place details');
  return json.result;
}