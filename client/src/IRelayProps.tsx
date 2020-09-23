import { RelayPaginationProp, RelayProp, RelayRefetchProp } from "react-relay";
import { Environment } from "relay-runtime";

// Wrapper interfaces for relay properties, so we can access the environment through the Props object that's being passed.

export interface IRelayProps {
    relay : RelayProp
}

export interface IRelayRefetchProps{
    relay : RelayRefetchProp
}

export interface IRelayPaginationProps {
    relay : RelayPaginationProp
}

