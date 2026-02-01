import Header from './Header'
import './App.css'
import CourseItem from './components/CourseItem';

function App() {
  const courses = ["HTML", "CSS", "JS", "React"];

  return (
    <>
      <Header/>
      <ul>
        {courses.map(course => {
          return <CourseItem key={course} title={course}/>
        })}
      </ul>
    </>
  )
}

export default App
