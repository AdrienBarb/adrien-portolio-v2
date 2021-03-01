import React from 'react'

const project = ({ pageContext }) => {
    const { article } = pageContext
    return (
        <div>
            {article.title}
        </div>
    )
}

export default project
