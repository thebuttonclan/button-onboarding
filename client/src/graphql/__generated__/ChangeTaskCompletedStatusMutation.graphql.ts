/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateTaskByRowIdInput = {
    clientMutationId?: string | null;
    taskPatch: TaskPatch;
    rowId: number;
};
export type TaskPatch = {
    rowId?: number | null;
    task?: string | null;
    completed?: boolean | null;
    dateCreated?: unknown | null;
    dateUpdated?: unknown | null;
};
export type ChangeTaskCompletedStatusMutationVariables = {
    input: UpdateTaskByRowIdInput;
};
export type ChangeTaskCompletedStatusMutationResponse = {
    readonly updateTaskByRowId: {
        readonly task: {
            readonly id: string;
            readonly rowId: number;
            readonly completed: boolean | null;
        } | null;
    } | null;
};
export type ChangeTaskCompletedStatusMutation = {
    readonly response: ChangeTaskCompletedStatusMutationResponse;
    readonly variables: ChangeTaskCompletedStatusMutationVariables;
};



/*
mutation ChangeTaskCompletedStatusMutation(
  $input: UpdateTaskByRowIdInput!
) {
  updateTaskByRowId(input: $input) {
    task {
      id
      rowId
      completed
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateTaskPayload",
    "kind": "LinkedField",
    "name": "updateTaskByRowId",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "task",
        "plural": false,
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
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangeTaskCompletedStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangeTaskCompletedStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2448e2e9a9391344398bb88cbc8e770b",
    "id": null,
    "metadata": {},
    "name": "ChangeTaskCompletedStatusMutation",
    "operationKind": "mutation",
    "text": "mutation ChangeTaskCompletedStatusMutation(\n  $input: UpdateTaskByRowIdInput!\n) {\n  updateTaskByRowId(input: $input) {\n    task {\n      id\n      rowId\n      completed\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ad89e1561da39ce48971b1db10c9f439';
export default node;
