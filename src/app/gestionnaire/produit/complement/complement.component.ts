import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // @Input ('catas') catas: any|null= null
  // @Input('tailles') tailles: any|null = null
  // @Input('frites') frites: any|null = null
  // @Input('i') i: any
  // @Input() form: any;
  // @Output() remove: EventEmitter<any> = new EventEmitter();

  // deleteTaille(lessonIndex: number) {
  //   this.remove.emit(lessonIndex)
  // }
  // deleteBurger(lessonIndex: number) {
  //   this.remove.emit(lessonIndex)
  // }
  // deleteFrite(lessonIndex: number) {
  //   this.remove.emit(lessonIndex)
  // }
  // constructor() { }

  // ngOnInit(): void {
  // }

}
