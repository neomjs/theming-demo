import Button from '../../../node_modules/neo.mjs/src/button/Base.mjs';

/**
 * @class MyApp.view.BlueButton
 * @extends Neo.button.Base
 */
class BlueButton extends Button {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.BlueButton'
         * @protected
         */
        className: 'MyApp.view.BlueButton',
        /**
         * @member {String[]} cls=['neo-blue-button','neo-button']
         */
        cls: ['neo-blue-button', 'neo-button']
    }}
}

Neo.applyClassConfig(BlueButton);

export {BlueButton as default};
