import axios from 'axios';
import { TomTomResponse, TomTomSearchResult, AddressResult } from './types';


// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string): Promise<AddressResult[]> {
  if (!address.trim()) {
    throw new Error('Address cannot be empty');
  }
  try {
    const autocomplete = await axios.get<TomTomResponse>(`https://api.tomtom.com/search/2/search/${encodeURIComponent(address)}.json`, {
        params: {
            key,
            limit: 100,
            countrySet: 'AU',
          }
    });

    if (!autocomplete.data.results?.length) {
        return [];
      }

    return autocomplete.data.results.map(mapToAddressResult);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`TomTom API error: ${error.message}`);
    }
    throw error;
  }
}

function mapToAddressResult(result: TomTomSearchResult): AddressResult {
    return {
      placeId: result.id,
      streetNumber: result.address.streetNumber,
      streetName: result.address.streetName,
      municipality: result.address.municipality,
      state: result.address.countrySubdivision,
      country: result.address.country,
      countryCode: result.address.countryCode,
      freeformAddress: result.address.freeformAddress,
      latitude: result.position.lat,
      longitude: result.position.lon
    };
  }
