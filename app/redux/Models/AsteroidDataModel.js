let APIURL = "https://api.nasa.gov/neo/rest/v1/";
let TOKEN_ID = "xDgLheJsv5r5x7bZm76VKgcws9rzWIPsTmP020Tf";
let getAllId = `neo/browse?api_key=`;

export const AsteroidDataModel = {
    state: {
        asteroidIds: [],
        isError: '',
        asteroidDetails: {},
        isForm: ""
    },
    reducers: {
        setAsteroidIds(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                asteroidIds: payload,
                isForm: "AsteroidId",
                isError: false,
            };
        },
        setAsteroidDeatils(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                asteroidDetails: payload,
                isForm: "AsteroidDetails",
                isError: false,
            };
        },
        setAsteroidErrorData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                asteroidIds: payload,
                isError: true,
            };
        },
        clearData(state: Object): Object {
            return {
                ...state,
                asteroidIds: [],
                isError: '',
            };
        }
    },
    effects: (dispatch : any) => ({
        async fetchAsteroidDetails(APIdata) {
            if (APIdata.payload) {
                dispatch.AsteroidDataModel.clearData();
            } else {
                await fetch(APIURL + `neo/${APIdata.id}?api_key=` + TOKEN_ID, { method: 'GET' })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        console.log("responseJson==>", responseJSON)
                        dispatch.AsteroidDataModel.setAsteroidDeatils(responseJSON);
                    }).catch((error) => {
                        console.log("error==>", error)
                        dispatch.AsteroidDataModel.setAsteroidErrorData(error)
                    })
            }
        },
        async fetchAllAsteroidIds(APIdata) {
            if (APIdata.payload) {
                dispatch.AsteroidDataModel.clearData();
            } else {
                await fetch(APIURL + getAllId + TOKEN_ID, { method: 'GET' })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        console.log("responseJson==>", responseJSON)
                        dispatch.AsteroidDataModel.setAsteroidIds(responseJSON);
                    }).catch((error) => {
                        console.log("error==>", error)
                        dispatch.AsteroidDataModel.setAsteroidErrorData(error)
                    })
            }
        }
    })

}
