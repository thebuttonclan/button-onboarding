/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoItem_taskData = {
    readonly id: string;
    readonly rowId: number;
    readonly task: string | null;
    readonly completed: boolean | null;
    readonly dateCreated: unknown;
    readonly dateUpdated: unknown;
    readonly " $refType": "TodoItem_taskData";
};
export type TodoItem_taskData$data = TodoItem_taskData;
export type TodoItem_taskData$key = {
    readonly " $data"?: TodoItem_taskData$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoItem_taskData">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_taskData",
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
(node as any).hash = 'd530447cd47b84e31158b025dd58a820';
export default node;
