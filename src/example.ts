import { getAutoCompleteDetails } from './index';
import { config } from 'dotenv';

config();

async function example() {
    try {
        const results = await getAutoCompleteDetails('123 Charlotte Street');
        console.log('Search Results:');
        console.log(JSON.stringify(results, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

example();