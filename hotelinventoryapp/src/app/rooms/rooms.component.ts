import {
  Component,
  ViewChild,
  DoCheck,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getRooms().subscribe((rooms) => {
      console.log(rooms, 'rooms');
      this.roomList = rooms;
    });
    // this.roomList = this.roomsService.getRooms();
  }
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;
  selectedRoom!: RoomList;
  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent; // initialise a new instance of headercomponent
  ngAfterViewInit(): void {
    this.headerComponent.title = 'Ablublu';
  }
  ngAfterViewChecked(): void {
    console.log('on after view checked is called');
  }
  rooms: Room = {
    availableRooms: 5,
    bookedRooms: 5,
    totalRooms: 20,
  };
  roomList: RoomList[] = [];

  ngDoCheck(): void {
    console.log('on check is called');
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      // roomNumber: '4',
      roomType: 'Quad',
      amenities: 'TV, AC, WiFi',
      photos: 'assets/images/quad.jpg',
      rating: 4.5,
      price: 400,
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
    };
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }
  toggle(): void {
    console.log(this, 'this');
    console.log(this.hideRooms, 'toggle');
    this.hideRooms = !this.hideRooms;
  }
  editRoom() {
    const room: RoomList = {
      roomNumber: '3 ',
      roomType: 'Quad',
      amenities: 'TV, AC, WiFi',
      photos: 'assets/images/quad.jpg',
      rating: 4.5,
      price: 400,
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
    };
    this.roomsService.updateRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }
  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    });
  }
}
