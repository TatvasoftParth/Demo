let APIURL = "https://restcountries.eu/rest/v2/name/";
let WEATHER_APIURL = "http://api.weatherstack.com/current?access_key=e898326052c658760d7b253b7a8ac288&query=";
let getAllId = `neo/browse?api_key=`;

export const CountryDataModel = {
    state: {
        countryData: [],
        isError: '',
        weatherData: {},
    },
    reducers: {
        setCountryData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                countryData: payload,
                isError: false,
            };
        },
        setWeatherData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                weatherData: payload,
                isError: false,
            };
        },
        setCountryDataError(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                countryData: payload,
                isError: true,
            };
        },
        clearData(state: Object): Object {
            return {
                ...state,
                countryData: [],
                weatherData: [],
                isError: '',
            };
        }
    },
    effects: (dispatch : any) => ({
        async fetchWeatherData(APIdata) {
            if (APIdata.payload) {
                dispatch.CountryDataModel.clearData();
            } else {
                await fetch(WEATHER_APIURL + APIdata.countryName, { method: 'GET' })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        console.log("responseJson==>", responseJSON)
                        dispatch.CountryDataModel.setWeatherData(responseJSON);
                    }).catch((error) => {
                        console.log("error==>", error)
                        dispatch.CountryDataModel.setCountryDataError(error)
                    })
            }
        },
        async fetchCountryData(APIdata) {
            if (APIdata.payload) {
                dispatch.CountryDataModel.clearData();
            } else {
                await fetch(APIURL + APIdata.countryName, { method: 'GET' })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        console.log("responseJson==>", responseJSON);
                        let tempObj;
                        for (let index = 0; index < responseJSON.length; index++) {
                            if (responseJSON[index].name === APIdata.countryName) {
                              tempObj = responseJSON[index];
                            }
                          }
                        dispatch.CountryDataModel.setCountryData(tempObj);
                    }).catch((error) => {
                        console.log("error==>", error)
                        dispatch.CountryDataModel.setCountryDataError(error)
                    })
            }
        }
    })

}
