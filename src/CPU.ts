import Process from "./Process";
import Queue from "./Queue";

class CPU {
  private cpuUtilization: number;
  private cpuThroughput: number;
  private cpuTurnaroundTime: number;
  private cpuWaitingTime: number;
  private timeQuantum: number;
  private readyQueue: Queue<Process> = new Queue<Process>();
}
