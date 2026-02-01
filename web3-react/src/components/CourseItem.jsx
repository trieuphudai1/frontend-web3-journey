import { useState } from "react"
function CourseItem({title}) {
  const [done, setDone] = useState(false)

  return (
    <li onClick={() => setDone(!done)}>
      {done ? "✅" : ""}{title}
    </li>
  )

}

export default CourseItem