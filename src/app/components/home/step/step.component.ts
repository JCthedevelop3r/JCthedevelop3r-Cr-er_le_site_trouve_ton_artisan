import { Component, OnInit, Input } from '@angular/core';
import { DataStepsService } from '../../../data-steps.service';
import { Step } from './step.model';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent implements OnInit {
  step: Step[] = [];

  @Input() stepTitle: string = '';
  @Input() srcImg: string = '';
  @Input() altImg: string = '';
  @Input() stepSubTitle: string = '';
  @Input() description: string = '';

  constructor(private dataStepsService: DataStepsService) { }

  ngOnInit() {
    this.step = this.dataStepsService.dataSteps;
  }
}
