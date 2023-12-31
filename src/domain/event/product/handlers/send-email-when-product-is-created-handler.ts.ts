import { IEventHandler } from "../../../contracts";
import { ProductCreatedEvent } from "../product-created-event";

export class SendEmailWhenProductIsCreatedHandler implements IEventHandler<ProductCreatedEvent> {
  handle(event: ProductCreatedEvent): void {
    console.log(`Sending email to ${event.dataTimeOcurred}....`)
  }
}