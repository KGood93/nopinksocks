import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Welcome from './Welcome';

describe('Welcome Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<Welcome />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});