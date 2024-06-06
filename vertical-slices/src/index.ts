import { CreateItemCommandHandler } from "./commands/CreateItemCommandHandler";
import { GetItemQueryHandler } from "./queries/GetItemQueryHandler";
import { CreateItemCommand } from "./commands/CreateItemCommand";
import { GetItemQuery } from "./queries/GetItemQuery";

// Example usage:

const createHandler = new CreateItemCommandHandler();
const getHandler = new GetItemQueryHandler();

async function run() {
  const createCommand: CreateItemCommand = {
    name: "NewItem",
    description: "New item description"
  };
  const createdItem = await createHandler.handle(createCommand);
  console.log("Created Item:", createdItem);

  const getQuery: GetItemQuery = { id: createdItem.id };
  const itemResponse = await getHandler.handle(getQuery);
  console.log("Retrieved Item:", itemResponse);
}

run();
