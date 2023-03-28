export interface WeatherData {
          city_name: string
          state_code: string
          data: WeatherData[]
          country_code: string
          timezone: string
          lon: number
          lat: number
}

export interface WeatherData {
          ozone: number
          clouds_hi: number
          clouds_low: number
          clouds_mid: number
          snow: number
          wind_gust_spd: number
          dhi: number
          precip: number
          weather: Weather
          wind_cdir: string
          rh: number
          pod: string
          app_temp: number
          pres: number
          timestamp_local: string
          clouds: number
          vis: number
          wind_spd: number
          wind_cdir_full: string
          slp: number
          snow_depth: number
          ts: number
          solar_rad: number
          dewpt: number
          uv: number
          datetime: string
          wind_dir: number
          ghi: number
          timestamp_utc: string
          temp: number
          dni: number
          pop: number
          humidity: number
}

export interface Weather {
          code: number
          icon: string
          description: string
}
