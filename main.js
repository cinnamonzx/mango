async function getData(){
    const res = await fetch("https://firstact-api.thinc.in.th/courses")
    const data = await res.json();
    const courses_container = document.getElementById('courses-container');

    //forEach == loop
    data.courses.forEach((course) => {
        const new_course = document.createElement('article');

        const course_heading = document.createElement('h3');
        course_heading.innerText = course.abbrName + '#' + course.courseNo;

        const course_nameTh = document.createElement('h3');
        course_nameTh.innerText = course.courseNameTh;

        const course_credit = document.createElement('h4');
        course_credit.innerText = 'credit : ' + course.credit;

        const department = document.createElement('h4');
        department.innerText = course.department;

        new_course.append(course_heading);
        new_course.append(course_nameTh);
        new_course.append(course_credit);
        new_course.append(department);
        

        courses_container.append(new_course);
        
        new_course.style = 'background-color: rgba(200, 200, 200, 0.15); border: 2px solid brown; padding: 80px; border-radius:16px; margin-bottom:10px';
    } )
}

getData();