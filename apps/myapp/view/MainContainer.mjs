import BlueButton        from './BlueButton.mjs';
import NeumorphicToolbar from './NeumorphicToolbar.mjs';
import RedToolbar        from './RedToolbar.mjs';
import TabContainer      from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport          from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'MyApp.view.MainContainer',
        autoMount: true,
        layout   : {ntype: 'fit'},

        items: [{
            module: TabContainer,
            height: 600,
            width : 800,
            style : {flex: 'none', margin: '20px'},

            items: [{
                ntype : 'container',
                layout: {ntype: 'vbox', align: 'stretch'},

                items: [{
                    module: NeumorphicToolbar,
                    flex  : 'none',
                    items : [{
                        text: 'Normal Button'
                    }, '->', {
                        module: BlueButton,
                        text  : 'Button 1'
                    }, {
                        module: BlueButton,
                        text  : 'Button 2',
                        style : {marginLeft: '.5em'}
                    }]
                }, {
                    ntype: 'container',
                    flex : 1
                }],

                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                }
            }, {
                ntype : 'container',
                layout: {ntype: 'vbox', align: 'stretch'},

                items: [{
                    module: RedToolbar,
                    flex  : 'none',
                    items : [{
                        text: 'Normal Button'
                    }, '->', {
                        module: BlueButton,
                        text  : 'Button 1'
                    }, {
                        module: BlueButton,
                        text  : 'Button 2',
                        style : {marginLeft: '.5em'}
                    }]
                }, {
                    ntype: 'container',
                    flex : 1
                }],

                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                }
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};
