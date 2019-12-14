import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import Footer from './presenter';


describe('<Footer />', () => {
  it('renders', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Footer setHideApp={spy} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls setHideApp prop', () => {
    const stub = sinon.stub(window, 'dispatchEvent');
    const spy = sinon.spy();
    const wrapper = mount(<Footer setHideApp={spy} />);
    wrapper.find('a').simulate('click');
    expect(spy.calledOnce).toBeTruthy();
    stub.restore();
  });
});
