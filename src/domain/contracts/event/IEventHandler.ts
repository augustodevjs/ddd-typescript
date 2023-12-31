import { IEvent } from "..";

export interface IEventHandler<T extends IEvent = IEvent> {
  handle(event: T): void;
}