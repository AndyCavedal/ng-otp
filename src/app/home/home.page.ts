import { Component, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  claveMaestra = [];
  otpInputs = new Array(8);

  @ViewChild('index0') index0?: ElementRef<HTMLInputElement>;
  @ViewChild('index1') index1!: ElementRef<HTMLInputElement>;
  @ViewChild('index2') index2!: ElementRef<HTMLInputElement>;

  constructor() {  }


  onOtpChange(event: any) {
    this.claveMaestra += event.target.value;
    console.log(this.claveMaestra);
  }

  // Funcion que verifica que lo que se envia sea un numero
  numericOnly(event: any): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    console.log(result)
    return result;
  }

  // onKeyUp(event: KeyboardEvent, index: number) {
  //   const input = event.target as HTMLInputElement;
  //   console.log('tecla: ' + KeyboardEvent);

  //   if (event.key >= '0' && event.key <= '9') {
  //     // Si es un número y hay un siguiente input, enfócalo
  //     if (index < this.otpInputs.length - 1) {
  //       this.otpInputFields.toArray()[index + 1].nativeElement.focus();
  //     }
  //   } else if (event.key === 'Backspace') {
  //     // Si es backspace y hay un input anterior, enfócalo
  //     if (index > 0) {
  //       this.otpInputFields.toArray()[index - 1].nativeElement.focus();
  //     }
  //   }
  // }

  onKeyUp (e: any, prev: any, current: any, next: any) {
    var length = current.value.length;
    var maxlength = 1;
    if (length == maxlength) {
      if (next) {
        console.log('Siguiente input');
        next.focus();
      }
    } else if (e.key === 'Backspace') {
      console.log('Retroceder input');
      prev.focus();
    }
  }
}
