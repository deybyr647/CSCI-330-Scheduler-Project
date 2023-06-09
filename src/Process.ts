class Process {
  private arrivalTime: number;
  private completionTime: Date;
  private serviceTime: number;
  private burstTime: number;
  private contextSwitchAmt = 0;
  private pid: string;

  constructor(pid = "0", arrivalTime = 1, burstTime = 2) {
    this.pid = pid.toString();
    this.arrivalTime = arrivalTime;
    this.burstTime = burstTime;
  }

  getPID(): string {
    return this.pid;
  }

  getArrivalTime(): number {
    return this.arrivalTime;
  }

  getCompletionTime(): Date {
    return this.completionTime;
  }

  getServiceTime(): number {
    return this.serviceTime;
  }

  getContextSwitchAmt(): number {
    return this.contextSwitchAmt;
  }
}

export default Process;
