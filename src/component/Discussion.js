const Discussion = (data) => {
    const discussion = data.Discussion;
    console.log(data)
    return (
        <li className="discussion__container">
            <div className="discussion__avatar--wrapper">
                <img className="discussion__avatar--image"
                    src={discussion.avatarUrl}
                    alt={discussion + '의 이미지'} />
            </div>
            <div className="discussion__content">
                <h2 className="discussion__title"><a href={discussion.url}>{discussion.title}</a></h2>
                <div className="discussion__information">{discussion.author} / {discussion.createdAt}</div>
            </div>
            <div className="discussion__answered">{discussion.answer ? <p>☑</p> : <p>X</p>}</div>
        </li>
    )
}

export default Discussion;