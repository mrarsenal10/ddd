import { GetItemQuery } from "./GetItemQuery";
import { GetItemValidator } from "./GetItemValidator";
import { Item } from "../models/Item";
import { ItemResponse } from "../dtos/ItemResponse";
import mapper from "../mappings/MappingProfile";

export class GetItemQueryHandler {
  public async handle(query: GetItemQuery): Promise<ItemResponse> {
    await GetItemValidator.validate(query);

    // Retrieve the item from the database (pseudo code)
    const item: Item = await database.findById(query.id);

    return mapper.map<Item, ItemResponse>(item, "Item", "ItemResponse");
  }
}
