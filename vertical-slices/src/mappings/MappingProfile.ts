import { createMap, forMember, mapFrom } from "automapper-ts";
import { Item } from "../models/Item";
import { ItemResponse } from "../dtos/ItemResponse";
import { CreateItemCommand } from "../commands/CreateItemCommand";

// Initialize AutoMapper
const mapper = automapper;

// Define the mappings
createMap<Item, ItemResponse>(mapper, "Item", "ItemResponse")
  .forMember(
    (d) => d.id,
    mapFrom((s) => s.id)
  )
  .forMember(
    (d) => d.name,
    mapFrom((s) => s.name)
  )
  .forMember(
    (d) => d.description,
    mapFrom((s) => s.description)
  );

createMap<CreateItemCommand, Item>(mapper, "CreateItemCommand", "Item")
  .forMember(
    (d) => d.id,
    mapFrom(() => "generated-id")
  ) // This would be generated by your database or another service
  .forMember(
    (d) => d.name,
    mapFrom((s) => s.name)
  )
  .forMember(
    (d) => d.description,
    mapFrom((s) => s.description)
  );

export default mapper;