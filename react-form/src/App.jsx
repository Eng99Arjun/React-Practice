import React, { use, useState } from 'react'

const App = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false
  });

  const [url, setUrl] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const [resume, setResume] = useState("");

  const [about, setAbout ] = useState("");






  return (
    <div className='m-auto mt-10 shadow-2xl h-1/2 w-fit p-5 rounded-3xl '>
      <h1 className='text-2xl font-bold text-green-500 text-center'>
        Form in React
      </h1>
      
      <div className='m-2'>
        <div>
          <label htmlFor=''>First Name</label>
        </div>
        <div>
          <input type='text' placeholder='Enter First Name' className='outline-1 outline-gray-400 w-xl rounded-xl p-1' />
        </div>
        
      </div>
      

      <div className='m-2'>
        <div>
          <label htmlFor=''>Last Name</label>
        </div>
        <div>
          <input type='text' placeholder='Enter Last Name' className='outline-1 outline-gray-400 w-xl rounded-xl p-1' />
        </div>
        
      </div>
      

      <div className='m-2'>
        <div>
          <label htmlFor=''>Email</label>
        </div>
        <div>
          <input type='email' placeholder='Enter email' className='outline-1 outline-gray-400 w-xl rounded-xl p-1' />
        </div>
        
      </div>
      

      <div className='m-2'>
        <div>
          <label htmlFor=''>Contact</label>
        </div>
        <div>
          <input type='Number' placeholder='Enter Contact' className='outline-1 outline-gray-400 w-xl rounded-xl p-1' />
        </div>
        
      </div>
      


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

      {/* URL */}

      <input type='link' placeholder='URL' />

      {/* Choice */}

    <div className='m-2'>
      <div>
        Select Your Choice
      </div>
        <select
            name="select"
            id="select"
            className='outline w-xl p-1 rounded-xl' 

        >
            <option
                value=""
                disabled
                selected={selectedOption === ""}
            >
                Select your Ans
            </option>
            <optgroup label="Beginers">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">
                    JavaScript
                </option>
            </optgroup>
            <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">
                    Express
                </option>
                <option value="t">
                    MongoDB
                </option>
            </optgroup>
      </select>
    </div>

    {/* About Yourself */}
      
    <div className='m-2'>
      <div>About</div>
      <textarea name="about" id="about" className='w-xl rounded-xl outline '></textarea>
    </div>

    <div className='flex flex-row m-2 justify-between'>
      <div> 
        <button className='w-36 rounded-2xl bg-green-500 p-1.5'>Reset</button>
      </div>
      <div> 
        <button className='w-36 rounded-2xl bg-green-500 p-1.5'>Submit</button>
      </div>
    </div>

    </div>
  )
}

export default App