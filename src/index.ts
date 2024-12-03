import { getPlaceAutocomplete } from './maps-api';
import { config } from 'dotenv';
import { AddressResult } from './types';

config();


export async function getAutoCompleteDetails(address: string): Promise<AddressResult[]> {
    const apiKey = process.env.TOMTOM_API_KEY;
    if (!apiKey) {
        throw new Error('TOMTOM_API_KEY environment variable is not set');
      }
    // get autocomplete results
    return await getPlaceAutocomplete(apiKey, address);
}
