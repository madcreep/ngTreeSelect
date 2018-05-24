# NgTreeSelect, NgTreeView

This is a simple pair of tree components for Angular 2+ (built with Angular 6) that provide lazy loading.

##TreeItem

These components use class TreeItem internally:

```
export class TreeItem {
  id: string;
  name: string;
  parent: string;
  children: TreeItem[];
  isLoaded: boolean;
  isOpen: boolean;
  get hasChildren() {
    return this.children && this.children.length > 0;
  }
  selected: boolean;

  constructor(id: string, name: string, parent: string = null) {
    this.id = id;
    this.name = name;
    this.parent = parent;
  }
}
```

## ng-tree-veiw

### Usage:
```
<ng-tree-view 
    [items]="items" 
    [lazyLoad]="true|false" 
    [(select)]="select" 
    (load)="loadCallback" 
    (loadBranch)="loadBranchCallback" 
    (loadPeers)="loadPeersCallback"
    (itemSelected)="itemSelectedCallback"
></ng-tree-view>
```

where:
 * `items` — optional array of `TreeItem` objects;
 * `lazyLoad` - option to use callbacks to load tree items dynamically;
 * `select` - a two-way binded selected object;
 * `load` - an event listener that is called when `ngInit()` life-cycle callback of the `ng-tree-view` is called;
 * `loadBranchCallback($event)` - an event listener that is being called when some tree branch (i.e. all the nodes lying higher than a particular one) has to be loaded; used whith `lazyLoad="true"` option only; 
params:
     * `child: string` - id of the node, which corresponded branch should be loaded; 
     
     after needed elements are loaded from an external resource, `TreeService`'s `branchLoadEvent` should be emitted like this:
     ``` 
     this.treeService.branchLoadEvent.emit(loadedItems);
     ```
 * `loadPeers($event)` - an event listener that is being called when all the peer nodes lying underneath of a particular parent should be loaded; 
 params:
    * `parent: string` - id of tha parent node whose children should be loaded;
    
    after needed elements are loaded from the external resource, `TreeService`'s `peersLoadEvent` should be emitted like this:
    
    ```
    this.treeService.peersLoadEvent.emit(items);
    ```
 * `itemSelected($event)` - an event listener that is being called when an item (`TreeItem`) selected inside of the tree.
 
 
 ## ng-tree-select
 
 ### Usage:
 
 ```
 <ng-tree-select 
     [items]="items" 
     [lazyLoad]="true|false" 
     [(select)]="select" 
     (load)="loadCallback" 
     (loadBranch)="loadBranchCallback" 
     (loadPeers)="loadPeersCallback"
     (itemSelected)="itemSelectedCallback"
     [alignRight]="true|false"
     [dropup]="true|false"
 ></ng-tree-select>
 ```
 
 where:
 * `alignRight` - should the drop-down with tree's elements be aligned along the right border of the select?
 * `dropup` - should the drop-down be shown higher than the select?
 (look at the bootstrap's dropdowns to get the idea).
 
 
 ## Requirements
  * Angular 2+,
  * Bootstrap 4.