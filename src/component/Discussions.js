import Discussion from "./Discussion";

const Discussions = (discussions) => {
    return (
        <section className="discussion__wrapper">
            <ul className="discussions__container">
                {discussions.discussions.map((data) => {
                    return <Discussion Discussion={data} key={data.id} />
                })}
            </ul>
        </section>
    )
}

export default Discussions;