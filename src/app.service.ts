import { Injectable } from '@nestjs/common';
import { getEnvironmentData } from 'worker_threads';
import { Event } from './lib/Event';

@Injectable()
export class AppService {
  private events: Event[] = [];

  constructor() {
    this.events.push({
      id: 1,
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
      id: 2,
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
}
