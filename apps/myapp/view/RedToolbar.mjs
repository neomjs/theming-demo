import Toolbar from '../../../node_modules/neo.mjs/src/container/Toolbar.mjs';

/**
 * @class MyApp.view.RedToolbar
 * @extends Neo.container.Toolbar
 */
class RedToolbar extends Toolbar {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.RedToolbar'
         * @protected
         */
        className: 'MyApp.view.RedToolbar',
        /**
         * @member {String[]} cls=['neo-red-toolbar','neo-toolbar']
         */
        cls: ['neo-red-toolbar', 'neo-toolbar']
    }}
}

Neo.applyClassConfig(RedToolbar);

export {RedToolbar as default};
