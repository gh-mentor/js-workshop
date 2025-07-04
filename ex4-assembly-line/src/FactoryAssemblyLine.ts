interface Station {
  processingTime: number;
  isActive: boolean;
}

/**
 * FactoryAssemblyLine class to manage an assembly line.
 */
export class FactoryAssemblyLine {
  private m_numStations: number;
  private m_numActiveStations: number;
  private m_stations: Map<number, Station>;

  /**
   * Constructor for FactoryAssemblyLine.
   * @param numStations The total number of stations in the assembly line.
   * @throws Error if numStations is negative.
   */
  constructor(numStations: number) {
    this.m_numStations = numStations;
    this.m_numActiveStations = 0;
    this.m_stations = new Map();
  }

  /**
   * Adds a station to the assembly line.
   * @param stationId The ID of the station.
   * @param processingTime The processing time of the station.
   * @throws Error if stationId is invalid or already exists.
   */
  addStation(stationId: number, processingTime: number): void {
    throw new Error("Not implemented");
  }

  /**
   * Removes a station from the assembly line.
   * @param stationId The ID of the station.
   * @throws Error if the station does not exist.
   */
  removeStation(stationId: number): void {
    throw new Error("Not implemented");
  }

  /**
   * Starts the assembly process for a station.
   * @param stationId The ID of the station.
   * @throws Error if the station does not exist.
   */
  startAssembly(stationId: number): void {
    throw new Error("Not implemented");
  }

  /**
   * Stops the assembly process for a station.
   * @param stationId The ID of the station.
   * @throws Error if the station does not exist.
   */
  stopAssembly(stationId: number): void {
    throw new Error("Not implemented");
  }

  /**
   * Gets the processing time of a station.
   * @param stationId The ID of the station.
   * @return The processing time of the station.
   * @throws Error if the station does not exist.
   */
  getProcessingTime(stationId: number): number {
    throw new Error("Not implemented");
  }

  /**
   * Gets the total processing time of all active stations.
   * @return The total processing time.
   */
  getTotalProcessingTime(): number {
    throw new Error("Not implemented");
  }

  /**
   * Gets the total number of stations.
   * @return The total number of stations.
   */
  getNumStations(): number {
    return this.m_numStations;
  }

  /**
   * Gets the number of active stations.
   * @return The number of active stations.
   */
  getNumActiveStations(): number {
    return this.m_numActiveStations;
  }

  /**
   * Gets the number of inactive stations.
   * @return The number of inactive stations.
   */
  getNumInactiveStations(): number {
    return this.m_numStations - this.m_numActiveStations;
  }

  /**
   * Checks if a station is active.
   * @param stationId The ID of the station.
   * @return True if the station is active, false otherwise.
   * @throws Error if the station does not exist.
   */
  isStationActive(stationId: number): boolean {
    throw new Error("Not implemented");
  }
}