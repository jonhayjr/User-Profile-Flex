const getUser = async() => {
    const response = await fetch("../user.json");
    const data = await response.json();
    return data;
}

getUser().then(user => {
    const userHTML = `
    <div class="card">
        <div class="card-header">
            <h2 id="name">${user.name}</h2>
            <p id="username">${user.username}</p>
        </div>
        <div class="card-body">
            <div class="card-body-top">
                <p id="company-name">Company: ${user.company.name}</p>
                <p id="company-catchphrase">${user.company.catchPhrase}</p>
            </div>
            <div class="card-body-bottom">
                <p id="email">📧 ${user.email}</p>
                <p id="phone">📞 ${user.phone}</p>
                <p id="website">💻 ${user.website}</p>
            </div>
        </div>
        <div class="card-footer">
            <div class="address-left">
                <p id="street">${user.address.street},</p>
                <p id="suite">${user.address.suite}</p>
            </div>
            <div className="address-right">
                <p id="city">${user.address.city}</p>
                <p id="zip">${user.address.zipcode}</p>
            </div>       
        </div>
    </div>
    `

    document.querySelector(".container").innerHTML = userHTML;
})