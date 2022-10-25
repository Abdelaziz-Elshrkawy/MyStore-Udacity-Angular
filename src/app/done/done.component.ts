import { subscribeOn, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit, OnDestroy {
  total: number
  subscription!: Subscription
  constructor(private activeRouter: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription = this.activeRouter.params.subscribe(
      data => this.total = parseFloat(data['total'])
    )
  }
}
