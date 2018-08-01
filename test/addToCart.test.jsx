import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('Should have the className purchase_price', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.purchase_price').exists()).toEqual(true);
  });

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
  });

});
