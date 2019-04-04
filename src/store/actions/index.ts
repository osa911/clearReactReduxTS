import { Increment } from "./increment";
import { Decrement } from "./decrement";
import { SetCounter } from "./setCounter";

export type Action = Increment | Decrement | SetCounter;

export * from "./increment";
export * from "./decrement";
export * from "./setCounter";
