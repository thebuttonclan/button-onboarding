/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoList_taskListData = {
    readonly allTasks: {
        readonly nodes: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"TodoItem_taskData">;
        } | null>;
    } | null;
    readonly " $refType": "TodoList_taskListData";
};
export type TodoList_taskListData$data = TodoList_taskListData;
export type TodoList_taskListData$key = {
    readonly " $data"?: TodoList_taskListData$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoList_taskListData">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_taskListData",
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
              "name": "TodoItem_taskData"
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
(node as any).hash = 'd40fc9c2580968ea4d3144543265ee70';
export default node;
