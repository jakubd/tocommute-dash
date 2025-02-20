export type GCWeatherRoot = GCWeatherRoot2[]

export interface GCWeatherRoot2 {
  cgndb: string
  displayName: string
  zonePoly: string
  lastUpdated: number
  alert: unknown   // TODO: eventually probably want to implement this one
  observation: Observation
  hourlyFcst: HourlyFcst
  dailyFcst: DailyFcst
  aqhi: Aqhi
  riseSet: RiseSet
  riseSetNextDay: RiseSetNextDay
  riseData: RiseDaum[]
  metNotes: unknown[]
  pastHourly: PastHourly
  aqhiFcst: AqhiFcst
  aqhiInfo: AqhiInfo
  province: string
  tcId: string
  climateId: string
  tc2Id: string
  climate2Id: string
  wxoPubZoneCode: string
  wxoAqZoneCode: string
  wxoTsunamiZoneCode: string
  wxoCfZoneCode: string
  timezone: string
  lat: string
  lon: string
  useNatRadar: boolean
  alert_nodata_epoch: number
  mtimes: Mtimes
}

export interface Observation {
  observedAt: string
  provinceCode: string
  climateId: string
  tcid: string
  timeStamp: string
  timeStampText: string
  iconCode: string
  condition: string
  temperature: Temperature
  dewpoint: Dewpoint
  feelsLike: FeelsLike
  pressure: Pressure
  tendency: string
  visibility: Visibility
  visUnround: number
  humidity: string
  humidityQaValue: number
  windSpeed: WindSpeed
  windGust: WindGust
  windDirection: string
  windDirectionQAValue: number
  windBearing: string
}

export interface Temperature {
  imperial: string
  imperialUnrounded: string
  metric: string
  metricUnrounded: string
  qaValue: number
}

export interface Dewpoint {
  imperial: string
  imperialUnrounded: string
  metric: string
  metricUnrounded: string
  qaValue: number
}

export interface FeelsLike {
  imperial: string
  metric: string
  qaValue: number
}

export interface Pressure {
  imperial: string
  metric: string
  changeImperial: string
  changeMetric: string
  qaValue: number
}

export interface Visibility {
  imperial: string
  metric: string
  qaValue: number
}

export interface WindSpeed {
  imperial: string
  metric: string
  qaValue: number
}

export interface WindGust {
  imperial: string
  metric: string
}

export interface HourlyFcst {
  hourlyIssuedTimeShrt: string
  hourly: Hourly[]
}

export interface Hourly {
  date: string
  periodID: number
  windGust: WindGust2
  windDir: string
  feelsLike: FeelsLike2
  condition: string
  precip: string
  temperature: Temperature2
  iconCode: string
  time: string
  windSpeed: WindSpeed2
  epochTime: number
  dateShrt?: string
  uv?: Uv
}

export interface WindGust2 {
  metric: string
  imperial: string
}

export interface FeelsLike2 {
  metric: string
  imperial: string
}

export interface Temperature2 {
  metric: string
  imperial: string
}

export interface WindSpeed2 {
  metric: string
  imperial: string
}

export interface Uv {
  index: string
}

export interface DailyFcst {
  dailyIssuedTimeShrt: string
  regionalNormals: RegionalNormals
  daily: Daily[]
  dailyIssuedTime: string
  dailyIssuedTimeEpoch: string
}

export interface RegionalNormals {
  metric: Metric
  imperial: Imperial
}

export interface Metric {
  highTemp: number
  lowTemp: number
  text: string
}

export interface Imperial {
  highTemp: number
  lowTemp: number
  text: string
}

export interface Daily {
  date: string
  summary: string
  periodID: number
  periodLabel: string
  windChill: WindChill
  sun: unknown
  temperatureText: string
  humidex: unknown
  precip: string
  frost?: Frost
  titleText: string
  temperature: Temperature3
  iconCode: string
  text: string
}

export interface WindChill {
  frostbite?: string
  calculated: Calculated[]
  textSummary: string
}

export interface Calculated {
  unitType: string
  index: string
  class: string
  value: string
}

export interface Frost {
  textSummary: string
}

export interface Temperature3 {
  metric: string
  imperial: string
  periodLow?: number
  periodHigh?: number
}

export interface Aqhi {
  value: string
  riskText: string
  url: string
  aqhiVal: number
  observedAt: string
  epochTime: number
  specialNotes: unknown[]
}

export interface RiseSet {
  set: Set
  timeZone: string
  rise: Rise
}

export interface Set {
  time12h: string
  epochTimeRounded: string
  time: string
}

export interface Rise {
  time12h: string
  epochTimeRounded: string
  time: string
}

export interface RiseSetNextDay {
  set: Set2
  timeZone: string
  rise: Rise2
}

export interface Set2 {
  time12h: string
  epochTimeRounded: string
  time: string
}

export interface Rise2 {
  time12h: string
  epochTimeRounded: string
  time: string
}

export interface RiseDaum {
  set: Set3
  timeZone: string
  rise: Rise3
}

export interface Set3 {
  time12h: string
  epochTimeRounded: string
  time: string
}

export interface Rise3 {
  time12h: string
  epochTimeRounded: string
  time: string
}

export interface PastHourly {
  observedAt: string
  provinceCode: string
  hours: Hour[]
}

export interface Hour {
  timeStamp: string
  timeZone: string
  iconCode: string
  condition: string
  temperature: number
  temperatureQaValue: number
  feelsLike: number
  feelsLikeQaValue: number
  dewpoint: number
  dewpointQaValue: number
  pressure: number
  pressureQaValue: number
  visibility: number
  visibilityQaValue: number
  humidity: number
  humidityQaValue: number
  windSpeed: number
  windSpeedQaValue: number
  windDirection: string
  windDirectionQaValue: number
  windGust?: number
  windGustQaValue?: number
}

export interface AqhiFcst {
  epochTime: number
  daily: Daily2[]
}

export interface Daily2 {
  periodName: string
  aqhiVal: number
  periodID: number
}

export interface AqhiInfo {
  past24Hr: string
  next24Hr: string
  locUrl: string
  partnerText: string
}

export interface Mtimes {
  AQHI: number
  AQHI_FORECAST: number
  AQHI_INFO: number
  DAILY_FORECAST: number
  HOURLY_OBSERVATION: number
  HOURLY_FORECAST: number
  RISESET: number
  RISESET_NEXT_DAY: number
  RISEDATA0: number
  RISEDATA1: number
  RISEDATA2: number
  RISEDATA3: number
  RISEDATA4: number
  RISEDATA5: number
  RISEDATA6: number
  PAST_HOURLY: number
}
