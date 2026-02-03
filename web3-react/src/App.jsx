import Header from './Header'
import './App.css'
import CourseItem from './components/CourseItem';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const courses = ["HTML", "CSS", "JS", "React"];
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count]);

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  });

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
