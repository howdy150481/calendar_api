export type Event = {
    id: number,
    title: string,
    details: string,
    dateStart: string,
    timeStart: string,
    dateEnd: string,
    timeEnd: string,
    color?: string,
  allDay?: boolean;
    editable?: boolean
}