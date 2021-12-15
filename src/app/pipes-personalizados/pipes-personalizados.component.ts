import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

// @Component({
//   selector: 'app-pipes-personalizados',
//   templateUrl: './pipes-personalizados.component.html',
//   styleUrls: ['./pipes-personalizados.component.css'],
// })
@Pipe({ name: 'cambiarFecha' })
export class PipesPersonalizados implements PipeTransform {
  constructor() {}
  transform(value: Date, ...args: Date[]) {
    return value.getFullYear();
  }
}
