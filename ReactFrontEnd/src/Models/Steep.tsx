export const TimeTime = {
    Seconds:"Seconds",
    Minutes:"Minutes",
    Hours:"Hours"
}

export const TemperatureType =
{ 
    Celsius:'C', 
    Fahrenheit:'F'
};

export class Steep{
    timeInSeconds:number = 0;
    temperature:number = 0;
    temperatureType:String = TemperatureType.Fahrenheit;
    timeType:String = TimeTime.Seconds;
}