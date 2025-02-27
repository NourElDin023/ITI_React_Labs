import "./App.css";

function App() {
  return (
    <>
      <section className="">
        <h2 className="text-center m-3">Sign Up Form</h2>
        <form className="w-50 mx-auto border p-4">
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="Name">Name</label>
            <input type="text" id="Name" className="form-control" />
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="Email">Email address</label>
            <input type="email" id="Email" className="form-control" />
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="Password">Password</label>
            <input type="password" id="Password" className="form-control" />
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" className="form-control" />
          </div>
          <div className="form-group mb-4">
            <label className="form-label w-100">Gender</label>
            <div className="w-25  d-inline-block">
              <input type="radio" id="genderMale" name="gender" value="male" />
              <label htmlFor="genderMale" className="mx-2">Male</label>
            </div>
            <div className="  d-inline-block">
              <input type="radio" id="genderFemale" name="gender" value="female" />
              <label htmlFor="genderFemale" className="mx-2">Female</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>
        </form>
      </section>
    </>
  );
}

export default App;
