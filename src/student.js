import React,{useEffect} from "react";
import Navbar from './student/components/Navbar'
import secureStorage from "./SecureStorage";
import "./student.css"


const Student = () => {
    const user = secureStorage.getItem("user");
    const name = user.name + " " + user.surname;

    return (
        <>
         <Navbar/>
        <div className = "header text-center">
        <h3 >Student's Profile</h3>
        </div>
        <div class="container">
		<div class="main-body">
			<div class="row mb-3">
					<div class="card">
						<div class="card-body">
						<div class="row mb-5">
						<div class="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110"/>
								<div class="mt-3">
									<h4>{name}</h4>
									
								</div>
							</div>
						</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">First Name:</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value={user.name} readOnly/>
								</div>
							</div>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Last Name:</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value={user.surname} readOnly/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email:</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value={user.email} readOnly/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Phone Number:</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value={user.number} readOnly/>
								</div>
							</div>
							
						</div>
					</div>
				</div>
		</div>
	</div>
        <br></br>

            
            

        </>
    );
};

export default Student;