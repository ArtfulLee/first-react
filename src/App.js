import "./App.css";

function App() {
  return (
    <div>
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

function Job(props) {
  return (
    <div>
      <span>{props.salary}</span>
      <span>{props.position}</span>
      <span>{props.company}</span>
    </div>
  );
}

export default App;
