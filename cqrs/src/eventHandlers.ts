// eventHandlers.ts
import { HazardCreatedEvent, HazardUpdatedEvent, HazardDeletedEvent } from './events';
import { ReadModel } from './readModels';

export class HazardCreatedEventHandler {
  handle(event: HazardCreatedEvent) {
    ReadModel.createHazard(event.hazardId, event.name);
  }
}

export class HazardUpdatedEventHandler {
  handle(event: HazardUpdatedEvent) {
    ReadModel.updateHazard(event.hazardId, event.name);
  }
}

export class HazardDeletedEventHandler {
  handle(event: HazardDeletedEvent) {
    ReadModel.deleteHazard(event.hazardId);
  }
}

// Similar handlers for Risk, Action, HazardRisk, and RiskAction can be created similarly
