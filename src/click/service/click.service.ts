import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

export interface ClickData {
  userId: string;
  x: number;
  y: number;
}

@Injectable()
export class ClickService {

  public click$: Observable<ClickData>;
  private clickSubject: Subject<ClickData>;

  constructor() {
    this.clickSubject = new Subject();
    this.click$ = this.clickSubject.asObservable();
  }

  public click(data: ClickData): void {
    this.clickSubject.next(data);
  }

}
