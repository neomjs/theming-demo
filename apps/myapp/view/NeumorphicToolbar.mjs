import Toolbar from '../../../node_modules/neo.mjs/src/container/Toolbar.mjs';

/**
 * @class MyApp.view.NeumorphicToolbar
 * @extends Neo.container.Toolbar
 */
class NeumorphicToolbar extends Toolbar {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.NeumorphicToolbar'
         * @protected
         */
        className: 'MyApp.view.NeumorphicToolbar',
        /**
         * @member {String[]} cls=['neumorphic','neo-toolbar']
         */
        cls: ['neumorphic-toolbar', 'neo-toolbar']
    }}
}

Neo.applyClassConfig(NeumorphicToolbar);

export {NeumorphicToolbar as default};
