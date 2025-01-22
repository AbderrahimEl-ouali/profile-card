function App() {
  const skillsList = [
    "HTML & CSS",
    "JAVASCRIPT",
    "REACT JS",
    "NODE & EXPRESS JS",
    "MONGODB & SQL",
    "PHP LARAVEL",
    "GIT",
    "PYTHON",
  ];

  return (
    <Profile
      name="Abderrahim El Ouali"
      image="/cropped_image.jpg"
      title="Full-Stack Web Developer"
      description="MERN Stack | PHP & Laravel | Student at ISTA Tinghir. Passionate about building scalable, user-friendly, and efficient web solutions tailored to client needs."
      skills={skillsList}
    />
  );
}

function Profile({ name, image, title, description, skills }) {
  return (
    <div className="container">
      <img src={image} alt={name} className="avatar" />
      <h1 className="title">{name}</h1>
      <p className="subtitle">{title}</p>
      <p className="description">{description}</p>
      <div className="skills">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </div>
    </div>
  );
}

function Skill({ name }) {
  return <div className="skill">{name}</div>;
}

export default App;
