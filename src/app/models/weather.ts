export class Weather {
  constructor(
    public cityName: string,
    public temp: Number,
    public pressure: number,
    public humidity: number,
    public description: string,
    public windSpeed: number,
    public windDegree: number
  ){}
}
