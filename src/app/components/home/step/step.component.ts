import { Component, OnInit } from '@angular/core';
import { DataStepsService } from '../../../data-steps.service';
import { Step } from './step.model';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent implements OnInit {
  step: Step[] = [];

  constructor(private dataStepsService: DataStepsService) { }

  ngOnInit() {
    this.step = this.dataStepsService.dataSteps;
  }
}
