import Process from "./Process";
import * as fs from "fs";
import { Options, parse } from "csv-parse";

class ProcessCreator {
  static processes: object[] = [];

  public static createProcess(processName: string): Process {
    switch (processName) {
      case "ProcessA":
        return new Process();
      default:
        throw new Error("Process not found");
    }
  }

  public static readCSV(filePath: string): Promise<object[]> {
    const parseOptions: Options = {
      delimiter: ",",
      from_line: 2,
    };

    return new Promise((resolve, reject) => {
      // Create a ReadStream object for the CSV file
      fs.createReadStream(filePath)

        // Pipe the ReadStream object to the CSV parser
        .pipe(parse(parseOptions))

        .on("data", (data) => {
          const processObject = {
            pid: data[0],
            arrivalTime: data[1],
            burstTime: data[2],
          };

          this.processes.push(processObject);
        })

        .on("end", () => {
          console.log("finished reading CSV");
          resolve(this.processes);
        })

        .on("error", (err) => {
          console.log(err.message);
          reject(err);
        });
    });
  }
}

export default ProcessCreator;
