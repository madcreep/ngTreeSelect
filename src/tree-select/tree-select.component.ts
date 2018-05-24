import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TreeService} from "../tree.service";
import {TreeViewComponent} from "../tree-view/tree-view.component";

@Component({
  selector: 'ng2-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.css']
})
export class TreeSelectComponent extends TreeViewComponent implements OnInit, OnDestroy {

  constructor(protected loaderServcie: TreeService) {
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
