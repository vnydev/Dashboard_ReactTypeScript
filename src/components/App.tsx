import  * as React from 'react';
import {Layout} from 'antd';
import {Routes} from './routes';
import './styles.scss';

export class AppComponent extends React.Component{
    
    render(){
        return (
            <Layout>
                {Routes}
            </Layout>
        )
    }

}