import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('Blog component', () => {

    test('renders title', () => {
        const blog = {
            title: 'Test Blog Title',
            url: 'http://testblog.com',
            likes: 5,
            author: 'testuser'
        }
        const user = {
            username: 'testuser'
        }
        const container = render(<Blog blog={blog} user={user}/>).container

        const title = screen.getByText('Test Blog Title', { exact: false })
        const details = container.querySelector('.details')
        expect(details).toHaveStyle('display: none')
        expect(title).toBeDefined()
    })
})