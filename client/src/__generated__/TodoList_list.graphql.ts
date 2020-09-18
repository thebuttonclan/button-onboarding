/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoList_list = {
    readonly allTasks: {
        readonly nodes: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"TodoItem_item">;
        } | null>;
    } | null;
    readonly " $refType": "TodoList_list";
};
export type TodoList_list$data = TodoList_list;
export type TodoList_list$key = {
    readonly " $data"?: TodoList_list$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoList_list">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_list",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TasksConnection",
      "kind": "LinkedField",
      "name": "allTasks",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Task",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "TodoItem_item"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '3aee8ea6c4914a61bbbf88872e1fefee';
export default node;
