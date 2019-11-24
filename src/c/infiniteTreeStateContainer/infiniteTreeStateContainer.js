import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import { classListMutation, normalizeString } from 'c/utilsPrivate';
import { computeSldsClass } from 'c/iconUtils';

const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'square';

const items = [
    {
        label: 'Western Sales Director',
        name: '1',
        isLeaf: false,
        expanded: true,
        items: [
            {
                label: 'Western Sales Manager',
                name: '2',
                expanded: true,
                items: [
                    {
                        label: 'CA Sales Rep',
                        name: '3',
                        expanded: true,
                        isLeaf: true,
                        items: []
                    },
                    {
                        label: 'OR Sales Rep',
                        name: '4',
                        expanded: true,
                        isLeaf: true,
                        items: []
                    }
                ]
            }
        ]
    },
    {
        label: 'Eastern Sales Director',
        name: '5',
        expanded: false,
        items: [
            {
                label: 'Eastern Sales Manager',
                name: '6',
                expanded: true,
                items: [
                    {
                        label: 'NY Sales Rep',
                        name: '7',
                        expanded: true,
                        isLeaf: true,
                        items: []
                    },
                    {
                        label: 'MA Sales Rep',
                        name: '8',
                        expanded: true,
                        isLeaf: true,
                        items: []
                    }
                ]
            }
        ]
    }
];

const mapping = {
    '1': 'Western Sales Director',
    '2': 'Western Sales Manager',
    '3': 'CA Sales Rep',
    '4': 'OR Sales Rep',
    '5': 'Eastern Sales Director',
    '6': 'Eastern Sales Manager',
    '7': 'NY Sales Rep',
    '8': 'MA Sales Rep'
};

export default class cInfiniteTreeStateContainer extends LightningElement {
    @track treeList = items;

    // @api alternativeText = '';
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
    connectedCallback() {
        // console.log(this.treeList);
    }
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
    // get showIcon() {
    //     return !this._src && !this.initials;
    // }
    // handleImageError(event) {
    //     // eslint-disable-next-line no-console
    //     console.warn(
    //         `<c-avatar> Image with src="${event.target.src}" failed to load.`
    //     );
    //     this._src = '';
    // }
}
