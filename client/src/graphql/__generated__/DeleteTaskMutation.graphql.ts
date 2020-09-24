/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteTaskByRowIdInput = {
    clientMutationId?: string | null;
    rowId: number;
};
export type DeleteTaskMutationVariables = {
    input: DeleteTaskByRowIdInput;
};
export type DeleteTaskMutationResponse = {
    readonly deleteTaskByRowId: {
        readonly task: {
            readonly " $fragmentRefs": FragmentRefs<"TodoItem_taskData">;
        } | null;
    } | null;
};
export type DeleteTaskMutation = {
    readonly response: DeleteTaskMutationResponse;
    readonly variables: DeleteTaskMutationVariables;
};



/*
mutation DeleteTaskMutation(
  $input: DeleteTaskByRowIdInput!
) {
  deleteTaskByRowId(input: $input) {
    task {
      ...TodoItem_taskData
      id
    }
  }
}

fragment TodoItem_taskData on Task {
  id
  rowId
  task
  completed
  dateCreated
  dateUpdated
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTaskPayload",
        "kind": "LinkedField",
        "name": "deleteTaskByRowId",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTaskPayload",
        "kind": "LinkedField",
        "name": "deleteTaskByRowId",
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e3c5ef2e4a5144abfb98ca03b3f7a3af",
    "id": null,
    "metadata": {},
    "name": "DeleteTaskMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTaskMutation(\n  $input: DeleteTaskByRowIdInput!\n) {\n  deleteTaskByRowId(input: $input) {\n    task {\n      ...TodoItem_taskData\n      id\n    }\n  }\n}\n\nfragment TodoItem_taskData on Task {\n  id\n  rowId\n  task\n  completed\n  dateCreated\n  dateUpdated\n}\n"
  }
};
})();
(node as any).hash = '5d33356ea14586cac3c56b4492db8b90';
export default node;
