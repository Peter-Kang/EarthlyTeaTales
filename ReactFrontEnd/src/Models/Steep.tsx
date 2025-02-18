

export class Steep{
    static TemperatureType =
    { 
        Celsius:'C', 
        Fahrenheit:'F'
    };
    static TimeTime = {
        Seconds:"Seconds",
        Minutes:"Minutes",
        Hours:"Hours"
    }
    timeInSeconds:number = 0;
    temperature:number = 0;
    temperatureType:String = Steep.TemperatureType.Fahrenheit;
    timeType:String = Steep.TimeTime.Seconds;
}