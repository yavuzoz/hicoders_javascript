function createHeader() {
    return `
    <nav class="navbar navbar-light bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"
                class="d-inline-block align-text-top">
            School Of St Moritz
        </a>
      </div>
    </nav>
    `
}

function createFormSection() {
    return `
    <form class="needs-validation" novalidate="">
                        <h2>Student Information</h2>
                        <div class="form-group">
                            <label for="first-name">First Name</label>
                            <input type="text" class="form-control" id="first-name" placeholder="First Name">
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="last-name">Second Name</label>
                            <input type="text" class="form-control" id="last-name" placeholder="Last Name" required="">
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="age">Age</label>
                            <input type="text" class="form-control" id="age" placeholder="Age" required="">
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <button id="add" class="btn btn-primary">Add Student</button>
                    </form>
    `
}

function createStudentListSection() {
    return `
    <h2>Student List</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th></th>
            </tr>
        </thead>
        ${addStudent()}
    </table>
    `
}