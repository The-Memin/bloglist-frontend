import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('Blog component', () => {
    let container
    let blog
    beforeEach(() => {
        blog = {
            title: 'Test Blog Title',
            url: 'http://testblog.com',
            likes: 5,
            author: 'testuser'
        }
        const user = {
            username: 'testuser'
        }
        container = render(<Blog blog={blog} user={user}/>).container
    })

    test('renders title', () => {
        const title = screen.getByText('Test Blog Title', { exact: false })
        const details = container.querySelector('.details')
        expect(details).toHaveStyle('display: none')
        expect(title).toBeDefined()
    })

    test('shows url and likes when view button is clicked', async () => {
        const user = userEvent.setup()
        const button = screen.getByText('view')
        await user.click(button)

        const details = container.querySelector('.details')
        expect(details).not.toHaveStyle('display: none')
        expect(details).toHaveTextContent(`URL: ${blog.url}`)
        expect(details).toHaveTextContent(`Likes: ${blog.likes}`)
    })
})