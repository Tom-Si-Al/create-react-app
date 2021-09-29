/**
 * @jest-environment jsdom
 */

import { Form } from './Form'
import enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

enzyme.configure({ adapter: new Adapter() })

test('loads and displays greeting', async () => {
  const wrapper = shallow(<Form isValid={jest.fn} />)

  expect(wrapper.find('form')).toBeDefined()
})
