"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modeValues = exports.elementWithSubtypes = exports.buttonOptions = exports.selectSubtypes = exports.headingSubtypes = exports.logicAction = exports.operatorType = exports.verticalPositionType = exports.horizontalPositionType = exports.spaceType = exports.layoutSize = exports.columnType = exports.validationType = exports.actions = exports.size = exports.position = exports.staticType = exports.structureType = exports.fieldType = void 0;
// Element Group
exports.fieldType = [
    'checkbox',
    'email',
    'number',
    'phone',
    'select',
    'text',
    'textarea',
    'password',
    'checkbox',
    'radio',
    'switch',
    'select',
];
exports.structureType = ['container', 'tabs'];
exports.staticType = ['button', 'heading'];
exports.position = ['left', 'top', 'bottom', 'right', 'start', 'center', 'middle', 'end'];
exports.size = ['x-small', 'small', 'default', 'large', 'x-large'];
exports.actions = ['show', 'hide', 'enable', 'disable'];
exports.validationType = ['custom', 'email', 'min', 'max', 'number', 'required'];
exports.columnType = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
exports.layoutSize = ['default', 'compact', 'comfortable'];
exports.spaceType = [0, 1, 2, 3, 4];
exports.horizontalPositionType = ['left', 'center', 'right'];
exports.verticalPositionType = ['top', 'center', 'bottom'];
exports.operatorType = [
    'equals',
    'not_equals',
    'greater_than',
    'less_than',
    'greater_than_or_equals',
    'less_than_or_equals',
];
exports.logicAction = ['show', 'hide', 'enable', 'disable'];
exports.headingSubtypes = ['form', 'section', 'subsection'];
exports.selectSubtypes = ['single', 'multiple'];
exports.buttonOptions = ['primary', 'secondary', 'warning', 'danger'];
exports.elementWithSubtypes = ['heading', 'select'];
exports.modeValues = ['editor', 'preview'];
