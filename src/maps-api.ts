import axios from 'axios';
import { TomTomResponse, TomTomSearchResult, AddressResult } from './types';


// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string): Promise<AddressResult[]> {
    const autocomplete = await axios.get<TomTomResponse>(`https://api.tomtom.com/search/2/search/${address}.json'`, {
        params: {
            key,
            limit: 100,
            countrySet: 'AU',
          }
    });

    if (!autocomplete.data.results?.length) {
        return [];
      }
      console.log(autocomplete.data.results);
    return autocomplete.data.results.map(mapToAddressResult);
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
      freeformAddress: result.address.freeformAddress
    };
  }
