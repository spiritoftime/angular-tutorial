import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { RoomList, Room } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnDestroy {
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';
  @Input() toggle!: () => void;
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rooms']) {
      this.rooms = changes['rooms'].currentValue;
    }
  }

  ngOnInit(): void {}
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
}
