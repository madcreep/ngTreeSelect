import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Ng2TreeService} from "../tree.service";
import {Ng2TreeViewComponent} from "../tree-view/tree-view.component";

@Component({
  selector: 'ng2-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.css']
})
export class Ng2TreeSelectComponent extends Ng2TreeViewComponent implements OnInit, OnDestroy {

  constructor(protected loaderServcie: Ng2TreeService) {
    super(loaderServcie);
  }

  @Input() alignRight: boolean;
  @Input() dropup: boolean;

  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
