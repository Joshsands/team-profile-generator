const addManager = function (member) {

    const name = member.getName();
    const id = member.getId();
    const email = member.getEmail();
    const officePhone = member.getOfficeNumber();

        return `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Manager</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Office Phone: ${officePhone}</li>
        </ul>
        </div>
    </div>`
}

module.exports = addManager();