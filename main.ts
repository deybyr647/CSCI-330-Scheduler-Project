import Process from "./src/Process";
import Queue from "./src/Queue";

const process1: Process = new Process("1", 0, 5);

console.log(process1.getPID());
console.log(process1);

const processQueue: Queue<Process> = new Queue<Process>();
processQueue.enqueue(process1);
processQueue.print();

processQueue.fromArray([process1, process1, process1] as Process[]);
processQueue.print();
