# CQRS System for Hazard Management

This repository implements a CQRS (Command Query Responsibility Segregation) system for managing hazards, risks, and actions. It includes domain models, domain events, event handlers, a denormalized read model, command handlers, and usage examples.

## Components

### Domain Models

Defines the structure of `Hazard`, `Risk`, `Action`, `HazardRisk`, and `RiskAction`.

- **Hazard**: Represents a hazard.
- **Risk**: Represents a risk.
- **Action**: Represents an action.
- **HazardRisk**: Represents the association between hazards and risks.
- **RiskAction**: Represents the association between risks and actions.

### Domain Events

Events for creating, updating, and deleting records.

- **HazardCreatedEvent**: Triggered when a new hazard is created.
- **HazardUpdatedEvent**: Triggered when a hazard is updated.
- **HazardDeletedEvent**: Triggered when a hazard is deleted.

Similar events exist for `Risk`, `Action`, `HazardRisk`, and `RiskAction`.

### Event Handlers

Handlers to update the read model when events occur.

- **HazardCreatedEventHandler**: Handles `HazardCreatedEvent` to update the read model.
- **HazardUpdatedEventHandler**: Handles `HazardUpdatedEvent` to update the read model.
- **HazardDeletedEventHandler**: Handles `HazardDeletedEvent` to update the read model.

Similar handlers exist for events related to `Risk`, `Action`, `HazardRisk`, and `RiskAction`.

### Read Model

Denormalized view combining data for optimized reads.

- **CustomerOrderView**: Maintains a denormalized view of hazards, risks, and actions to optimize read operations. It provides methods to create, update, and delete records.

### Command Handlers

Handle commands to perform CRUD operations and emit events.

- **CreateHazardCommand**: Command to create a new hazard.
- **UpdateHazardCommand**: Command to update an existing hazard.
- **DeleteHazardCommand**: Command to delete an existing hazard.

Similar commands exist for `Risk`, `Action`, `HazardRisk`, and `RiskAction`.

### Usage Example

Demonstrates creating, updating, and deleting hazards and querying the read model.

```typescript
import { CommandHandler } from "./commandHandlers";
import {
  CreateHazardCommand,
  UpdateHazardCommand,
  DeleteHazardCommand,
} from "./commandHandlers";
import { ReadModel } from "./readModels";

const commandHandler = new CommandHandler();

// Create a hazard
commandHandler.handle(new CreateHazardCommand("hazard1", "Fire"));

// Update a hazard
commandHandler.handle(new UpdateHazardCommand("hazard1", "Wildfire"));

// Delete a hazard
commandHandler.handle(new DeleteHazardCommand("hazard1"));

// Query the read model
console.log(ReadModel.getData());
```
