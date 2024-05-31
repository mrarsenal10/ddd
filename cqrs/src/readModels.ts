// readModels.ts
interface DenormalizedData {
  hazardId: string;
  hazardName: string;
  risks: {
    riskId: string;
    riskName: string;
    actions: { actionId: string; actionName: string }[];
  }[];
}

export class ReadModel {
  private static data: DenormalizedData[] = [];

  static createHazard(hazardId: string, hazardName: string) {
    this.data.push({ hazardId, hazardName, risks: [] });
  }

  static updateHazard(hazardId: string, hazardName: string) {
    const hazard = this.data.find((h) => h.hazardId === hazardId);
    if (hazard) {
      hazard.hazardName = hazardName;
    }
  }

  static deleteHazard(hazardId: string) {
    this.data = this.data.filter((h) => h.hazardId !== hazardId);
  }

  // Methods for managing risks and actions can be added similarly

  static getData(): DenormalizedData[] {
    return this.data;
  }
}
