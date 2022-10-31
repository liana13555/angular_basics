import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item 
        *ngFor="let habit of habits | async" 
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: []
})
  
export class HabitListComponent implements OnInit {  
  habits!: Observable<Habit[]>

  constructor(private habitService: HabitService) {}
  
  ngOnInit(): void {
    this.habits = this.habitService.getHabits()
  }

  onAddHabit(newHabit:{ id:number, title: string}): void {
    this.habitService.addHabit(newHabit)
  }
}

/* Form inside HabitListComponent */

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';

// @Component({
//   selector: 'app-habit-list',
//   template: `
//     <h2>Habits</h2>
//     <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
//       <input 
//         type="text" 
//         placeholder="Add habit" 
//         formControlName="title" 
//       />
//       <button type="submit">Add</button>
//     </form>
//     <ul>
//       <app-habit-item 
//         *ngFor="let habit of habits" 
//         [habit]="habit"
//       ></app-habit-item>
//     </ul>
//   `,
//   styles: []
// })
// export class HabitListComponent {
//   habitForm: any   // represent model in the Reactive form
//   habits = [
//     {
//       id: 1,
//       title: 'Check in with parents once a week'
//     },
//     {
//       id: 2,
//       title: 'Record 2 videos per day'
//     },
//     {
//       id: 3,
//       title: 'Work on side project 5 hours/week'
//     },
//     {
//       id: 4,
//       title: 'Write for 20 minutes a day'
//     }
//   ]
//   constructor(private formBuilder: FormBuilder) {
//     this.habitForm = this.formBuilder.group({  // group is a group of controls for a form.
//       title: '',
//     })
//   }

//   onSubmit(newHabit:{ id:number, title: string}) {
//     const id = this.habits.length + 1
//     newHabit.id = id
//     this.habits.push(newHabit)
//     this.habitForm.reset()
//   }
// }

