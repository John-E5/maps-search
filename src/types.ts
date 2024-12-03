export interface TomTomSearchResult {
  id: string;
  address: {
    streetNumber?: string;
    streetName?: string;
    municipality?: string;
    countrySubdivision?: string;
    country: string;
    countryCode: string;
    freeformAddress: string;
  };
  position: {
    lat: number;
    lon: number;
  };
}

export interface AddressResult {
  placeId: string;
  streetNumber?: string;
  streetName?: string;
  municipality?: string;
  state?: string;
  country: string;
  countryCode: string;
  freeformAddress: string;
  latitude: number;
  longitude: number;
}

export interface TomTomResponse {
  results: TomTomSearchResult[];
}


 /*  The TomTom API response 
 {
 "summary": {
    "query": "charlotte street",
    "queryType": "NON_NEAR",
    "queryTime": 53,
    "numResults": 1,
    "offset": 0,
    "totalResults": 75,
    "fuzzyLevel": 1,
    "geoBias": {
      "lat": 37.337,
      "lon": -121.89
    },
    "queryIntent": []
  },
  "results": [
    {
      "type": "POI",
      "id": "TUF36Ppk-esF2d82yzaSTw",
      "score": 4.1886878014,
      "dist": 11402738.76147,
      "info": "search:ta:036006000081245-AU",
      "poi": {
        "name": "Hajime Japanese Restaurant",
        "phone": "+61 432 857 887",
        "categorySet": [
          {
            "id": 7315026
          }
        ],
        "categories": [
          "japanese",
          "restaurant"
        ],
        "classifications": [
          {
            "code": "RESTAURANT",
            "names": [
              {
                "nameLocale": "en-US",
                "name": "restaurant"
              },
              {
                "nameLocale": "en-US",
                "name": "japanese"
              }
            ]
          }
        ]
      },
      "address": {
        "streetNumber": "66",
        "streetName": "Bay Terrace",
        "municipalitySubdivision": "Wynnum",
        "municipality": "Brisbane",
        "countrySecondarySubdivision": "Brisbane",
        "countrySubdivision": "Queensland",
        "countrySubdivisionName": "Queensland",
        "countrySubdivisionCode": "QLD",
        "postalCode": "4178",
        "countryCode": "AU",
        "country": "Australia",
        "countryCodeISO3": "AUS",
        "freeformAddress": "66 Bay Terrace, Wynnum, QLD, 4178",
        "localName": "Wynnum"
      },
      "position": {
        "lat": -27.442773,
        "lon": 153.172993
      },
      "viewport": {
        "topLeftPoint": {
          "lat": -27.44187,
          "lon": 153.17198
        },
        "btmRightPoint": {
          "lat": -27.44367,
          "lon": 153.17401
        }
      },
      "entryPoints": [
        {
          "type": "main",
          "position": {
            "lat": -27.44286,
            "lon": 153.17307
          }
        }
      ]
    }
  ]
}
 */