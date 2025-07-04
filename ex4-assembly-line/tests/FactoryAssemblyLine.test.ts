import { FactoryAssemblyLine } from "../src/FactoryAssemblyLine";

describe("FactoryAssemblyLine", () => {
  let assemblyLine: FactoryAssemblyLine;

  beforeEach(() => {
    assemblyLine = new FactoryAssemblyLine(5);
  });

  test("should initialize with the correct number of stations", () => {

    expect(assemblyLine.getNumStations()).toBe(5);
    expect(assemblyLine.getNumActiveStations()).toBe(0);
    expect(assemblyLine.getNumInactiveStations()).toBe(5);
  });

  
  test("should add a station successfully", () => {
    assemblyLine.addStation(1, 10);
    expect(assemblyLine.getProcessingTime(1)).toBe(10);
    expect(assemblyLine.isStationActive(1)).toBe(false);
  });

  test("should throw an error when adding a duplicate station", () => {
    assemblyLine.addStation(1, 10);
    expect(() => assemblyLine.addStation(1, 15)).toThrow("Invalid or duplicate station ID");
  });

  test("should remove a station successfully", () => {
    assemblyLine.addStation(1, 10);
    assemblyLine.removeStation(1);
    expect(() => assemblyLine.getProcessingTime(1)).toThrow("Station ID does not exist");
  });

  test("should throw an error when removing a non-existent station", () => {
    expect(() => assemblyLine.removeStation(1)).toThrow("Station ID does not exist");
  });

  test("should start assembly for a station", () => {
    assemblyLine.addStation(1, 10);
    assemblyLine.startAssembly(1);
    expect(assemblyLine.isStationActive(1)).toBe(true);
    expect(assemblyLine.getNumActiveStations()).toBe(1);
  });

  test("should throw an error when starting assembly for a non-existent station", () => {
    expect(() => assemblyLine.startAssembly(1)).toThrow("Station ID does not exist");
  });

  test("should stop assembly for a station", () => {
    assemblyLine.addStation(1, 10);
    assemblyLine.startAssembly(1);
    assemblyLine.stopAssembly(1);
    expect(assemblyLine.isStationActive(1)).toBe(false);
    expect(assemblyLine.getNumActiveStations()).toBe(0);
  });

  test("should throw an error when stopping assembly for a non-existent station", () => {
    expect(() => assemblyLine.stopAssembly(1)).toThrow("Station ID does not exist");
  });

  test("should calculate total processing time of active stations", () => {
    assemblyLine.addStation(1, 10);
    assemblyLine.addStation(2, 20);
    assemblyLine.startAssembly(1);
    assemblyLine.startAssembly(2);
    expect(assemblyLine.getTotalProcessingTime()).toBe(30);
  });

  test("should return 0 total processing time when no stations are active", () => {
    expect(assemblyLine.getTotalProcessingTime()).toBe(0);
  });

  test("should throw an error when getting processing time of a non-existent station", () => {
    expect(() => assemblyLine.getProcessingTime(1)).toThrow("Station ID does not exist");
  });

  test("should correctly calculate the number of inactive stations", () => {
    assemblyLine.addStation(1, 10);
    assemblyLine.addStation(2, 20);
    assemblyLine.startAssembly(1);
    expect(assemblyLine.getNumInactiveStations()).toBe(3);
  });


});