import { getPlaceAutocomplete } from './maps-api';
import { config } from 'dotenv';

config();


export async function getAutoCompleteDetails(address: any): Promise<any> {
    const apiKey = process.env.TOMTOM_API_KEY;
    if (!apiKey) {
        throw new Error('TOMTOM_API_KEY environment variable is not set');
      }
    // get autocomplete results
    const res = getPlaceAutocomplete(apiKey, address).then(async (autocompleteResults) => {
        const res = []
        return res
    })
    // loop over and get details and map results
    return res
}
