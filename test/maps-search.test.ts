import { config } from 'dotenv'
import { describe } from '@jest/globals'
import { getPlaceAutocomplete } from '../src/maps-api'
import { getAutoCompleteDetails } from '../src'
import axios from 'axios';

config();
const apiKey = process.env.TOMTOM_API_KEY;
// These are end-to-end tests and need an api key
describe('Tomtom Places E2E Tests', () => {
    describe('getAutoCompleteDetails', () => {
        it ('returns a promise', () => {
            const res = getAutoCompleteDetails('Charlotte Street')
            expect(res).toBeInstanceOf(Promise)
        })

        it('can fetch from the autocomplete api', async () => {
            const res = await getAutoCompleteDetails('Charlotte Street')
            const firstRes = res[0];
            expect(firstRes).toHaveProperty('placeId')
            expect(firstRes).toHaveProperty('streetNumber')
            expect(firstRes).toHaveProperty('countryCode')
            expect(firstRes).toHaveProperty('country')
            expect(firstRes).toHaveProperty('freeformAddress')
            expect(firstRes).toHaveProperty('municipality')
            expect(firstRes).toHaveProperty('latitude')
            expect(firstRes).toHaveProperty('longitude')
            expect(firstRes).toHaveProperty('state')
            expect(firstRes).toHaveProperty('streetName')
        })
    })

    describe('getPlaceAutocomplete', () => {
        if (!apiKey) {
            throw new Error('TOMTOM_API_KEY environment variable is not set');
        }

        it('handles no results', async () => {
            const res = await getPlaceAutocomplete(apiKey, 'asfasffasfasafsafs');
            expect(res).toStrictEqual([])
        })

        it('handles error', async () => {
            expect(getPlaceAutocomplete(apiKey, '')).rejects.toThrow()
        })

        it('handles special characters in address', async () => {
            const res = await getPlaceAutocomplete(apiKey, 'Charlotte Street #123');
            expect(res).toBeInstanceOf(Array);
        });

        it('handles invalid API key', async () => {
            await expect(getPlaceAutocomplete('invalid_key', 'Charlotte Street')).rejects.toThrow('TomTom API error');
        });

        it('handles network failure', async () => {
            jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.reject(new Error('Network Error')));
            await expect(getPlaceAutocomplete(apiKey, 'Charlotte Street')).rejects.toThrow('Network Error');
        });
    })

})
