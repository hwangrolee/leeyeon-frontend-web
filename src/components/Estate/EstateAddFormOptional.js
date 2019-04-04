import React, { Component } from 'react';
import {
    Checkbox,
    FormGroup,
    FormLabel,
    FormControlLabel,
} from '@material-ui/core';
import { withEstateForm } from '../../contexts/EstateAddForm';

class EstateAddFormOptional extends Component {
    state = {
        internet: { label: '인터넷', name: 'internet', checked: false },
        pet:  { label: '애완동물', name: 'pet', checked: false },
        refrigerator: { label: '냉장고', name: 'refrigerator', checked: false },
        washingmachine: { label: '세탁기', name: 'washingmachine', checked: false },
        veranda: { label: '베란다', name: 'veranda', checked: false },
        bathtub: { label: '욕조', name: 'bathtub', checked: false },
        parking: { label: '주차기능', name: 'parking', checked: false },
        doorlock: { label: '도어락', name: 'doorlock', checked: false },
        cabinet: { label: '장농', name: 'cabinet', checked: false },
        shoecloset: { label: '신발장', name: 'shoecloset', checked: false },
        induction: { label: '인덕션', name: 'induction', checked: false },
        airconditioner: { label: '에어컨', name: 'airconditioner', checked: false },
        table: { label: '책상', name: 'table', checked: false },
        tv: { label: '티비', name: 'tv', checked: false }
    }

     // 옵션사항이 변할때에만 렌더링되도록 구현.
    shouldComponentUpdate(nextProps, nextState) {
        const keys = Object.keys(this.state);
        return keys.some(key => {
            return this.state[key].checked !== nextState[key].checked
        });
    }

    handleChange = async (e) => {
        const { name, checked } = e.target;
        const option = Object.assign({}, this.state[name]);
        option.checked = checked;
        await this.setState({ [name]: option });
        this.props.setValue('options', this.state);
    }

    render () {
        return (
            <div style={{margin: '1.5em 0 0 0'}}>
                <FormLabel component="legend">추가 옵션</FormLabel>
                <FormGroup row>
                    {
                        Object.keys(this.state).map((key, index) => (
                            <FormControlLabel
                                key={index}
                                label={this.state[key].label}
                                control={
                                    <Checkbox
                                        name={this.state[key].name}
                                        checked={this.state[key].checked}
                                        onChange={this.handleChange}
                                        color="primary"
                                    />
                                }
                            />
                        ))
                    }
                </FormGroup>
            </div>
        )
    }
}

export default withEstateForm(EstateAddFormOptional);