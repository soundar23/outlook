const transitSearchResult =  {
  "outputCode": 41200000,
  "outputStatus": "success",
  "message": "success",
  "data": {
    "serviceName": "FlightSearch",
    "results": [
      {
        "partnerResponse": {
          "section1": {
            "requesterUserId": "90000000389",
            "travelNumber": "100117009362",
            "loggedInUserId": "90000000389",
            "producerModule": "SD.NodeEdge.SBT",
            "serviceName": "FlightSearch",
            "message": "success",
            "version": "v1.0",
            "transactionId": "100117009362_F_1_20170908-100900902-p1506338430131",
            "userOrgId": 9000,
            "timeStamp": "25-09-2017 11:20:40:377 UTC",
            "requesterOrgId": 9000,
            "requesterName": "sam",
            "w2GTripNumber": "100117009362",
            "objectName": "FlightSearchResponse",
            "action": "Airline",
            "oRGId": 1001,
            "taskId": "100117009362_F_1_20170908-100900902",
            "status": "success",
            "statusCode": 2000
          },
          "section2": {
            "partnerName": "sabre",
            "response": [
              {
                "itinerarySeqId": "AIRSBR001",
                "totJourneyTime": "520",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "6475",
                    "totalFare": "7463",
                    "tax": "988",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Breakfast",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "S"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 3,
                      "cabin": "Economy",
                      "fareReference": "S"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "S",
                        "value": "SIP",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "S",
                        "value": "SIP",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR AI DEL3000AI VNS3475INR6475END",
                    "passengerFareDetails": {
                      "totalTax": "988",
                      "baseFare": "6475",
                      "totalFare": "7463",
                      "taxDetails": [
                        {
                          "amount": 70,
                          "decimalPlaces": 0,
                          "taxCode": "YRI",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 70,
                          "decimalPlaces": 0,
                          "taxCode": "YRI",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 328,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 4,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 25,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 25,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "AI",
                        "airEquipType": "32B",
                        "departureTime": "06:10",
                        "journeySellKey": "",
                        "marketingAirlineName": "Air India",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T08:55:00",
                        "arrivalTerminalCode": "3",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "08:55",
                        "flightSegmentTime": 165,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 45min",
                        "fareReference": "S",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "25",
                        "flightNumber": "804",
                        "departureDateAndTime": "2017-10-01T06:10:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Breakfast",
                        "operatingAirlineName": "Air India",
                        "resBookDesignCode": "S",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "804",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "AI",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "AI",
                        "airEquipType": "319",
                        "departureTime": "12:10",
                        "journeySellKey": "",
                        "marketingAirlineName": "Air India",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T13:40:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "3h 15min",
                        "arrivalTime": "13:40",
                        "flightSegmentTime": 90,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 30min",
                        "fareReference": "S",
                        "arrivalAirportCode": "GAY",
                        "seatRemainingNumber": "3",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "25",
                        "flightNumber": "433",
                        "departureDateAndTime": "2017-10-01T12:10:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Air India",
                        "resBookDesignCode": "S",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "433",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "AI",
                        "departureTerminalCode": "3",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Gaya - GAY"
                      },
                      {
                        "marketingAirline": "AI",
                        "airEquipType": "319",
                        "departureTime": "14:15",
                        "journeySellKey": "",
                        "marketingAirlineName": "Air India",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T14:50:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "0h 35min",
                        "arrivalTime": "14:50",
                        "flightSegmentTime": 70,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "GAY",
                        "legDuration": "1h 10min",
                        "fareReference": "S",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "3",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "2",
                        "weight": "25",
                        "flightNumber": "433",
                        "departureDateAndTime": "2017-10-01T14:15:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Air India",
                        "resBookDesignCode": "S",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "433",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Gaya - GAY",
                        "operatingAirline": "AI",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "AI",
                "sequenceId": 1
              },
              {
                "itinerarySeqId": "AIRSBR002",
                "totJourneyTime": "325",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "7075",
                    "totalFare": "8093",
                    "tax": "1018",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Breakfast",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "S"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 5,
                      "cabin": "Economy",
                      "fareReference": "T"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "S",
                        "value": "SIP",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "T",
                        "value": "TIP",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR AI DEL3000AI VNS4075INR7075END",
                    "passengerFareDetails": {
                      "totalTax": "1018",
                      "baseFare": "7075",
                      "totalFare": "8093",
                      "taxDetails": [
                        {
                          "amount": 70,
                          "decimalPlaces": 0,
                          "taxCode": "YRI",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 70,
                          "decimalPlaces": 0,
                          "taxCode": "YRI",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 358,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 4,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 25,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 25,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "AI",
                        "airEquipType": "32B",
                        "departureTime": "06:10",
                        "journeySellKey": "",
                        "marketingAirlineName": "Air India",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T08:55:00",
                        "arrivalTerminalCode": "3",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "08:55",
                        "flightSegmentTime": 165,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 45min",
                        "fareReference": "S",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "25",
                        "flightNumber": "804",
                        "departureDateAndTime": "2017-10-01T06:10:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Breakfast",
                        "operatingAirlineName": "Air India",
                        "resBookDesignCode": "S",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "804",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "AI",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "AI",
                        "airEquipType": "321",
                        "departureTime": "10:15",
                        "journeySellKey": "",
                        "marketingAirlineName": "Air India",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T11:35:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "1h 20min",
                        "arrivalTime": "11:35",
                        "flightSegmentTime": 80,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 20min",
                        "fareReference": "T",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "5",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "25",
                        "flightNumber": "406",
                        "departureDateAndTime": "2017-10-01T10:15:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Air India",
                        "resBookDesignCode": "T",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "406",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "AI",
                        "departureTerminalCode": "3",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "AI",
                "sequenceId": 2
              },
              {
                "itinerarySeqId": "AIRSBR003",
                "totJourneyTime": "355",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "7325",
                    "totalFare": "8355",
                    "tax": "1030",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "S"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 1,
                      "cabin": "Economy",
                      "fareReference": "S"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "BOM",
                        "bookingCode": "S",
                        "value": "SIP",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "S",
                        "value": "SIP",
                        "departureAirportCode": "BOM"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR AI BOM1900AI VNS Q300 5125INR7325END",
                    "passengerFareDetails": {
                      "totalTax": "1030",
                      "baseFare": "7325",
                      "totalFare": "8355",
                      "taxDetails": [
                        {
                          "amount": 70,
                          "decimalPlaces": 0,
                          "taxCode": "YRI",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 70,
                          "decimalPlaces": 0,
                          "taxCode": "YRI",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 370,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 4,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 25,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 25,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "AI",
                        "airEquipType": "319",
                        "departureTime": "06:45",
                        "journeySellKey": "",
                        "marketingAirlineName": "Air India",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T08:25:00",
                        "arrivalTerminalCode": "2",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "08:25",
                        "flightSegmentTime": 100,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "1h 40min",
                        "fareReference": "S",
                        "arrivalAirportCode": "BOM",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "25",
                        "flightNumber": "640",
                        "departureDateAndTime": "2017-10-01T06:45:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Air India",
                        "resBookDesignCode": "S",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "640",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "AI",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Mumbai Chhatrapati Shivaji - BOM"
                      },
                      {
                        "marketingAirline": "AI",
                        "airEquipType": "319",
                        "departureTime": "10:30",
                        "journeySellKey": "",
                        "marketingAirlineName": "Air India",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T12:40:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "2h 05min",
                        "arrivalTime": "12:40",
                        "flightSegmentTime": 130,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BOM",
                        "legDuration": "2h 10min",
                        "fareReference": "S",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "1",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "25",
                        "flightNumber": "695",
                        "departureDateAndTime": "2017-10-01T10:30:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Air India",
                        "resBookDesignCode": "S",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "695",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Mumbai Chhatrapati Shivaji - BOM",
                        "operatingAirline": "AI",
                        "departureTerminalCode": "2",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "AI",
                "sequenceId": 3
              },
              {
                "itinerarySeqId": "AIRSBR004",
                "totJourneyTime": "275",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "8995",
                    "totalFare": "14791",
                    "tax": "5796",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "BLR"
                      }
                    ],
                    "nonRefundableIndicator": true,
                    "fareCalcLine": "BLR H1 VNS8995INR8995END",
                    "passengerFareDetails": {
                      "totalTax": "5796",
                      "baseFare": "8995",
                      "totalFare": "14791",
                      "taxDetails": [
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 680,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 0
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "14:40",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T15:55:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "15:55",
                        "flightSegmentTime": 75,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "1h 15min",
                        "fareReference": "L",
                        "arrivalAirportCode": "HYD",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "flightNumber": "9375",
                        "departureDateAndTime": "2017-10-01T14:40:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9375",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Rajiv Gandhi Hyderabad - HYD"
                      },
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "17:10",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T19:15:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "1h 15min",
                        "arrivalTime": "19:15",
                        "flightSegmentTime": 200,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "HYD",
                        "legDuration": "3h 20min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "flightNumber": "9375",
                        "departureDateAndTime": "2017-10-01T17:10:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9375",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Rajiv Gandhi Hyderabad - HYD",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "H1",
                "sequenceId": 4
              },
              {
                "itinerarySeqId": "AIRSBR005",
                "totJourneyTime": "565",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "12815",
                    "totalFare": "15600",
                    "tax": "2785",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Breakfast",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "L",
                        "value": "L2CFA",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "L2CFA",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR 9W X/DEL Q50 9W VNS Q50 12715INR12815END",
                    "passengerFareDetails": {
                      "totalTax": "2785",
                      "baseFare": "12815",
                      "totalFare": "15600",
                      "taxDetails": [
                        {
                          "amount": 900,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 450,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 75,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 125,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 690,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 29,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73H",
                        "departureTime": "07:00",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T09:40:00",
                        "arrivalTerminalCode": "3",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "09:40",
                        "flightSegmentTime": 160,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 40min",
                        "fareReference": "L",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "15",
                        "flightNumber": "836",
                        "departureDateAndTime": "2017-10-01T07:00:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Breakfast",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "L",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "836",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73W",
                        "departureTime": "15:00",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T16:25:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "5h 20min",
                        "arrivalTime": "16:25",
                        "flightSegmentTime": 85,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 25min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "15",
                        "flightNumber": "745",
                        "departureDateAndTime": "2017-10-01T15:00:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "L",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "745",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "I",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "3",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "9W",
                "sequenceId": 5
              },
              {
                "itinerarySeqId": "AIRSBR006",
                "totJourneyTime": "425",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "12815",
                    "totalFare": "15600",
                    "tax": "2785",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Breakfast",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "L",
                        "value": "L2CFA",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "L2CFA",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR 9W X/DEL Q50 9W VNS Q50 12715INR12815END",
                    "passengerFareDetails": {
                      "totalTax": "2785",
                      "baseFare": "12815",
                      "totalFare": "15600",
                      "taxDetails": [
                        {
                          "amount": 900,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 450,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 75,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 125,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 690,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 29,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73H",
                        "departureTime": "09:20",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T12:00:00",
                        "arrivalTerminalCode": "3",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "12:00",
                        "flightSegmentTime": 160,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 40min",
                        "fareReference": "L",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "15",
                        "flightNumber": "973",
                        "departureDateAndTime": "2017-10-01T09:20:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Breakfast",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "L",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "973",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73W",
                        "departureTime": "15:00",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T16:25:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "3h 00min",
                        "arrivalTime": "16:25",
                        "flightSegmentTime": 85,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 25min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "15",
                        "flightNumber": "745",
                        "departureDateAndTime": "2017-10-01T15:00:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "L",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "745",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "I",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "3",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "9W",
                "sequenceId": 6
              },
              {
                "itinerarySeqId": "AIRSBR007",
                "totJourneyTime": "515",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "12815",
                    "totalFare": "15600",
                    "tax": "2785",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Breakfast",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "L",
                        "value": "L2CFA",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "L2CFA",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR 9W X/DEL Q50 9W VNS Q50 12715INR12815END",
                    "passengerFareDetails": {
                      "totalTax": "2785",
                      "baseFare": "12815",
                      "totalFare": "15600",
                      "taxDetails": [
                        {
                          "amount": 900,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 450,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 75,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 125,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 690,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 29,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73H",
                        "departureTime": "07:50",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T10:30:00",
                        "arrivalTerminalCode": "3",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "10:30",
                        "flightSegmentTime": 160,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 40min",
                        "fareReference": "L",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "15",
                        "flightNumber": "824",
                        "departureDateAndTime": "2017-10-01T07:50:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Breakfast",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "L",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "824",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73W",
                        "departureTime": "15:00",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T16:25:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "4h 30min",
                        "arrivalTime": "16:25",
                        "flightSegmentTime": 85,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 25min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "15",
                        "flightNumber": "745",
                        "departureDateAndTime": "2017-10-01T15:00:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "L",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "745",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "I",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "3",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "9W",
                "sequenceId": 7
              },
              {
                "itinerarySeqId": "AIRSBR008",
                "totJourneyTime": "630",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "15475",
                    "totalFare": "18393",
                    "tax": "2918",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Breakfast",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "L",
                        "value": "L2IPO",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "L2IPO",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR 9W DEL Q50 10575 9W VNS Q50 4800INR15475END",
                    "passengerFareDetails": {
                      "totalTax": "2918",
                      "baseFare": "15475",
                      "totalFare": "18393",
                      "taxDetails": [
                        {
                          "amount": 900,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 450,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 75,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 125,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 823,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 29,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "738",
                        "departureTime": "05:55",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T08:30:00",
                        "arrivalTerminalCode": "3",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "08:30",
                        "flightSegmentTime": 155,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 35min",
                        "fareReference": "L",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "15",
                        "flightNumber": "818",
                        "departureDateAndTime": "2017-10-01T05:55:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Breakfast",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "L",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "818",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73W",
                        "departureTime": "15:00",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T16:25:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "6h 30min",
                        "arrivalTime": "16:25",
                        "flightSegmentTime": 85,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 25min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "15",
                        "flightNumber": "745",
                        "departureDateAndTime": "2017-10-01T15:00:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "L",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "745",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "I",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "3",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "9W",
                "sequenceId": 8
              },
              {
                "itinerarySeqId": "AIRSBR009",
                "totJourneyTime": "745",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "11009",
                    "totalFare": "22480",
                    "tax": "11471",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "HYD",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "HYD"
                      }
                    ],
                    "nonRefundableIndicator": true,
                    "fareCalcLine": "BLR H1 HYD4300H1 VNS6709INR11009END",
                    "passengerFareDetails": {
                      "totalTax": "11471",
                      "baseFare": "11009",
                      "totalFare": "22480",
                      "taxDetails": [
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 508,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 781,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 230,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 236,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 0
                        },
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "DH8",
                        "departureTime": "21:05",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T22:25:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "22:25",
                        "flightSegmentTime": 80,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "1h 20min",
                        "fareReference": "L",
                        "arrivalAirportCode": "HYD",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "flightNumber": "9205",
                        "departureDateAndTime": "2017-10-01T21:05:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9205",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Rajiv Gandhi Hyderabad - HYD"
                      },
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "05:25",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-02T06:35:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "7h 00min",
                        "arrivalTime": "06:35",
                        "flightSegmentTime": 70,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "02 October 2017",
                        "departureAirportCode": "HYD",
                        "legDuration": "1h 10min",
                        "fareReference": "L",
                        "arrivalAirportCode": "BOM",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "flightNumber": "9184",
                        "departureDateAndTime": "2017-10-02T05:25:00",
                        "actionStatusCode": "",
                        "arrivalDate": "02 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9184",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Rajiv Gandhi Hyderabad - HYD",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Mumbai Chhatrapati Shivaji - BOM"
                      },
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "07:25",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-02T09:30:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "0h 50min",
                        "arrivalTime": "09:30",
                        "flightSegmentTime": 175,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "02 October 2017",
                        "departureAirportCode": "BOM",
                        "legDuration": "2h 55min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "2",
                        "flightNumber": "9184",
                        "departureDateAndTime": "2017-10-02T07:25:00",
                        "actionStatusCode": "",
                        "arrivalDate": "02 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9184",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Mumbai Chhatrapati Shivaji - BOM",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "H1",
                "sequenceId": 9
              },
              {
                "itinerarySeqId": "AIRSBR010",
                "totJourneyTime": "635",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "11009",
                    "totalFare": "22480",
                    "tax": "11471",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "HYD",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "HYD"
                      }
                    ],
                    "nonRefundableIndicator": true,
                    "fareCalcLine": "BLR H1 HYD4300H1 VNS6709INR11009END",
                    "passengerFareDetails": {
                      "totalTax": "11471",
                      "baseFare": "11009",
                      "totalFare": "22480",
                      "taxDetails": [
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 508,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 781,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 230,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 236,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 0
                        },
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "DH8",
                        "departureTime": "08:40",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T09:55:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "09:55",
                        "flightSegmentTime": 75,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "1h 15min",
                        "fareReference": "L",
                        "arrivalAirportCode": "HYD",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "flightNumber": "9221",
                        "departureDateAndTime": "2017-10-01T08:40:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9221",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Rajiv Gandhi Hyderabad - HYD"
                      },
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "17:10",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T19:15:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "7h 15min",
                        "arrivalTime": "19:15",
                        "flightSegmentTime": 125,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "HYD",
                        "legDuration": "2h 05min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "flightNumber": "9375",
                        "departureDateAndTime": "2017-10-01T17:10:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9375",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Rajiv Gandhi Hyderabad - HYD",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "H1",
                "sequenceId": 10
              },
              {
                "itinerarySeqId": "AIRSBR011",
                "totJourneyTime": "690",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "11009",
                    "totalFare": "22480",
                    "tax": "11471",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "HYD",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "HYD"
                      }
                    ],
                    "nonRefundableIndicator": true,
                    "fareCalcLine": "BLR H1 HYD4300H1 VNS6709INR11009END",
                    "passengerFareDetails": {
                      "totalTax": "11471",
                      "baseFare": "11009",
                      "totalFare": "22480",
                      "taxDetails": [
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 508,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 781,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 230,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 236,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 0
                        },
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "DH8",
                        "departureTime": "22:00",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T23:10:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "23:10",
                        "flightSegmentTime": 70,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "1h 10min",
                        "fareReference": "L",
                        "arrivalAirportCode": "HYD",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "flightNumber": "9358",
                        "departureDateAndTime": "2017-10-01T22:00:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9358",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Rajiv Gandhi Hyderabad - HYD"
                      },
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "05:25",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-02T06:35:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "6h 15min",
                        "arrivalTime": "06:35",
                        "flightSegmentTime": 70,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "02 October 2017",
                        "departureAirportCode": "HYD",
                        "legDuration": "1h 10min",
                        "fareReference": "L",
                        "arrivalAirportCode": "BOM",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "flightNumber": "9184",
                        "departureDateAndTime": "2017-10-02T05:25:00",
                        "actionStatusCode": "",
                        "arrivalDate": "02 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9184",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Rajiv Gandhi Hyderabad - HYD",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Mumbai Chhatrapati Shivaji - BOM"
                      },
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "07:25",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-02T09:30:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "0h 50min",
                        "arrivalTime": "09:30",
                        "flightSegmentTime": 175,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "02 October 2017",
                        "departureAirportCode": "BOM",
                        "legDuration": "2h 55min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "2",
                        "flightNumber": "9184",
                        "departureDateAndTime": "2017-10-02T07:25:00",
                        "actionStatusCode": "",
                        "arrivalDate": "02 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9184",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Mumbai Chhatrapati Shivaji - BOM",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "H1",
                "sequenceId": 11
              },
              {
                "itinerarySeqId": "AIRSBR012",
                "totJourneyTime": "795",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "13684",
                    "totalFare": "24545",
                    "tax": "10861",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "BOM",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "BOM"
                      }
                    ],
                    "nonRefundableIndicator": true,
                    "fareCalcLine": "BLR H1 BOM5849H1 VNS7835INR13684END",
                    "passengerFareDetails": {
                      "totalTax": "10861",
                      "baseFare": "13684",
                      "totalFare": "24545",
                      "taxDetails": [
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 915,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 230,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 0
                        },
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "20:15",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T21:55:00",
                        "arrivalTerminalCode": "1",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "21:55",
                        "flightSegmentTime": 100,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "1h 40min",
                        "fareReference": "L",
                        "arrivalAirportCode": "BOM",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "flightNumber": "9257",
                        "departureDateAndTime": "2017-10-01T20:15:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9257",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Mumbai Chhatrapati Shivaji - BOM"
                      },
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "07:25",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-02T09:30:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "9h 30min",
                        "arrivalTime": "09:30",
                        "flightSegmentTime": 125,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "02 October 2017",
                        "departureAirportCode": "BOM",
                        "legDuration": "2h 05min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "flightNumber": "9184",
                        "departureDateAndTime": "2017-10-02T07:25:00",
                        "actionStatusCode": "",
                        "arrivalDate": "02 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9184",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Mumbai Chhatrapati Shivaji - BOM",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "1",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "H1",
                "sequenceId": 12
              },
              {
                "itinerarySeqId": "AIRSBR013",
                "totJourneyTime": "460",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "13750",
                    "totalFare": "24614",
                    "tax": "10864",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": true,
                    "fareCalcLine": "BLR H1 DEL8400H1 VNS5350INR13750END",
                    "passengerFareDetails": {
                      "totalTax": "10864",
                      "baseFare": "13750",
                      "totalFare": "24614",
                      "taxDetails": [
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 918,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 230,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 0
                        },
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "00:20",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T03:05:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "03:05",
                        "flightSegmentTime": 165,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 45min",
                        "fareReference": "L",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "flightNumber": "9060",
                        "departureDateAndTime": "2017-10-01T00:20:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9060",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "DH8",
                        "departureTime": "06:25",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T08:00:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "3h 20min",
                        "arrivalTime": "08:00",
                        "flightSegmentTime": 95,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 35min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "flightNumber": "9362",
                        "departureDateAndTime": "2017-10-01T06:25:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9362",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "1D",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "H1",
                "sequenceId": 13
              },
              {
                "itinerarySeqId": "AIRSBR014",
                "totJourneyTime": "650",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "13750",
                    "totalFare": "24614",
                    "tax": "10864",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    },
                    {
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "L"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "L",
                        "value": "LOW63",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": true,
                    "fareCalcLine": "BLR H1 DEL8400H1 VNS5350INR13750END",
                    "passengerFareDetails": {
                      "totalTax": "10864",
                      "baseFare": "13750",
                      "totalFare": "24614",
                      "taxDetails": [
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2050,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 2550,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 918,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 230,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 0
                        },
                        {
                          "pieces": 1,
                          "weight": 0,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "737",
                        "departureTime": "21:10",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-02T00:05:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "00:05",
                        "flightSegmentTime": 175,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 55min",
                        "fareReference": "L",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "flightNumber": "9093",
                        "departureDateAndTime": "2017-10-01T21:10:00",
                        "actionStatusCode": "",
                        "arrivalDate": "02 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9093",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "H1",
                        "airEquipType": "DH8",
                        "departureTime": "06:25",
                        "journeySellKey": "",
                        "marketingAirlineName": "H1",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-02T08:00:00",
                        "arrivalTerminalCode": "",
                        "pieces": "1",
                        "stopQuantity": 0,
                        "layoverTime": "6h 20min",
                        "arrivalTime": "08:00",
                        "flightSegmentTime": 95,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                        "ptcID": "",
                        "departureDate": "02 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 35min",
                        "fareReference": "L",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "flightNumber": "9362",
                        "departureDateAndTime": "2017-10-02T06:25:00",
                        "actionStatusCode": "",
                        "arrivalDate": "02 October 2017",
                        "operatingAirlineName": "Spicejet Limited",
                        "resBookDesignCode": "L",
                        "eTicket": true,
                        "operatingFlightNumber": "9362",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "SG",
                        "departureTerminalCode": "1D",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "H1",
                "sequenceId": 14
              },
              {
                "itinerarySeqId": "AIRSBR015",
                "totJourneyTime": "330",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "25075",
                    "totalFare": "28473",
                    "tax": "3398",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Breakfast",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "U"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "U"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "U",
                        "value": "U2IPO",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "U",
                        "value": "U2IPO",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR 9W DEL Q900 Q50 16575 9W VNS Q50 7500INR25075END",
                    "passengerFareDetails": {
                      "totalTax": "3398",
                      "baseFare": "25075",
                      "totalFare": "28473",
                      "taxDetails": [
                        {
                          "amount": 900,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 450,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 75,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 125,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 1303,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 29,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73H",
                        "departureTime": "07:00",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T09:40:00",
                        "arrivalTerminalCode": "3",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "09:40",
                        "flightSegmentTime": 160,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 40min",
                        "fareReference": "U",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "15",
                        "flightNumber": "836",
                        "departureDateAndTime": "2017-10-01T07:00:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Breakfast",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "U",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "836",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73W",
                        "departureTime": "11:05",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T12:30:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "1h 25min",
                        "arrivalTime": "12:30",
                        "flightSegmentTime": 85,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 25min",
                        "fareReference": "U",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "15",
                        "flightNumber": "2423",
                        "departureDateAndTime": "2017-10-01T11:05:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "U",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "2423",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "I",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "3",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "9W",
                "sequenceId": 15
              },
              {
                "itinerarySeqId": "AIRSBR016",
                "totJourneyTime": "280",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "25075",
                    "totalFare": "28473",
                    "tax": "3398",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Breakfast",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "U"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "U"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "U",
                        "value": "U2IPO",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "U",
                        "value": "U2IPO",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR 9W DEL Q900 Q50 16575 9W VNS Q50 7500INR25075END",
                    "passengerFareDetails": {
                      "totalTax": "3398",
                      "baseFare": "25075",
                      "totalFare": "28473",
                      "taxDetails": [
                        {
                          "amount": 900,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 450,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 75,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 125,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 1303,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 29,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73H",
                        "departureTime": "07:50",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T10:30:00",
                        "arrivalTerminalCode": "3",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "10:30",
                        "flightSegmentTime": 160,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 40min",
                        "fareReference": "U",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "15",
                        "flightNumber": "824",
                        "departureDateAndTime": "2017-10-01T07:50:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Breakfast",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "U",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "824",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73W",
                        "departureTime": "11:05",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T12:30:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "0h 35min",
                        "arrivalTime": "12:30",
                        "flightSegmentTime": 85,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 25min",
                        "fareReference": "U",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "15",
                        "flightNumber": "2423",
                        "departureDateAndTime": "2017-10-01T11:05:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "U",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "2423",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "I",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "3",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "9W",
                "sequenceId": 16
              },
              {
                "itinerarySeqId": "AIRSBR017",
                "totJourneyTime": "395",
                "partnerName": "sabre",
                "priceInfoDetails": {
                  "totalFareInfo": {
                    "baseFare": "25075",
                    "totalFare": "28473",
                    "tax": "3398",
                    "currencyCode": "INR"
                  },
                  "divedeInPartyIndicator": false,
                  "fareInfos": [
                    {
                      "meal": "Breakfast",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "U"
                    },
                    {
                      "meal": "Snack or Brunch",
                      "seatRemainingNumber": 9,
                      "cabin": "Economy",
                      "fareReference": "U"
                    }
                  ],
                  "ptcFareBreakdown": {
                    "fareBasicCode": [
                      {
                        "arrivalAirportCode": "DEL",
                        "bookingCode": "U",
                        "value": "U2IPO",
                        "departureAirportCode": "BLR"
                      },
                      {
                        "arrivalAirportCode": "VNS",
                        "bookingCode": "U",
                        "value": "U2IPO",
                        "departureAirportCode": "DEL"
                      }
                    ],
                    "nonRefundableIndicator": false,
                    "fareCalcLine": "BLR 9W DEL Q900 Q50 16575 9W VNS Q50 7500INR25075END",
                    "passengerFareDetails": {
                      "totalTax": "3398",
                      "baseFare": "25075",
                      "totalFare": "28473",
                      "taxDetails": [
                        {
                          "amount": 900,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 450,
                          "decimalPlaces": 0,
                          "taxCode": "YQF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 75,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 125,
                          "decimalPlaces": 0,
                          "taxCode": "YRF",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 362,
                          "decimalPlaces": 0,
                          "taxCode": "IN",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 1303,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 29,
                          "decimalPlaces": 0,
                          "taxCode": "K35",
                          "value": "",
                          "currencyCode": "INR"
                        },
                        {
                          "amount": 154,
                          "decimalPlaces": 0,
                          "taxCode": "WO",
                          "value": "",
                          "currencyCode": "INR"
                        }
                      ],
                      "baggageDetails": [
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 0
                        },
                        {
                          "pieces": 0,
                          "unit": "KG",
                          "weight": 15,
                          "id": 1
                        }
                      ]
                    }
                  }
                },
                "itineraryDetails": {
                  "flightLegSegmentDetails": {
                    "segment1": [
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "738",
                        "departureTime": "05:55",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T08:30:00",
                        "arrivalTerminalCode": "3",
                        "stopQuantity": 0,
                        "layoverTime": "0h 00min",
                        "arrivalTime": "08:30",
                        "flightSegmentTime": 155,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "BLR",
                        "legDuration": "2h 35min",
                        "fareReference": "U",
                        "arrivalAirportCode": "DEL",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "0",
                        "weight": "15",
                        "flightNumber": "818",
                        "departureDateAndTime": "2017-10-01T05:55:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Breakfast",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "U",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "818",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "O",
                        "fareSellKey": "",
                        "baggageSegId": "0",
                        "departureAirportName": "Bengaluru Intl Airport - BLR",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Delhi Gandhi - DEL"
                      },
                      {
                        "marketingAirline": "9W",
                        "airEquipType": "73W",
                        "departureTime": "11:05",
                        "journeySellKey": "",
                        "marketingAirlineName": "Jet Airways",
                        "cabin": "Economy",
                        "arrivalDateAndTime": "2017-10-01T12:30:00",
                        "arrivalTerminalCode": "",
                        "stopQuantity": 0,
                        "layoverTime": "2h 35min",
                        "arrivalTime": "12:30",
                        "flightSegmentTime": 85,
                        "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                        "ptcID": "",
                        "departureDate": "01 October 2017",
                        "departureAirportCode": "DEL",
                        "legDuration": "1h 25min",
                        "fareReference": "U",
                        "arrivalAirportCode": "VNS",
                        "seatRemainingNumber": "9",
                        "departureCountry": "INDIA",
                        "partnerName": "sabre",
                        "departureTimeZone": 5.5,
                        "flightLegId": "1",
                        "weight": "15",
                        "flightNumber": "2423",
                        "departureDateAndTime": "2017-10-01T11:05:00",
                        "actionStatusCode": "",
                        "arrivalDate": "01 October 2017",
                        "meal": "Snack or Brunch",
                        "operatingAirlineName": "Jet Airways",
                        "resBookDesignCode": "U",
                        "unit": "kg",
                        "eTicket": true,
                        "operatingFlightNumber": "2423",
                        "fareId": "",
                        "arrivalTimeZone": 5.5,
                        "marriageGroup": "I",
                        "fareSellKey": "",
                        "baggageSegId": "1",
                        "departureAirportName": "Delhi Gandhi - DEL",
                        "operatingAirline": "9W",
                        "departureTerminalCode": "3",
                        "arrivalCountry": "INDIA",
                        "arrivalAirportName": "Varanasi Babatpur - VNS"
                      }
                    ]
                  }
                },
                "validatingCarrier": "9W",
                "sequenceId": 17
              }
            ],
            "domesticSegmentsDivided": false,
            "partnerRefId": "1001-100117009362-AIR-20170925-112030380"
          }
        },
        "partnerName": "sabre",
        "response": [
          {
            "itinerarySeqId": "AIRSBR001",
            "totJourneyTime": "520",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "6475",
                "totalFare": "7463",
                "tax": "988",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Breakfast",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "S"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 3,
                  "cabin": "Economy",
                  "fareReference": "S"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "S",
                    "value": "SIP",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "S",
                    "value": "SIP",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR AI DEL3000AI VNS3475INR6475END",
                "passengerFareDetails": {
                  "totalTax": "988",
                  "baseFare": "6475",
                  "totalFare": "7463",
                  "taxDetails": [
                    {
                      "amount": 70,
                      "decimalPlaces": 0,
                      "taxCode": "YRI",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 70,
                      "decimalPlaces": 0,
                      "taxCode": "YRI",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 328,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 4,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 25,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 25,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "06:10",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "evening",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                  "departurePeriod": "afternoon",
                  "arrivalTime": "14:50",
                  "legs": [
                    {
                      "marketingAirline": "AI",
                      "airEquipType": "32B",
                      "departureTime": "06:10",
                      "journeySellKey": "",
                      "marketingAirlineName": "Air India",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T08:55:00",
                      "arrivalTerminalCode": "3",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "08:55",
                      "flightSegmentTime": 165,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 45min",
                      "fareReference": "S",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "25",
                      "flightNumber": "804",
                      "departureDateAndTime": "2017-10-01T06:10:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Breakfast",
                      "operatingAirlineName": "Air India",
                      "resBookDesignCode": "S",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "804",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "AI",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "AI",
                      "airEquipType": "319",
                      "departureTime": "12:10",
                      "journeySellKey": "",
                      "marketingAirlineName": "Air India",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T13:40:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "3h 15min",
                      "arrivalTime": "13:40",
                      "flightSegmentTime": 90,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 30min",
                      "fareReference": "S",
                      "arrivalAirportCode": "GAY",
                      "seatRemainingNumber": "3",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "25",
                      "flightNumber": "433",
                      "departureDateAndTime": "2017-10-01T12:10:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Air India",
                      "resBookDesignCode": "S",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "433",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "AI",
                      "departureTerminalCode": "3",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Gaya - GAY"
                    },
                    {
                      "marketingAirline": "AI",
                      "airEquipType": "319",
                      "departureTime": "14:15",
                      "journeySellKey": "",
                      "marketingAirlineName": "Air India",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T14:50:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "0h 35min",
                      "arrivalTime": "14:50",
                      "flightSegmentTime": 70,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "GAY",
                      "legDuration": "1h 10min",
                      "fareReference": "S",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "3",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "2",
                      "weight": "25",
                      "flightNumber": "433",
                      "departureDateAndTime": "2017-10-01T14:15:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Air India",
                      "resBookDesignCode": "S",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "433",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Gaya - GAY",
                      "operatingAirline": "AI",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 2,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "5h 25min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR002",
            "totJourneyTime": "325",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "7075",
                "totalFare": "8093",
                "tax": "1018",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Breakfast",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "S"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 5,
                  "cabin": "Economy",
                  "fareReference": "T"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "S",
                    "value": "SIP",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "T",
                    "value": "TIP",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR AI DEL3000AI VNS4075INR7075END",
                "passengerFareDetails": {
                  "totalTax": "1018",
                  "baseFare": "7075",
                  "totalFare": "8093",
                  "taxDetails": [
                    {
                      "amount": 70,
                      "decimalPlaces": 0,
                      "taxCode": "YRI",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 70,
                      "decimalPlaces": 0,
                      "taxCode": "YRI",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 358,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 4,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 25,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 25,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "06:10",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "afternoon",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                  "departurePeriod": "afternoon",
                  "arrivalTime": "11:35",
                  "legs": [
                    {
                      "marketingAirline": "AI",
                      "airEquipType": "32B",
                      "departureTime": "06:10",
                      "journeySellKey": "",
                      "marketingAirlineName": "Air India",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T08:55:00",
                      "arrivalTerminalCode": "3",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "08:55",
                      "flightSegmentTime": 165,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 45min",
                      "fareReference": "S",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "25",
                      "flightNumber": "804",
                      "departureDateAndTime": "2017-10-01T06:10:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Breakfast",
                      "operatingAirlineName": "Air India",
                      "resBookDesignCode": "S",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "804",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "AI",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "AI",
                      "airEquipType": "321",
                      "departureTime": "10:15",
                      "journeySellKey": "",
                      "marketingAirlineName": "Air India",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T11:35:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "1h 20min",
                      "arrivalTime": "11:35",
                      "flightSegmentTime": 80,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 20min",
                      "fareReference": "T",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "5",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "25",
                      "flightNumber": "406",
                      "departureDateAndTime": "2017-10-01T10:15:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Air India",
                      "resBookDesignCode": "T",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "406",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "AI",
                      "departureTerminalCode": "3",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 05min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR003",
            "totJourneyTime": "355",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "7325",
                "totalFare": "8355",
                "tax": "1030",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "S"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 1,
                  "cabin": "Economy",
                  "fareReference": "S"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "BOM",
                    "bookingCode": "S",
                    "value": "SIP",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "S",
                    "value": "SIP",
                    "departureAirportCode": "BOM"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR AI BOM1900AI VNS Q300 5125INR7325END",
                "passengerFareDetails": {
                  "totalTax": "1030",
                  "baseFare": "7325",
                  "totalFare": "8355",
                  "taxDetails": [
                    {
                      "amount": 70,
                      "decimalPlaces": 0,
                      "taxCode": "YRI",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 70,
                      "decimalPlaces": 0,
                      "taxCode": "YRI",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 370,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 4,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 25,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 25,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "06:45",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "evening",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                  "departurePeriod": "afternoon",
                  "arrivalTime": "12:40",
                  "legs": [
                    {
                      "marketingAirline": "AI",
                      "airEquipType": "319",
                      "departureTime": "06:45",
                      "journeySellKey": "",
                      "marketingAirlineName": "Air India",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T08:25:00",
                      "arrivalTerminalCode": "2",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "08:25",
                      "flightSegmentTime": 100,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "1h 40min",
                      "fareReference": "S",
                      "arrivalAirportCode": "BOM",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "25",
                      "flightNumber": "640",
                      "departureDateAndTime": "2017-10-01T06:45:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Air India",
                      "resBookDesignCode": "S",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "640",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "AI",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Mumbai Chhatrapati Shivaji - BOM"
                    },
                    {
                      "marketingAirline": "AI",
                      "airEquipType": "319",
                      "departureTime": "10:30",
                      "journeySellKey": "",
                      "marketingAirlineName": "Air India",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T12:40:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "2h 05min",
                      "arrivalTime": "12:40",
                      "flightSegmentTime": 130,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BOM",
                      "legDuration": "2h 10min",
                      "fareReference": "S",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "1",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "25",
                      "flightNumber": "695",
                      "departureDateAndTime": "2017-10-01T10:30:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Air India",
                      "resBookDesignCode": "S",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "695",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Mumbai Chhatrapati Shivaji - BOM",
                      "operatingAirline": "AI",
                      "departureTerminalCode": "2",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/AI.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "3h 50min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR004",
            "totJourneyTime": "275",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "8995",
                "totalFare": "14791",
                "tax": "5796",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "BLR"
                  }
                ],
                "nonRefundableIndicator": true,
                "fareCalcLine": "BLR H1 VNS8995INR8995END",
                "passengerFareDetails": {
                  "totalTax": "5796",
                  "baseFare": "8995",
                  "totalFare": "14791",
                  "taxDetails": [
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 680,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 0
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "14:40",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "night",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departurePeriod": "evening",
                  "arrivalTime": "19:15",
                  "legs": [
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "14:40",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T15:55:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "15:55",
                      "flightSegmentTime": 75,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "1h 15min",
                      "fareReference": "L",
                      "arrivalAirportCode": "HYD",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "flightNumber": "9375",
                      "departureDateAndTime": "2017-10-01T14:40:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9375",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Rajiv Gandhi Hyderabad - HYD"
                    },
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "17:10",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T19:15:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "1h 15min",
                      "arrivalTime": "19:15",
                      "flightSegmentTime": 200,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "HYD",
                      "legDuration": "3h 20min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "flightNumber": "9375",
                      "departureDateAndTime": "2017-10-01T17:10:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9375",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Rajiv Gandhi Hyderabad - HYD",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 35min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR005",
            "totJourneyTime": "565",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "12815",
                "totalFare": "15600",
                "tax": "2785",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Breakfast",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "L",
                    "value": "L2CFA",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "L2CFA",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR 9W X/DEL Q50 9W VNS Q50 12715INR12815END",
                "passengerFareDetails": {
                  "totalTax": "2785",
                  "baseFare": "12815",
                  "totalFare": "15600",
                  "taxDetails": [
                    {
                      "amount": 900,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 450,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 75,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 125,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 690,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 29,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "07:00",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "evening",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departurePeriod": "afternoon",
                  "arrivalTime": "16:25",
                  "legs": [
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73H",
                      "departureTime": "07:00",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T09:40:00",
                      "arrivalTerminalCode": "3",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "09:40",
                      "flightSegmentTime": 160,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 40min",
                      "fareReference": "L",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "15",
                      "flightNumber": "836",
                      "departureDateAndTime": "2017-10-01T07:00:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Breakfast",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "L",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "836",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73W",
                      "departureTime": "15:00",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T16:25:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "5h 20min",
                      "arrivalTime": "16:25",
                      "flightSegmentTime": 85,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 25min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "15",
                      "flightNumber": "745",
                      "departureDateAndTime": "2017-10-01T15:00:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "L",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "745",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "I",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "3",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 05min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR006",
            "totJourneyTime": "425",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "12815",
                "totalFare": "15600",
                "tax": "2785",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Breakfast",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "L",
                    "value": "L2CFA",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "L2CFA",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR 9W X/DEL Q50 9W VNS Q50 12715INR12815END",
                "passengerFareDetails": {
                  "totalTax": "2785",
                  "baseFare": "12815",
                  "totalFare": "15600",
                  "taxDetails": [
                    {
                      "amount": 900,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 450,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 75,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 125,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 690,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 29,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "09:20",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "evening",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departurePeriod": "afternoon",
                  "arrivalTime": "16:25",
                  "legs": [
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73H",
                      "departureTime": "09:20",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T12:00:00",
                      "arrivalTerminalCode": "3",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "12:00",
                      "flightSegmentTime": 160,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 40min",
                      "fareReference": "L",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "15",
                      "flightNumber": "973",
                      "departureDateAndTime": "2017-10-01T09:20:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Breakfast",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "L",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "973",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73W",
                      "departureTime": "15:00",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T16:25:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "3h 00min",
                      "arrivalTime": "16:25",
                      "flightSegmentTime": 85,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 25min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "15",
                      "flightNumber": "745",
                      "departureDateAndTime": "2017-10-01T15:00:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "L",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "745",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "I",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "3",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 05min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR007",
            "totJourneyTime": "515",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "12815",
                "totalFare": "15600",
                "tax": "2785",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Breakfast",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "L",
                    "value": "L2CFA",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "L2CFA",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR 9W X/DEL Q50 9W VNS Q50 12715INR12815END",
                "passengerFareDetails": {
                  "totalTax": "2785",
                  "baseFare": "12815",
                  "totalFare": "15600",
                  "taxDetails": [
                    {
                      "amount": 900,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 450,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 75,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 125,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 690,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 29,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "07:50",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "evening",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departurePeriod": "afternoon",
                  "arrivalTime": "16:25",
                  "legs": [
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73H",
                      "departureTime": "07:50",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T10:30:00",
                      "arrivalTerminalCode": "3",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "10:30",
                      "flightSegmentTime": 160,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 40min",
                      "fareReference": "L",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "15",
                      "flightNumber": "824",
                      "departureDateAndTime": "2017-10-01T07:50:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Breakfast",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "L",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "824",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73W",
                      "departureTime": "15:00",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T16:25:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "4h 30min",
                      "arrivalTime": "16:25",
                      "flightSegmentTime": 85,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 25min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "15",
                      "flightNumber": "745",
                      "departureDateAndTime": "2017-10-01T15:00:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "L",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "745",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "I",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "3",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 05min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR008",
            "totJourneyTime": "630",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "15475",
                "totalFare": "18393",
                "tax": "2918",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Breakfast",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "L",
                    "value": "L2IPO",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "L2IPO",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR 9W DEL Q50 10575 9W VNS Q50 4800INR15475END",
                "passengerFareDetails": {
                  "totalTax": "2918",
                  "baseFare": "15475",
                  "totalFare": "18393",
                  "taxDetails": [
                    {
                      "amount": 900,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 450,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 75,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 125,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 823,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 29,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "05:55",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "evening",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departurePeriod": "morning",
                  "arrivalTime": "16:25",
                  "legs": [
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "738",
                      "departureTime": "05:55",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T08:30:00",
                      "arrivalTerminalCode": "3",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "08:30",
                      "flightSegmentTime": 155,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 35min",
                      "fareReference": "L",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "15",
                      "flightNumber": "818",
                      "departureDateAndTime": "2017-10-01T05:55:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Breakfast",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "L",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "818",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73W",
                      "departureTime": "15:00",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T16:25:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "6h 30min",
                      "arrivalTime": "16:25",
                      "flightSegmentTime": 85,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 25min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "15",
                      "flightNumber": "745",
                      "departureDateAndTime": "2017-10-01T15:00:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "L",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "745",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "I",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "3",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 00min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR009",
            "totJourneyTime": "745",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "11009",
                "totalFare": "22480",
                "tax": "11471",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "HYD",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "HYD"
                  }
                ],
                "nonRefundableIndicator": true,
                "fareCalcLine": "BLR H1 HYD4300H1 VNS6709INR11009END",
                "passengerFareDetails": {
                  "totalTax": "11471",
                  "baseFare": "11009",
                  "totalFare": "22480",
                  "taxDetails": [
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 508,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 781,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 230,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 236,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 0
                    },
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "21:05",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "afternoon",
                  "arrivalDate": "02 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departurePeriod": "night",
                  "arrivalTime": "09:30",
                  "legs": [
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "DH8",
                      "departureTime": "21:05",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T22:25:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "22:25",
                      "flightSegmentTime": 80,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "1h 20min",
                      "fareReference": "L",
                      "arrivalAirportCode": "HYD",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "flightNumber": "9205",
                      "departureDateAndTime": "2017-10-01T21:05:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9205",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Rajiv Gandhi Hyderabad - HYD"
                    },
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "05:25",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-02T06:35:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "7h 00min",
                      "arrivalTime": "06:35",
                      "flightSegmentTime": 70,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "02 October 2017",
                      "departureAirportCode": "HYD",
                      "legDuration": "1h 10min",
                      "fareReference": "L",
                      "arrivalAirportCode": "BOM",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "flightNumber": "9184",
                      "departureDateAndTime": "2017-10-02T05:25:00",
                      "actionStatusCode": "",
                      "arrivalDate": "02 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9184",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Rajiv Gandhi Hyderabad - HYD",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Mumbai Chhatrapati Shivaji - BOM"
                    },
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "07:25",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-02T09:30:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "0h 50min",
                      "arrivalTime": "09:30",
                      "flightSegmentTime": 175,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "02 October 2017",
                      "departureAirportCode": "BOM",
                      "legDuration": "2h 55min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "2",
                      "flightNumber": "9184",
                      "departureDateAndTime": "2017-10-02T07:25:00",
                      "actionStatusCode": "",
                      "arrivalDate": "02 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9184",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Mumbai Chhatrapati Shivaji - BOM",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 2,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "5h 25min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR010",
            "totJourneyTime": "635",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "11009",
                "totalFare": "22480",
                "tax": "11471",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "HYD",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "HYD"
                  }
                ],
                "nonRefundableIndicator": true,
                "fareCalcLine": "BLR H1 HYD4300H1 VNS6709INR11009END",
                "passengerFareDetails": {
                  "totalTax": "11471",
                  "baseFare": "11009",
                  "totalFare": "22480",
                  "taxDetails": [
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 508,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 781,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 230,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 236,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 0
                    },
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "08:40",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "night",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departurePeriod": "afternoon",
                  "arrivalTime": "19:15",
                  "legs": [
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "DH8",
                      "departureTime": "08:40",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T09:55:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "09:55",
                      "flightSegmentTime": 75,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "1h 15min",
                      "fareReference": "L",
                      "arrivalAirportCode": "HYD",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "flightNumber": "9221",
                      "departureDateAndTime": "2017-10-01T08:40:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9221",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Rajiv Gandhi Hyderabad - HYD"
                    },
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "17:10",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T19:15:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "7h 15min",
                      "arrivalTime": "19:15",
                      "flightSegmentTime": 125,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "HYD",
                      "legDuration": "2h 05min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "flightNumber": "9375",
                      "departureDateAndTime": "2017-10-01T17:10:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9375",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Rajiv Gandhi Hyderabad - HYD",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "3h 20min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR011",
            "totJourneyTime": "690",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "11009",
                "totalFare": "22480",
                "tax": "11471",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "HYD",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "HYD"
                  }
                ],
                "nonRefundableIndicator": true,
                "fareCalcLine": "BLR H1 HYD4300H1 VNS6709INR11009END",
                "passengerFareDetails": {
                  "totalTax": "11471",
                  "baseFare": "11009",
                  "totalFare": "22480",
                  "taxDetails": [
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 508,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 781,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 230,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 236,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 0
                    },
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "22:00",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "afternoon",
                  "arrivalDate": "02 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departurePeriod": "night",
                  "arrivalTime": "09:30",
                  "legs": [
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "DH8",
                      "departureTime": "22:00",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T23:10:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "23:10",
                      "flightSegmentTime": 70,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "1h 10min",
                      "fareReference": "L",
                      "arrivalAirportCode": "HYD",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "flightNumber": "9358",
                      "departureDateAndTime": "2017-10-01T22:00:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9358",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Rajiv Gandhi Hyderabad - HYD"
                    },
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "05:25",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-02T06:35:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "6h 15min",
                      "arrivalTime": "06:35",
                      "flightSegmentTime": 70,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "02 October 2017",
                      "departureAirportCode": "HYD",
                      "legDuration": "1h 10min",
                      "fareReference": "L",
                      "arrivalAirportCode": "BOM",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "flightNumber": "9184",
                      "departureDateAndTime": "2017-10-02T05:25:00",
                      "actionStatusCode": "",
                      "arrivalDate": "02 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9184",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Rajiv Gandhi Hyderabad - HYD",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Mumbai Chhatrapati Shivaji - BOM"
                    },
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "07:25",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-02T09:30:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "0h 50min",
                      "arrivalTime": "09:30",
                      "flightSegmentTime": 175,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "02 October 2017",
                      "departureAirportCode": "BOM",
                      "legDuration": "2h 55min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "2",
                      "flightNumber": "9184",
                      "departureDateAndTime": "2017-10-02T07:25:00",
                      "actionStatusCode": "",
                      "arrivalDate": "02 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9184",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Mumbai Chhatrapati Shivaji - BOM",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 2,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "5h 15min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR012",
            "totJourneyTime": "795",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "13684",
                "totalFare": "24545",
                "tax": "10861",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "BOM",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "BOM"
                  }
                ],
                "nonRefundableIndicator": true,
                "fareCalcLine": "BLR H1 BOM5849H1 VNS7835INR13684END",
                "passengerFareDetails": {
                  "totalTax": "10861",
                  "baseFare": "13684",
                  "totalFare": "24545",
                  "taxDetails": [
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 915,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 230,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 0
                    },
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "20:15",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "afternoon",
                  "arrivalDate": "02 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departurePeriod": "night",
                  "arrivalTime": "09:30",
                  "legs": [
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "20:15",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T21:55:00",
                      "arrivalTerminalCode": "1",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "21:55",
                      "flightSegmentTime": 100,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "1h 40min",
                      "fareReference": "L",
                      "arrivalAirportCode": "BOM",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "flightNumber": "9257",
                      "departureDateAndTime": "2017-10-01T20:15:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9257",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Mumbai Chhatrapati Shivaji - BOM"
                    },
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "07:25",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-02T09:30:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "9h 30min",
                      "arrivalTime": "09:30",
                      "flightSegmentTime": 125,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "02 October 2017",
                      "departureAirportCode": "BOM",
                      "legDuration": "2h 05min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "flightNumber": "9184",
                      "departureDateAndTime": "2017-10-02T07:25:00",
                      "actionStatusCode": "",
                      "arrivalDate": "02 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9184",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Mumbai Chhatrapati Shivaji - BOM",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "1",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "3h 45min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR013",
            "totJourneyTime": "460",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "13750",
                "totalFare": "24614",
                "tax": "10864",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": true,
                "fareCalcLine": "BLR H1 DEL8400H1 VNS5350INR13750END",
                "passengerFareDetails": {
                  "totalTax": "10864",
                  "baseFare": "13750",
                  "totalFare": "24614",
                  "taxDetails": [
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 918,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 230,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 0
                    },
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "00:20",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "afternoon",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departurePeriod": "morning",
                  "arrivalTime": "08:00",
                  "legs": [
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "00:20",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T03:05:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "03:05",
                      "flightSegmentTime": 165,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 45min",
                      "fareReference": "L",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "flightNumber": "9060",
                      "departureDateAndTime": "2017-10-01T00:20:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9060",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "DH8",
                      "departureTime": "06:25",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T08:00:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "3h 20min",
                      "arrivalTime": "08:00",
                      "flightSegmentTime": 95,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 35min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "flightNumber": "9362",
                      "departureDateAndTime": "2017-10-01T06:25:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9362",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "1D",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 20min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR014",
            "totJourneyTime": "650",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "13750",
                "totalFare": "24614",
                "tax": "10864",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                },
                {
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "L"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "L",
                    "value": "LOW63",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": true,
                "fareCalcLine": "BLR H1 DEL8400H1 VNS5350INR13750END",
                "passengerFareDetails": {
                  "totalTax": "10864",
                  "baseFare": "13750",
                  "totalFare": "24614",
                  "taxDetails": [
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2050,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 2550,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 918,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 230,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 0
                    },
                    {
                      "pieces": 1,
                      "weight": 0,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "21:10",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "afternoon",
                  "arrivalDate": "02 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departurePeriod": "night",
                  "arrivalTime": "08:00",
                  "legs": [
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "737",
                      "departureTime": "21:10",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-02T00:05:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "00:05",
                      "flightSegmentTime": 175,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 55min",
                      "fareReference": "L",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "flightNumber": "9093",
                      "departureDateAndTime": "2017-10-01T21:10:00",
                      "actionStatusCode": "",
                      "arrivalDate": "02 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9093",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "H1",
                      "airEquipType": "DH8",
                      "departureTime": "06:25",
                      "journeySellKey": "",
                      "marketingAirlineName": "H1",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-02T08:00:00",
                      "arrivalTerminalCode": "",
                      "pieces": "1",
                      "stopQuantity": 0,
                      "layoverTime": "6h 20min",
                      "arrivalTime": "08:00",
                      "flightSegmentTime": 95,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                      "ptcID": "",
                      "departureDate": "02 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 35min",
                      "fareReference": "L",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "flightNumber": "9362",
                      "departureDateAndTime": "2017-10-02T06:25:00",
                      "actionStatusCode": "",
                      "arrivalDate": "02 October 2017",
                      "operatingAirlineName": "Spicejet Limited",
                      "resBookDesignCode": "L",
                      "eTicket": true,
                      "operatingFlightNumber": "9362",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "SG",
                      "departureTerminalCode": "1D",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/H1.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 30min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR015",
            "totJourneyTime": "330",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "25075",
                "totalFare": "28473",
                "tax": "3398",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Breakfast",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "U"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "U"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "U",
                    "value": "U2IPO",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "U",
                    "value": "U2IPO",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR 9W DEL Q900 Q50 16575 9W VNS Q50 7500INR25075END",
                "passengerFareDetails": {
                  "totalTax": "3398",
                  "baseFare": "25075",
                  "totalFare": "28473",
                  "taxDetails": [
                    {
                      "amount": 900,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 450,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 75,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 125,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 1303,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 29,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "07:00",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "evening",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departurePeriod": "afternoon",
                  "arrivalTime": "12:30",
                  "legs": [
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73H",
                      "departureTime": "07:00",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T09:40:00",
                      "arrivalTerminalCode": "3",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "09:40",
                      "flightSegmentTime": 160,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 40min",
                      "fareReference": "U",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "15",
                      "flightNumber": "836",
                      "departureDateAndTime": "2017-10-01T07:00:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Breakfast",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "U",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "836",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73W",
                      "departureTime": "11:05",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T12:30:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "1h 25min",
                      "arrivalTime": "12:30",
                      "flightSegmentTime": 85,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 25min",
                      "fareReference": "U",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "15",
                      "flightNumber": "2423",
                      "departureDateAndTime": "2017-10-01T11:05:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "U",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "2423",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "I",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "3",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 05min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR016",
            "totJourneyTime": "280",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "25075",
                "totalFare": "28473",
                "tax": "3398",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Breakfast",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "U"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "U"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "U",
                    "value": "U2IPO",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "U",
                    "value": "U2IPO",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR 9W DEL Q900 Q50 16575 9W VNS Q50 7500INR25075END",
                "passengerFareDetails": {
                  "totalTax": "3398",
                  "baseFare": "25075",
                  "totalFare": "28473",
                  "taxDetails": [
                    {
                      "amount": 900,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 450,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 75,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 125,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 1303,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 29,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "07:50",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "evening",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departurePeriod": "afternoon",
                  "arrivalTime": "12:30",
                  "legs": [
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73H",
                      "departureTime": "07:50",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T10:30:00",
                      "arrivalTerminalCode": "3",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "10:30",
                      "flightSegmentTime": 160,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 40min",
                      "fareReference": "U",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "15",
                      "flightNumber": "824",
                      "departureDateAndTime": "2017-10-01T07:50:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Breakfast",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "U",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "824",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73W",
                      "departureTime": "11:05",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T12:30:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "0h 35min",
                      "arrivalTime": "12:30",
                      "flightSegmentTime": 85,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 25min",
                      "fareReference": "U",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "15",
                      "flightNumber": "2423",
                      "departureDateAndTime": "2017-10-01T11:05:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "U",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "2423",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "I",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "3",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 05min"
                }
              }
            }
          },
          {
            "itinerarySeqId": "AIRSBR017",
            "totJourneyTime": "395",
            "priceInfoDetails": {
              "totalFareInfo": {
                "baseFare": "25075",
                "totalFare": "28473",
                "tax": "3398",
                "currencyCode": "INR"
              },
              "divedeInPartyIndicator": false,
              "fareInfos": [
                {
                  "meal": "Breakfast",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "U"
                },
                {
                  "meal": "Snack or Brunch",
                  "seatRemainingNumber": 9,
                  "cabin": "Economy",
                  "fareReference": "U"
                }
              ],
              "ptcFareBreakdown": {
                "fareBasicCode": [
                  {
                    "arrivalAirportCode": "DEL",
                    "bookingCode": "U",
                    "value": "U2IPO",
                    "departureAirportCode": "BLR"
                  },
                  {
                    "arrivalAirportCode": "VNS",
                    "bookingCode": "U",
                    "value": "U2IPO",
                    "departureAirportCode": "DEL"
                  }
                ],
                "nonRefundableIndicator": false,
                "fareCalcLine": "BLR 9W DEL Q900 Q50 16575 9W VNS Q50 7500INR25075END",
                "passengerFareDetails": {
                  "totalTax": "3398",
                  "baseFare": "25075",
                  "totalFare": "28473",
                  "taxDetails": [
                    {
                      "amount": 900,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 450,
                      "decimalPlaces": 0,
                      "taxCode": "YQF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 75,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 125,
                      "decimalPlaces": 0,
                      "taxCode": "YRF",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 362,
                      "decimalPlaces": 0,
                      "taxCode": "IN",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 1303,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 29,
                      "decimalPlaces": 0,
                      "taxCode": "K35",
                      "value": "",
                      "currencyCode": "INR"
                    },
                    {
                      "amount": 154,
                      "decimalPlaces": 0,
                      "taxCode": "WO",
                      "value": "",
                      "currencyCode": "INR"
                    }
                  ],
                  "baggageDetails": [
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 0
                    },
                    {
                      "pieces": 0,
                      "unit": "KG",
                      "weight": 15,
                      "id": 1
                    }
                  ]
                }
              }
            },
            "itineraryDetails": {
              "flightLegSegmentDetails": {
                "segment1": {
                  "departureTime": "05:55",
                  "arrivalAirportCode": "VNS",
                  "arrivalPeriod": "evening",
                  "arrivalDate": "01 October 2017",
                  "arrivalTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departurePeriod": "morning",
                  "arrivalTime": "12:30",
                  "legs": [
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "738",
                      "departureTime": "05:55",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T08:30:00",
                      "arrivalTerminalCode": "3",
                      "stopQuantity": 0,
                      "layoverTime": "0h 00min",
                      "arrivalTime": "08:30",
                      "flightSegmentTime": 155,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "BLR",
                      "legDuration": "2h 35min",
                      "fareReference": "U",
                      "arrivalAirportCode": "DEL",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "0",
                      "weight": "15",
                      "flightNumber": "818",
                      "departureDateAndTime": "2017-10-01T05:55:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Breakfast",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "U",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "818",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "O",
                      "fareSellKey": "",
                      "baggageSegId": "0",
                      "departureAirportName": "Bengaluru Intl Airport - BLR",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Delhi Gandhi - DEL"
                    },
                    {
                      "marketingAirline": "9W",
                      "airEquipType": "73W",
                      "departureTime": "11:05",
                      "journeySellKey": "",
                      "marketingAirlineName": "Jet Airways",
                      "cabin": "Economy",
                      "arrivalDateAndTime": "2017-10-01T12:30:00",
                      "arrivalTerminalCode": "",
                      "stopQuantity": 0,
                      "layoverTime": "2h 35min",
                      "arrivalTime": "12:30",
                      "flightSegmentTime": 85,
                      "transitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                      "ptcID": "",
                      "departureDate": "01 October 2017",
                      "departureAirportCode": "DEL",
                      "legDuration": "1h 25min",
                      "fareReference": "U",
                      "arrivalAirportCode": "VNS",
                      "seatRemainingNumber": "9",
                      "departureCountry": "INDIA",
                      "partnerName": "sabre",
                      "departureTimeZone": 5.5,
                      "flightLegId": "1",
                      "weight": "15",
                      "flightNumber": "2423",
                      "departureDateAndTime": "2017-10-01T11:05:00",
                      "actionStatusCode": "",
                      "arrivalDate": "01 October 2017",
                      "meal": "Snack or Brunch",
                      "operatingAirlineName": "Jet Airways",
                      "resBookDesignCode": "U",
                      "unit": "kg",
                      "eTicket": true,
                      "operatingFlightNumber": "2423",
                      "fareId": "",
                      "arrivalTimeZone": 5.5,
                      "marriageGroup": "I",
                      "fareSellKey": "",
                      "baggageSegId": "1",
                      "departureAirportName": "Delhi Gandhi - DEL",
                      "operatingAirline": "9W",
                      "departureTerminalCode": "3",
                      "arrivalCountry": "INDIA",
                      "arrivalAirportName": "Varanasi Babatpur - VNS"
                    }
                  ],
                  "stops": 1,
                  "departureDate": "01 October 2017",
                  "departureTransitImage": "https://4ctnedevblob.blob.core.windows.net/assets/9W.png",
                  "departureAirportCode": "BLR",
                  "legDuration": "4h 00min"
                }
              }
            }
          }
        ],
        "travelNumber": "100117009362",
        "ack": {
          "journeyType": "DOM",
          "posCountry": "IN",
          "domesticSegmentsDivided": false,
          "noOfPartner": 1,
          "segments": {
            "leg0": [
              {
                "travelDate": "2017-10-01T00:00:00",
                "origin": "BLR",
                "segmentId": "100117009362_F_1",
                "destination": "VNS"
              }
            ]
          }
        },
        "isErrorResponse": false,
        "orgId": 9000,
        "transactionId": "100117009362_F_1_20170908-100900902-p1506338430131",
        "partnerRefId": "1001-100117009362-AIR-20170925-112030380"
      }
    ]
  }
}

export default transitSearchResult; 