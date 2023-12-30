import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Home from './Home';
import { useNavigate, useParams } from 'react-router-dom';

export default function Create() {

  let navigate = useNavigate();

  let { id } = useParams();

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setPending] = useState(false)


  useEffect(() => {
    if (id != undefined) {
      axios.get("https://6588549890fa4d3dabf9c2e2.mockapi.io/blogs/" + id)
        .then((res) => {
          console.log(res.data);
          setTitle(res.data.title)
          setBody(res.data.body)
          setAuthor(res.data.author)
        })
    }
  }, [])

  function submitData(e) {
    const data = {
      title,
      body,
      author
    }
    setPending(true)

    if (id === undefined) {
      axios.post("https://6588549890fa4d3dabf9c2e2.mockapi.io/blogs", data)
        .then((res) => {
          console.log("data added");
          setTitle("")
          setBody("")
          setAuthor("")
          setPending(false)
        })
        .catch((rej) => {
          console.log(rej);
        })
    }
    else {
      axios.put("https://6588549890fa4d3dabf9c2e2.mockapi.io/blogs/" + id, data)
        .then((res) => {
          setTitle("")
          setBody("")
          setAuthor("")
          setPending(false)
        })
    }


    navigate("/")
  }

  return (
    // <div className="BlogCreate">
    //   <div className="form">
    //     <input type="text" placeholder='Author Name'
    //       value={author} style={{
    //         padding: "1%",
    //         margin: "1%",
    //         borderColor: "red",
    //         color: "black",
    //       }} onChange={(e) => {
    //         setAuthor(e.target.value);
    //       }} id='txt1' />
    //     <input type="text" placeholder='Title' value={title} style={{
    //       padding: "1%",
    //       margin: "1%",
    //       borderColor: "red"
    //     }} onChange={(e) => {
    //       setTitle(e.target.value)
    //     }} id='txt2' />
    //     <textarea name="" cols="30" rows="10" placeholder='Your data' value={body} style={{
    //       padding: "1%",
    //       margin: "1%",
    //       borderColor: "red"
    //     }} onChange={(e) => {
    //       setBody(e.target.value)
    //     }} id='txt3' >
    //     </textarea>
    //     {!isPending && <button id='btncreate' onClick={submitData}>Submit</button>}
    //     {isPending && <button id='btncreate'>Adding data</button>}
    //   </div>
    // </div>
    <div className="container col-6">
      <form>
        <div class="form-group row" style={{
              padding:"1%",
            }}>
          <label for="inputEmail3" class="col-sm-2 col-form-label" >Author</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="txt1" placeholder="Author Name" value={author} onChange={(e) => {
              setAuthor(e.target.value);
            }}  />
          </div>
        </div>
        <div class="form-group row" style={{
              padding:"1%",
            }}>
          <label for="title" class="col-sm-2 col-form-label">Title</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPassword3" placeholder="Title" value={title} onChange={(e) => {
              setTitle(e.target.value);
            }} />
          </div>
        </div>
        <div class="form-group row" style={{
              padding:"1%",
            }}>
          <label for="data" class="col-sm-2 col-form-label">Description</label>
          <div class="col-sm-10">
            <textarea name="" cols="60" rows="10" placeholder='Your data' value={body} onChange={(e) => {
              setBody(e.target.value)
            }}  >
            </textarea>
          </div>
        </div>
        <div class="form-group row" style={{
              padding:"1%",
            }}>
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary" onClick={submitData}>Submit</button>
          </div>
        </div>
      </form>
    </div>

  )
}
