/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoListViewQueryVariables = {};
export type TodoListViewQueryResponse = {
    readonly query: {
        readonly " $fragmentRefs": FragmentRefs<"TodoList_taskListData">;
    };
};
export type TodoListViewQuery = {
    readonly response: TodoListViewQueryResponse;
    readonly variables: TodoListViewQueryVariables;
};



/*
query TodoListViewQuery {
  query {
    ...TodoList_taskListData
    id
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

fragment TodoList_taskListData on Query {
  allTasks {
    nodes {
      rowId
      ...TodoItem_taskData
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoList_taskListData"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "rowId",
                    "storageKey": null
                  },
                  (v0/*: any*/),
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
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "43b23aa5743a508ce7fd191923f1f59e",
    "id": null,
    "metadata": {},
    "name": "TodoListViewQuery",
    "operationKind": "query",
    "text": "query TodoListViewQuery {\n  query {\n    ...TodoList_taskListData\n    id\n  }\n}\n\nfragment TodoItem_taskData on Task {\n  id\n  rowId\n  task\n  completed\n  dateCreated\n  dateUpdated\n}\n\nfragment TodoList_taskListData on Query {\n  allTasks {\n    nodes {\n      rowId\n      ...TodoItem_taskData\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7712fd00e8d1b1cda4e7c4f0edbb420a';
export default node;
