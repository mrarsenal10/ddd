// app.ts
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
