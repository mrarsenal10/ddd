// models.ts
export class Hazard {
  constructor(public hazardId: string, public name: string) {}
}

export class Risk {
  constructor(public riskId: string, public name: string) {}
}

export class Action {
  constructor(public actionId: string, public name: string) {}
}

export class HazardRisk {
  constructor(public hazardId: string, public riskId: string) {}
}

export class RiskAction {
  constructor(public riskId: string, public actionId: string) {}
}
