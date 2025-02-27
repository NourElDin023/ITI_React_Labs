import MyNav from './MyNav.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import MyCounter from './MyCounter.jsx';
function App() {
  return (
    <>
      <div className='bg-info' style={{ height: "100vh" }}>
        <div className="d-flex flex-column w-50 mx-auto gap-2 p-2">
          <MyNav />
          <div className="card d-flex align-items-center gap-2 p-4">
            <MyCounter />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
