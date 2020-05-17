import  * as React from 'react';


export interface AppInterface { name: string;  };

export class AppComponent extends React.Component<AppInterface, {}>{
    
    render(){
        return <div> APP Component {this.props.name} </div>
    }

}