import "./Title.css"


const Title = () => {
  return (
    <div className="title-container hero">
      <div className="name-cointainer">
        <h1 className="name">Diogo
          <br />
          Krub de Almeida</h1>
        <h2 className="title">Full Stack Developer</h2>
        <button className="btn btn-primary">Resume</button>
        <button className="btn btn-primary">GitHub Page</button>
      </div>

      <div className="photo-container avatar">
        <div className="">
        <img src="../../../public/avatar/avatar-picture.jpg" alt="avatar" />

        </div>
      </div>




    </div>
  )
}

export default Title