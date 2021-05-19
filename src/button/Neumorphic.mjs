import Button from '../../node_modules/neo.mjs/src/button/Base.mjs';

/**
 * @class Neo.button.Neumorphic
 * @extends Neo.button.Base
 */
class Neumorphic extends Button {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.button.Neumorphic'
         * @protected
         */
        className: 'Neo.button.Neumorphic',
        /**
         * @member {String[]} cls=['neumorphic-button','neo-button']
         */
        cls: ['neumorphic-button', 'neo-button']
    }}
}

Neo.applyClassConfig(Neumorphic);

export {Neumorphic as default};
