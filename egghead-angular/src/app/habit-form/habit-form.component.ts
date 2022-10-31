import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  template: `
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input 
        type="text" 
        placeholder="Add habit" 
        formControlName="title" 
      />
      <button type="submit">Add</button>
    </form>
  `,
  styles: [
  ]
})
export class HabitFormComponent implements OnInit {
  habitForm: any   // represent model in the Reactive form
  @Output() addHabit = new EventEmitter<any>()

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({  // group is a group of controls for a form.
      title: '',
    })
  }

  onSubmit(newHabit:{ id:number, title: string}) {
    this.addHabit.emit(newHabit)
    this.habitForm.reset()
  }

  ngOnInit(): void {
  }

}
