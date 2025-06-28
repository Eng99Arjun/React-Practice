import React from 'react'

const Input = (props) => {
  return <div className='m-2'>
    <div>
      <label htmlFor={props.fieldname}>{`${props.fieldname}`}</label>
    </div>
    <div>
      <input type={props.type} placeholder={`Enter ${props.fieldname}`} className='outline-1 outline-gray-400 w-xl rounded-xl p-1' />
    </div>
    
  </div>
}

const App = () => {
  return (
    <div className='m-auto mt-10 shadow-2xl h-1/2 w-fit p-5 rounded-3xl '>
      <h1 className='text-2xl font-bold text-green-500 text-center'>
        Form in React
      </h1>
      <Input type='text' fieldname= 'First Name ' />
      <Input type='text' fieldname= 'Last Name' />
      <Input type='email' fieldname= 'Email' />
      <Input type='number' fieldname= 'Contact' />
      <div className='m-2'>
        <div>
          <label htmlFor="Gender"> Gender</label>
        </div>
        <div>
          <span className='m-3'>
            <input type="radio" name="gender" id="male" /> Male      
          </span>
          <span className='m-3'>
            <input type="radio" name="gender" id="female" /> Female     
          </span>
          <span>
            <input type="radio" name="gender" id="other" /> Other     
          </span>
        </div>
      </div>

      {/* Your Best Subject */}
      <div className='m-2'>
        <div>
          <label htmlFor="bestSubject"> Your Best Subject </label>
        </div>
        <div>
          <span className='m-3'>
            <input type="checkbox" name="subject" id="english" /> English      
          </span>
          <span className='m-3'>
            <input type="checkbox" name="subject" id="maths" /> Maths     
          </span>
          <span>
            <input type="checkbox" name="subject" id="physics" /> Physics 
          </span>
        </div>
      </div>

      {/* Resume */}

      <div className='m-2'>
        <div>Upload Resume</div>
        <input type="file" name="resume" id="resume" className='outline w-xl p-1 rounded-xl '/>
      </div>

    </div>
  )
}

export default App