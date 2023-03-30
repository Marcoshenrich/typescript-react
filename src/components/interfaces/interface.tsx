

export interface cityObj {
    [cityKey: string]: number
}


export interface parsedData {
    city: {
        country: string
        name: string
        sunrise: number
        sunset: number
    }
    list: weatherSnapshot[]
}

export interface zipData {
    results: {
        [zip: number]: [{
            city: string
            state_code: string
        }]
    }
}

export interface weatherSnapshot {
    clouds: {
        all: number
    }
    main: {
        temp: number
        feels_like: number
        temp_max: number
        temp_min: number
        humidity: number
    }
    wind: {
        speed: number
    }
}