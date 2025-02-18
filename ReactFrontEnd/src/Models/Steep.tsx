export class Steep {
    static TimeTime = {
        Seconds: "Seconds",
        Minutes: "Minutes",
        Hours: "Hours"
    }
    timeInSeconds: number = 0;
    temperature: number = 0;
    timeType: String = Steep.TimeTime.Seconds;
}

export class SteepInstructions {
    steeps: Steep[] = [];
    name: string = "";
    description: string = "";
    washed: boolean = false;
    guid: string = "";
}