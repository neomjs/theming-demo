import Button from '../../../node_modules/neo.mjs/src/button/Base.mjs';

/**
 * @class MyApp.view.NeumorphicButton
 * @extends Neo.container.Toolbar
 */
class NeumorphicButton extends Button {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.NeumorphicButton'
         * @protected
         */
        className: 'MyApp.view.NeumorphicButton',
        /**
         * @member {String[]} cls=['neo-red-toolbar','neo-toolbar']
         */
        cls: ['neumorphic-button', 'neo-button']
    }}
}

Neo.applyClassConfig(NeumorphicButton);

export {NeumorphicButton as default};
