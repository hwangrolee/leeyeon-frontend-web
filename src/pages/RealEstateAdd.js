import React, { Component } from 'react';
import { Zone, Preview}  from 'components/DragAndDrop';

import { DragAndDropProvider } from 'contexts/DragAndDrop';
export default class RealEstateAdd extends Component {

    render() {
        return (
            <DragAndDropProvider>
                <h1>부동산 등록</h1>
                
                <Zone>

                    
                </Zone>
                <Preview/>
                
                
            </DragAndDropProvider>
        )
    }
}