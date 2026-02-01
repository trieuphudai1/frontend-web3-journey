import Header from './Header'
import './App.css'
import CourseItem from './components/CourseItem';
import { useState } from 'react';

function App() {
  const courses = ["HTML", "CSS", "JS", "React"];
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <ul>
        {courses.map(course => {
          return <CourseItem key={course} title={course}/>
        })}
      </ul>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    </>
  )
}

export default App
