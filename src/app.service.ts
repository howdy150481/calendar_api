import { Injectable } from '@nestjs/common';
import { Event } from './lib/Event';

@Injectable()
export class AppService {
  private events: Event[] = [];

  constructor() {
    this.events.push({
      id: 'asdf',
      title: 'Event 1',
      details: 'Mooooh',
      dateStart: '2023-02-09',
      timeStart: '14:00',
      dateEnd: '2023-02-09',
      timeEnd: '16:00',
      allDay: false,
      editable: true,
      color: 'yellow'
    });
    this.events.push({
      id: 'asfwefwe',
      title: 'Event 2',
      details: 'Wuff',
      dateStart: '2023-02-06',
      timeStart: '09:00',
      dateEnd: '2023-02-06',
      timeEnd: '14:00',
      allDay: false,
      editable: true,
      color: 'red'
    });
  }

  getList(): any[] {
    return this.events;
  }

  saveEvent(body: any): void {
    let found: boolean = false;

    for (let key in this.events) {
      if (this.events[key].id === body.id) {
        found = true;
        this.events[key] = body
      }
    }

    if (!found) {
      this.events.push(body);
    }
  }

  deleteEvent(id: string): void {
    for (let key in this.events) {
      if (this.events[key].id === id) {
        this.events.splice(Number(key), 1);
      }
    }    
  }
}
