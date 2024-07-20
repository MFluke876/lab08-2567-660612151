import Header from "./components/Header"
import Footer from "./components/Footer"
import Task from "./components/Task"
import TaskInput from "./components/TaskInput"

export default function Home() {

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />

        {/* task */}
        
        <Task  {...{id: 1, title: "Read a book", isDone: true}}/>
        <Task  {...{id: 2, title: "Take a shower", isDone: false}}/>
        <Task  {...{id: 3, title: "Sleep", isDone: false}}/>
        
      </div>
      {/* //footer section */}
      <Footer fullname="Patchanop Rodklueng" stdid="660612151" year="2024" />
    </div>
  );
}
