
function Student(props) {
    const stu = props.student
    return ( 
        <>
            <p> Student ID: {stu.id}</p>
            <p> {stu.fname} {stu.lname}</p>
        </>
    )
}

export default Student