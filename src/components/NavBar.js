const NavBar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ICS2608</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="/myfirstreact/">Home</a>
                        <a class="nav-link" href="/myfirstreact/employees">Employees</a>
                        <a class="nav-link" href="/myfirstreact/add">Add employee</a>
                        <a class="nav-link" href="https://rlribaya.github.io/RandomMathQuestions/">
                            Random Math Questions
                        </a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar