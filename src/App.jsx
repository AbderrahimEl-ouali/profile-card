function App() {
  const skillsList = [
    { name: "HTML & CSS", level: "advanced", color: "#02e802" },
    { name: "JAVASCRIPT", level: "advanced", color: "#e70f0f" },
    { name: "REACT JS", level: "intermediate", color: "#0b6fe2" },
    { name: "NODE & EXPRESS JS", level: "intermediate", color: "#ed8209" },
    { name: "MONGODB & SQL", level: "intermediate", color: "#8504f6" },
    { name: "PHP", level: "beginner", color: "#04eed7" },
    { name: "GIT", level: "advanced", color: "#7f4343" },
    { name: "PYTHON", level: "beginner", color: "#ef0bd4" },
  ];

  return (
    <Profile
      name="Abderrahim El Ouali"
      image="cropped_image.jpg"
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
          <Skill
            key={index}
            name={skill.name}
            level={skill.level}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
}

function Skill({ name, level, color }) {
  const emoji =
    level === "beginner" ? "👶" : level === "intermediate" ? "👍" : "💪";

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {name} {emoji}
    </div>
  );
}

export default App;
