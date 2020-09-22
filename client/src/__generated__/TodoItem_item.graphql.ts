/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoItem_item = {
    readonly id: string;
    readonly rowId: number;
    readonly task: string | null;
    readonly completed: boolean | null;
    readonly dateCreated: unknown;
    readonly dateUpdated: unknown;
    readonly " $refType": "TodoItem_item";
};
export type TodoItem_item$data = TodoItem_item;
export type TodoItem_item$key = {
    readonly " $data"?: TodoItem_item$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoItem_item">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rowId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "task",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completed",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dateCreated",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dateUpdated",
      "storageKey": null
    }
  ],
  "type": "Task",
  "abstractKey": null
};
(node as any).hash = '0b3a8fc2aca3610ea3e21490eef9ccf1';
export default node;
