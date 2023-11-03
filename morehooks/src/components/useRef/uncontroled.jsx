import React, {useRef, useState} from 'react'

const Uncontroled = () => {

  const luckyname = useRef(null);
  const [show, setShow] = useState(false);

  const submitform = (e) => {
    e.preventDefault();
    const name = luckyname.current.value
    name === "" ? alert("Fill the data"): setShow(true);
  }
  return (
    <div>
      <form action="" onSubmit={submitform}>
        <div>
          <label htmlFor="luckyname">Enter your lucky name</label>
          <input type="text" id='luckyname' ref={ luckyname }/>
        </div>
        <br />
        <button>Submit</button>
      </form>
      <p> { show ? `your lucky name is ${luckyname.current.value}`: ""}</p>
    </div>
  )
}

export default Uncontroled
