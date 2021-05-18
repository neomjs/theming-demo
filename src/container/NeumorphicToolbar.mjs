import Toolbar from '../../node_modules/neo.mjs/src/container/Toolbar.mjs';

/**
 * @class Neo.container.NeumorphicToolbar
 * @extends Neo.container.Toolbar
 */
class NeumorphicToolbar extends Toolbar {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.NeumorphicToolbar'
         * @protected
         */
        className: 'Neo.container.NeumorphicToolbar',
        /**
         * @member {String[]} cls=['neumorphic-toolbar','neo-toolbar']
         */
        cls: ['neumorphic-toolbar', 'neo-toolbar']
    }}
}

Neo.applyClassConfig(NeumorphicToolbar);

export {NeumorphicToolbar as default};
