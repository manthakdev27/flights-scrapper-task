const MockJSON = {
  auto: {
    data: [
      {
        presentation: {
          title: "New Delhi",
          suggestionTitle: "New Delhi (DEL)",
          subtitle: "India",
          id: "eyJlIjoiMTI4NjY3NTA0IiwicyI6IkRFTCIsImgiOiIyNzU0MjgwMSIsInQiOiJBSVJQT1JUIn0=",
          skyId: "DEL",
        },
        navigation: {
          entityId: "128667505",
          entityType: "AIRPORT",
          localizedName: "New Delhi",
          relevantFlightParams: {
            skyId: "DEL",
            entityId: "128667505",
            flightPlaceType: "AIRPORT",
            localizedName: "New Delhi",
          },
          relevantHotelParams: {
            entityId: "27542802",
            entityType: "CITY",
            localizedName: "New Delhi",
          },
        },
      },
      {
        presentation: {
          title: "Goa",
          suggestionTitle: "Goa (GOI)",
          subtitle: "India",
          id: "eyJlIjoiOTU3OTAzMDYiLCJzIjoiR09JIiwiaCI6IjI3NTQxODg4IiwidCI6IkFJUlBPUlQifQ==",
          skyId: "GOI",
        },
        navigation: {
          entityId: "95790306",
          entityType: "AIRPORT",
          localizedName: "Goa",
          relevantFlightParams: {
            skyId: "GOI",
            entityId: "95790306",
            flightPlaceType: "AIRPORT",
            localizedName: "Goa",
          },
          relevantHotelParams: {
            entityId: "27541888",
            entityType: "CITY",
            localizedName: "Marmagao",
          },
        },
      },
    ],
    status: true,
    message: "Successful",
  },
  data: {
    data: {
      context: {
        status: "incomplete",
        sessionId:
          "ClsIARJXCk4KJGEzOTgwNDg4LTU1MTEtNDIwZC04NmU5LTU5YmIxOGE2NTA2YRACGiQ1ZTU3M2UwYS04MzAxLTQ5YTYtYWQ3OS01YTAyZWRhMGRkM2QQytvw168yEih1c3NfYjhkYTExYmItODJiMC00MzVhLWEwNzYtOTc4ZDY4NmRjZTI3",
        totalResults: 10,
      },
      itineraries: [
        {
          id: "12423-2411061220--32213-0-11906-2411061355",
          price: {
            raw: 173.28,
            formatted: "$174",
            pricingOptionId: "X-n4MCHqoTDA",
          },
          legs: [
            {
              id: "12423-2411061220--32213-0-11906-2411061355",
              origin: {
                id: "DEL",
                entityId: "128667504",
                name: "New Delhi",
                displayCode: "DEL",
                city: "New Delhi",
                country: "India",
                isHighlighted: false,
              },
              destination: {
                id: "GOI",
                entityId: "95790306",
                name: "Goa",
                displayCode: "GOI",
                city: "Marmagao",
                country: "India",
                isHighlighted: false,
              },
              durationInMinutes: 95,
              stopCount: 0,
              isSmallestStops: false,
              departure: "2024-11-06T12:20:00",
              arrival: "2024-11-06T13:55:00",
              timeDeltaInDays: 0,
              carriers: {
                marketing: [
                  {
                    id: -32213,
                    logoUrl:
                      "https://logos.skyscnr.com/images/airlines/favicon/49.png",
                    name: "IndiGo",
                  },
                ],
                operationType: "fully_operated",
              },
              segments: [
                {
                  id: "12423-11906-2411061220-2411061355--32213",
                  origin: {
                    flightPlaceId: "DEL",
                    displayCode: "DEL",
                    parent: {
                      flightPlaceId: "IDEL",
                      displayCode: "DEL",
                      name: "New Delhi",
                      type: "City",
                    },
                    name: "New Delhi",
                    type: "Airport",
                    country: "India",
                  },
                  destination: {
                    flightPlaceId: "GOI",
                    displayCode: "GOI",
                    parent: {
                      flightPlaceId: "IGOI",
                      displayCode: "GOI",
                      name: "Marmagao",
                      type: "City",
                    },
                    name: "Goa",
                    type: "Airport",
                    country: "India",
                  },
                  departure: "2024-11-06T12:20:00",
                  arrival: "2024-11-06T13:55:00",
                  durationInMinutes: 95,
                  flightNumber: "6219",
                  marketingCarrier: {
                    id: -32213,
                    name: "IndiGo",
                    alternateId: "49",
                    allianceId: 0,
                    displayCode: "",
                  },
                  operatingCarrier: {
                    id: -32213,
                    name: "IndiGo",
                    alternateId: "49",
                    allianceId: 0,
                    displayCode: "",
                  },
                },
              ],
            },
          ],
          isSelfTransfer: false,
          isProtectedSelfTransfer: false,
          farePolicy: {
            isChangeAllowed: false,
            isPartiallyChangeable: false,
            isCancellationAllowed: false,
            isPartiallyRefundable: false,
          },
          eco: {
            ecoContenderDelta: 26.693636,
          },
          fareAttributes: {},
          tags: ["shortest"],
          isMashUp: false,
          hasFlexibleOptions: false,
          score: 0.999,
        },
        {
          id: "12423-2411060730--32213-1-11906-2411061230",
          price: {
            raw: 141.9,
            formatted: "$142",
            pricingOptionId: "M6ngy0vTpCkS",
          },
          legs: [
            {
              id: "12423-2411060730--32213-1-11906-2411061230",
              origin: {
                id: "DEL",
                entityId: "128667504",
                name: "New Delhi",
                displayCode: "DEL",
                city: "New Delhi",
                country: "India",
                isHighlighted: false,
              },
              destination: {
                id: "GOI",
                entityId: "95790306",
                name: "Goa",
                displayCode: "GOI",
                city: "Marmagao",
                country: "India",
                isHighlighted: false,
              },
              durationInMinutes: 300,
              stopCount: 1,
              isSmallestStops: false,
              departure: "2024-11-06T07:30:00",
              arrival: "2024-11-06T12:30:00",
              timeDeltaInDays: 0,
              carriers: {
                marketing: [
                  {
                    id: -32213,
                    logoUrl:
                      "https://logos.skyscnr.com/images/airlines/favicon/49.png",
                    name: "IndiGo",
                  },
                ],
                operationType: "fully_operated",
              },
              segments: [
                {
                  id: "12423-12371-2411060730-2411060850--32213",
                  origin: {
                    flightPlaceId: "DEL",
                    displayCode: "DEL",
                    parent: {
                      flightPlaceId: "IDEL",
                      displayCode: "DEL",
                      name: "New Delhi",
                      type: "City",
                    },
                    name: "New Delhi",
                    type: "Airport",
                    country: "India",
                  },
                  destination: {
                    flightPlaceId: "HYD",
                    displayCode: "HYD",
                    parent: {
                      flightPlaceId: "IHYD",
                      displayCode: "HYD",
                      name: "Hyderabad",
                      type: "City",
                    },
                    name: "Hyderabad",
                    type: "Airport",
                    country: "India",
                  },
                  departure: "2024-11-06T07:30:00",
                  arrival: "2024-11-06T08:50:00",
                  durationInMinutes: 80,
                  flightNumber: "378",
                  marketingCarrier: {
                    id: -32213,
                    name: "IndiGo",
                    alternateId: "49",
                    allianceId: 0,
                    displayCode: "",
                  },
                  operatingCarrier: {
                    id: -32213,
                    name: "IndiGo",
                    alternateId: "49",
                    allianceId: 0,
                    displayCode: "",
                  },
                },
                {
                  id: "12371-11906-2411061120-2411061230--32213",
                  origin: {
                    flightPlaceId: "HYD",
                    displayCode: "HYD",
                    parent: {
                      flightPlaceId: "IHYD",
                      displayCode: "HYD",
                      name: "Hyderabad",
                      type: "City",
                    },
                    name: "Hyderabad",
                    type: "Airport",
                    country: "India",
                  },
                  destination: {
                    flightPlaceId: "GOI",
                    displayCode: "GOI",
                    parent: {
                      flightPlaceId: "IGOI",
                      displayCode: "GOI",
                      name: "Marmagao",
                      type: "City",
                    },
                    name: "Goa",
                    type: "Airport",
                    country: "India",
                  },
                  departure: "2024-11-06T11:20:00",
                  arrival: "2024-11-06T12:30:00",
                  durationInMinutes: 70,
                  flightNumber: "362",
                  marketingCarrier: {
                    id: -32213,
                    name: "IndiGo",
                    alternateId: "49",
                    allianceId: 0,
                    displayCode: "",
                  },
                  operatingCarrier: {
                    id: -32213,
                    name: "IndiGo",
                    alternateId: "49",
                    allianceId: 0,
                    displayCode: "",
                  },
                },
              ],
            },
          ],
          isSelfTransfer: false,
          isProtectedSelfTransfer: false,
          farePolicy: {
            isChangeAllowed: false,
            isPartiallyChangeable: false,
            isCancellationAllowed: false,
            isPartiallyRefundable: false,
          },
          fareAttributes: {},
          tags: ["second_cheapest"],
          isMashUp: false,
          hasFlexibleOptions: false,
          score: 0.640383,
        },
      ],
      messages: [],
      filterStats: {
        duration: {
          min: 95,
          max: 1360,
          multiCityMin: 95,
          multiCityMax: 1360,
        },
        airports: [
          {
            city: "New Delhi",
            airports: [
              {
                id: "DEL",
                entityId: "128667504",
                name: "New Delhi",
              },
            ],
          },
          {
            city: "Marmagao",
            airports: [
              {
                id: "GOI",
                entityId: "95790306",
                name: "Goa",
              },
            ],
          },
        ],
        carriers: [
          {
            id: -32672,
            logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/AI.png",
            name: "Air India",
          },
          {
            id: -32213,
            logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/49.png",
            name: "IndiGo",
          },
        ],
        stopPrices: {
          direct: {
            isPresent: true,
            formattedPrice: "$174",
          },
          one: {
            isPresent: true,
            formattedPrice: "$142",
          },
          twoOrMore: {
            isPresent: true,
            formattedPrice: "$175",
          },
        },
      },
      flightsSessionId: "a3980488-5511-420d-86e9-59bb18a6506a",
      destinationImageUrl:
        "https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg",
      token:
        "eyJhIjoxLCJjIjowLCJpIjowLCJjYyI6ImVjb25vbXkiLCJvIjoiSURSIiwiZCI6IkdPSSIsImQxIjoiMjAyNC0xMS0wNiJ9",
    },
    status: true,
    message: "Successful",
  },
};
export default MockJSON;
