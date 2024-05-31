// events.ts
export interface DomainEvent {
  occurredAt: Date;
}

export class HazardCreatedEvent implements DomainEvent {
  occurredAt = new Date();
  constructor(public hazardId: string, public name: string) {}
}

export class HazardUpdatedEvent implements DomainEvent {
  occurredAt = new Date();
  constructor(public hazardId: string, public name: string) {}
}

export class HazardDeletedEvent implements DomainEvent {
  occurredAt = new Date();
  constructor(public hazardId: string) {}
}

// Similar events for Risk, Action, HazardRisk, and RiskAction can be defined similarly
