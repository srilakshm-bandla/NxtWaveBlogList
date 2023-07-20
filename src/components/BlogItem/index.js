// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  return (
    <div className="blog-list-items-container">
      <div className="sub-items">
        <h1 className="title">{item.title}</h1>
        <p className="date">{item.publishedDate}</p>
      </div>
      <div>
        <p className="desc">{item.description}</p>
      </div>
    </div>
  )
}

export default BlogItem
