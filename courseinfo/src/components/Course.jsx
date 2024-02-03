const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Header = ({name}) => <h2>{name}</h2>

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </>
  )
}

const Total = ({parts}) => {
  // Extracting the count of exercises in a new array,
  // and calculating the sum
  // (acc = 0 to avoid error in case of empty parts array)
  const total = parts
    .map( part => part.exercises )
    .reduce( 
      (acc, curr) => acc + curr,
      0
    )
  
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const Courses = ({courses}) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map( course => 
        <Course key={course.id} course={course} />
      )}
    </>
  )
}

export default Courses