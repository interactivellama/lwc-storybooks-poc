import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import { classListMutation, normalizeString } from 'c/utilsPrivate';
import { computeSldsClass } from 'c/iconUtils';

const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'square';

export default class cInfiniteTreeItem extends LightningElement {
    @track _label = '';
    @track _isRoot = false;
    @track _childNodes = [];
    @track _items;
    @track _isLeaf = false;

    @api get label() {
        return this._label || '';
    }

    set label(value) {
        this._label = value;
    }

    @api
    get items() {
        return this._items || [];
    }

    set items(value) {
        //this.normalizeData(value);
        this._items = value;
        this._childNodes = value;
        console.log(this._childNodes);
    }

    get children() {
        return this._childNodes;
    }

    @api
    get isLeaf() {
        return this._isLeaf;
    }

    set isLeaf(value) {
        this._isLeaf = value;
    }

    @api
    get isRoot() {
        return this._isRoot;
    }

    set isRoot(value) {
        this._isRoot = value;
    }

    get hasChildren() {
        console.log(this._childNodes && this._childNodes.length > 0);
        return this._childNodes && this._childNodes.length > 0;
    }

    // @track _size = DEFAULT_SIZE;
    // @api get size() {
    //     return this._size;
    // }
    // set size(value) {
    //     this._size = normalizeString(value, {
    //         fallbackValue: DEFAULT_SIZE,
    //         validValues: ['x-small', 'small', 'medium', 'large']
    //     });
    //     this.updateClassList();
    // }
    // @api get src() {
    //     return this._src;
    // }
    // set src(value) {
    //     this._src = (typeof value === 'string' && value.trim()) || '';
    // }
    // @api get variant() {
    //     return this._variant;
    // }
    // set variant(value) {
    //     this._variant = normalizeString(value, {
    //         fallbackValue: DEFAULT_VARIANT,
    //         validValues: ['circle', 'square']
    //     });
    //     this.updateClassList();
    // }
    // connectedCallback() {
    //     this.updateClassList();
    // }
    // updateClassList() {
    //     const size = this._size;
    //     const variant = this._variant;
    //     const classes = classSet('slds-avatar')
    //         .add({
    //             'slds-avatar_x-small': size === 'x-small',
    //             'slds-avatar_small': size === 'small',
    //             'slds-avatar_medium': size === 'medium',
    //             'slds-avatar_large': size === 'large'
    //         })
    //         .add({
    //             'slds-avatar_circle': variant === 'circle'
    //         });
    //     classListMutation(this.classList, classes);
    // }
    // get computedInitialsClass() {
    //     return classSet('slds-avatar__initials')
    //         .add(computeSldsClass(this.fallbackIconName))
    //         .toString();
    // }
    // get showInitials() {
    //     return !this._src && this.initials;
    // }
    get showIcon() {
        return true;
        // return !this._src && !this.initials;
    }
    // handleImageError(event) {
    //     // eslint-disable-next-line no-console
    //     console.warn(
    //         `<c-avatar> Image with src="${event.target.src}" failed to load.`
    //     );
    //     this._src = '';
    // }
}
