import { CreateItemCommand } from "./CreateItemCommand";
import { CreateItemValidator } from "./CreateItemValidator";
import { Item } from "../models/Item";
import mapper from "../mappings/MappingProfile";

export class CreateItemCommandHandler {
  public async handle(command: CreateItemCommand): Promise<Item> {
    await CreateItemValidator.validate(command);

    const newItem = mapper.map<CreateItemCommand, Item>(
      command,
      "CreateItemCommand",
      "Item"
    );

    // Save the item to the database (pseudo code)
    // await database.save(newItem);

    return newItem;
  }
}
