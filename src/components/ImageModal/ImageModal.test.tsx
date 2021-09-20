import { render } from '@test/test-utils'
import { ImageModal } from './ImageModal'

describe('ImageModal', () => {
  it('should render', () => {
    render(<ImageModal image='https://source.unsplash.com/random' />)
  })
})
