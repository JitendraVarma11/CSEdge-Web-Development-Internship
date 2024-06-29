import React from 'react'

export const Academics = () => {
  const UGCourses = [
    { id: 1, name: 'Artificial Intelligence and Machine Learning', period: 4, intake: 60 },
    { id: 2, name: 'Automobile Engineering', period: 4, intake: 120 },
    { id: 3, name: 'Biomedical Engineering', period: 4, intake: 60 },
    { id: 4, name: 'Chemical Engineering', period: 4, intake: 60 },
    { id: 5, name: 'Civil Engineering', period: 4, intake: 120 },
    { id: 6, name: 'Computer Engineering', period: 4, intake: 120 },
    { id: 7, name: 'Electrical Engineering', period: 4, intake: 120 },
    { id: 8, name: 'Electronics & Communication Engineering', period: 4, intake: 120 },
    { id: 9, name: 'Environment Engineering', period: 4, intake: 60 },
    { id: 10, name: 'Information Technology', period: 4, intake: 120 },
    { id: 11, name: 'Instrumentation & Control Engineering', period: 4, intake: 90 },
    { id: 12, name: 'Mechanical Engineering', period: 4, intake: 120 },
    { id: 13, name: 'Plastic Technology', period: 4, intake: 30 },
    { id: 14, name: 'Robotics and Automation', period: 4, intake: 60 },
    { id: 15, name: 'Rubber Technology', period: 4, intake: 30 },
    { id: 16, name: 'Textile Technology', period: 4, intake: 60 },
  ];
  const PGCourses = [
    { id: 1, name: 'Applied Instrumentation', period: 2, intake: 18 },
    { id: 2, name: 'Communication Systems', period: 2, intake: 36 },
    { id: 3, name: 'Computer Aided Design & Manufacturing', period: 2, intake: 18 },
    { id: 4, name: 'Computer Aided Process Design', period: 2, intake: 18 },
    { id: 5, name: 'Computer Engineering (Software Engineering)', period: 2, intake: 18 },
    { id: 6, name: 'Cryogenic Engineering', period: 2, intake: 15 },
    { id: 7, name: 'Electric Vehicle Technology', period: 2, intake: 18 },
    { id: 8, name: 'Electrical Engineering', period: 2, intake: 36 },
    { id: 9, name: 'Environmental Management', period: 2, intake: 18 },
    { id: 10, name: 'Geotechnical Engineering', period: 2, intake: 18 },
  ];
  
  
  return (
    <div className='w-10/12 mx-auto'>
      <div className="mx-auto p-4 border-[#00008B] border mt-5">
      <h1 className="text-2xl mb-1 bg-[#00008B] w-full text-white p-2">Under Graduate Courses</h1>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-4 gap-4 bg-gray-100 p-2 font-bold text-center">
          <div>#</div>
          <div>Name of Course</div>
          <div>Period (Years)</div>
          <div>Intake</div>
        </div>
        {UGCourses.map(course => (
          <div key={course.id} className="grid grid-cols-4 gap-4 border-b p-2 text-center">
            <div>{course.id}</div>
            <div>{course.name}</div>
            <div>{course.period}</div>
            <div>{course.intake}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="mx-auto p-4 border-[#00008B] border mt-5 mb-10">
      <h1 className="text-2xl mb-1 bg-[#00008B] w-full text-white p-2">Post Graduate Courses</h1>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-4 gap-4 bg-gray-100 p-2 font-bold text-center">
          <div>#</div>
          <div>Name of Course</div>
          <div>Period (Years)</div>
          <div>Intake</div>
        </div>
        {PGCourses.map(course => (
          <div key={course.id} className="grid grid-cols-4 gap-4 border-b p-2 text-center">
            <div>{course.id}</div>
            <div>{course.name}</div>
            <div>{course.period}</div>
            <div>{course.intake}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
