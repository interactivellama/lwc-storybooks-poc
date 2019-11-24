import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import cInfiniteTreeStateContainer from 'c/infiniteTreeStateContainer';
import cInfiniteTree from 'c/infiniteTree';
import cInfiniteTreeItem from 'c/infiniteTreeItem';
import cInfiniteTreeHeader from 'c/infiniteTreeHeader';

buildAndRegisterCustomElement(
    'c-infinite-tree-state-container',
    cInfiniteTreeStateContainer
);
buildAndRegisterCustomElement('test-infinite-tree', cInfiniteTree);
buildAndRegisterCustomElement('test-infinite-tree-item', cInfiniteTreeItem);
buildAndRegisterCustomElement('test-infinite-tree-header', cInfiniteTreeHeader);

storiesOf('Infinite Tree', module)
    .add(
        'Base',
        () => `
<div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
<c-infinite-tree-state-container></c-infinite-tree-state-container>
</div>   
`
    )
    .add(
        'Tree Header',
        () => `
  <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
      <test-infinite-tree-header></test-infinite-tree-header>
  </div>
`
    )
    .add(
        'Tree Item',
        () => `
      <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
          <test-infinite-tree-item></test-infinite-tree-item>
      </div>
  `
    );
