import React, { useState } from "react";

function EmployeeSalary() {

    const [employees, setEmployees] = useState([
        {
            name: "AAA",
            id: 100,
            salary: 10000,
            dept: "CSE"
        },
        {
            name: "BBB",
            id: 101,
            salary: 20000,
            dept: "CSE"
        },
        {
            name: "CCC",
            id: 103,
            salary: 30000,
            dept: "AIML"
        },
        {
            name: "DDD",
            id: 104,
            salary: 40000,
            dept: "DS"
        }
    ]);

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [salary, setSalary] = useState("");
    const [dept, setDept] = useState("");

    const [output, setOutput] = useState("");

    const addEmployee = () => {

        if(name==="" || id==="" || salary==="" || dept===""){
            alert("Fill all fields");
            return;
        }

        const emp={
            name:name,
            id:id,
            salary:Number(salary),
            dept:dept
        };

        setEmployees([...employees,emp]);

        alert("Employee Added Successfully");

        setName("");
        setId("");
        setSalary("");
        setDept("");
    };

    const displayAll=()=>{

        setOutput(
            <>
            <h2>All Employees</h2>

            {
                employees.map((emp,index)=>(

                    <div key={index} className="employee">

                        Name: {emp.name} |
                        ID: {emp.id} |
                        Salary: ₹{emp.salary} |
                        Dept: {emp.dept}

                    </div>

                ))
            }

            </>
        );
    };

    const salaryGreater=()=>{

        const data=employees.filter(emp=>emp.salary>50000);

        setOutput(
            <>
            <h2>Employees with Salary &gt; ₹50,000</h2>

            {
                data.length===0?
                <p>No Employee Found</p>:
                data.map((emp,index)=>(

                    <div key={index}>

                        {emp.name} - ₹{emp.salary}

                    </div>

                ))
            }

            </>
        );

    };

    const totalSalary=()=>{

        const total=employees.reduce(
            (sum,emp)=>sum+emp.salary,0
        );

        setOutput(
            <h2>Total Salary Payout: ₹{total}</h2>
        );

    };

    const averageSalary=()=>{

        const total=employees.reduce(
            (sum,emp)=>sum+emp.salary,0
        );

        const avg=(total/employees.length).toFixed(2);

        setOutput(
            <h2>Average Salary: ₹{avg}</h2>
        );

    };

    const countDept=()=>{

        const department=prompt("Enter Department");

        const count=employees.filter(
            emp=>emp.dept.toLowerCase()===department.toLowerCase()
        ).length;

        setOutput(
            <h2>{department} Department Count : {count}</h2>
        );

    };

    return(

        <div className="container">

            <h1>Employee Salary Management System</h1>

            <div className="form">

                <input
                type="text"
                placeholder="Employee Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />

                <input
                type="number"
                placeholder="Employee ID"
                value={id}
                onChange={(e)=>setId(e.target.value)}
                />

                <input
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e)=>setSalary(e.target.value)}
                />

                <input
                type="text"
                placeholder="Department"
                value={dept}
                onChange={(e)=>setDept(e.target.value)}
                />

                <button onClick={addEmployee}>
                    Add Employee
                </button>

            </div>

            <br/>

            <center>

            <button onClick={displayAll}>
                Display All
            </button>

            <button onClick={salaryGreater}>
                Salary &gt; 50000
            </button>

            <button onClick={totalSalary}>
                Total Salary
            </button>

            <button onClick={averageSalary}>
                Average Salary
            </button>

            <button onClick={countDept}>
                Count by Department
            </button>

            </center>

            <div className="result">

                {output}

            </div>

        </div>

    );

}

export default EmployeeSalary;