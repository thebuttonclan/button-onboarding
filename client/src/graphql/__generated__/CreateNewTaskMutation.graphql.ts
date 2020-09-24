/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateTaskInput = {
    clientMutationId?: string | null;
    task: TaskInput;
};
export type TaskInput = {
    rowId?: number | null;
    task?: string | null;
    completed?: boolean | null;
    dateCreated?: unknown | null;
    dateUpdated?: unknown | null;
};
export type CreateNewTaskMutationVariables = {
    input: CreateTaskInput;
};
export type CreateNewTaskMutationResponse = {
    readonly createTask: {
        readonly task: {
            readonly " $fragmentRefs": FragmentRefs<"TodoItem_taskData">;
        } | null;
    } | null;
};
export type CreateNewTaskMutation = {
    readonly response: CreateNewTaskMutationResponse;
    readonly variables: CreateNewTaskMutationVariables;
};



/*
mutation CreateNewTaskMutation(
  $input: CreateTaskInput!
) {
  createTask(input: $input) {
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
    "name": "CreateNewTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
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
    "name": "CreateNewTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
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
    "cacheID": "57d2d30191dccfd3691d6b5ce97d9b76",
    "id": null,
    "metadata": {},
    "name": "CreateNewTaskMutation",
    "operationKind": "mutation",
    "text": "mutation CreateNewTaskMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    task {\n      ...TodoItem_taskData\n      id\n    }\n  }\n}\n\nfragment TodoItem_taskData on Task {\n  id\n  rowId\n  task\n  completed\n  dateCreated\n  dateUpdated\n}\n"
  }
};
})();
(node as any).hash = '6a10c7c5160d697539adf940b034b39e';
export default node;
