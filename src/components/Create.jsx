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
          setTitle(res.data.title)
          setBody(res.data.body)
          setAuthor(res.data.author)
        })
    }
  }, [])

  function submitData(e) {

     e.preventDefault()

    const data = {
      title,
      body,
      author
    }
    setPending(true)

    if (id === undefined) {
      axios.post("https://6588549890fa4d3dabf9c2e2.mockapi.io/blogs", data)
        .then((res) => {
          // console.log("data added");
          setTitle("")
          setBody("")
          setAuthor("")
          setPending(false)
          navigate("/")
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
          navigate("/")
        })
    }
    
  }

  return (
    <div className="container col-6">
      <form method='post'>
        <div class="form-group row" style={{
          padding: "1%",
        }}>
          <label for="inputEmail3" class="col-sm-2 col-form-label" >Author</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="txt1" placeholder="Author Name" value={author} onChange={(e) => {
              setAuthor(e.target.value);
            }} />
          </div>
        </div>
        <div class="form-group row" style={{
          padding: "1%",
        }}>
          <label for="title" class="col-sm-2 col-form-label">Title</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPassword3" placeholder="Title" value={title} onChange={(e) => {
              setTitle(e.target.value);
            }} />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Your data' rows="3"value={body} onChange={(e) => {
              setBody(e.target.value)
            }}  >
            </textarea>
        </div>
        <div class="form-group row" style={{
          padding: "1%",
        }}>
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary" onClick={submitData}>Submit</button>
          </div>
        </div>

      </form>
    </div>

  )
}
