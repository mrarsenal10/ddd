// commandHandlers.ts
import {
  HazardCreatedEvent,
  HazardUpdatedEvent,
  HazardDeletedEvent,
} from "./events";
import {
  HazardCreatedEventHandler,
  HazardUpdatedEventHandler,
  HazardDeletedEventHandler,
} from "./eventHandlers";

export class CreateHazardCommand {
  constructor(public hazardId: string, public name: string) {}
}

export class UpdateHazardCommand {
  constructor(public hazardId: string, public name: string) {}
}

export class DeleteHazardCommand {
  constructor(public hazardId: string) {}
}

export class CommandHandler {
  private hazardCreatedEventHandler = new HazardCreatedEventHandler();
  private hazardUpdatedEventHandler = new HazardUpdatedEventHandler();
  private hazardDeletedEventHandler = new HazardDeletedEventHandler();

  handle(
    command: CreateHazardCommand | UpdateHazardCommand | DeleteHazardCommand
  ) {
    if (command instanceof CreateHazardCommand) {
      const event = new HazardCreatedEvent(command.hazardId, command.name);
      this.hazardCreatedEventHandler.handle(event);
    } else if (command instanceof UpdateHazardCommand) {
      const event = new HazardUpdatedEvent(command.hazardId, command.name);
      this.hazardUpdatedEventHandler.handle(event);
    } else if (command instanceof DeleteHazardCommand) {
      const event = new HazardDeletedEvent(command.hazardId);
      this.hazardDeletedEventHandler.handle(event);
    }
  }
}
