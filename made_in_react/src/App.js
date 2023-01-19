import React, {useState} from 'react';
import axios from 'axios';
import './detail.css';
import { Header } from './components/Header';
import { Article1 } from './components/Article1';
import { Article2 } from './components/Article2';
import { Article3 } from './components/Article3';
import { Article4 } from './components/Article4';
import { Nav } from './components/Nav';

function App() {

  const userInfo = {
    userName: "안정민",
    message: "잘 살자!"
  }
  const result = [
    {
      id: 1, 
      q1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit eveniet consequuntur impedit illum qui necessitatibus quam asperiores molestias, esse dolores earum ex expedita perspiciatis a ipsam itaque sequi culpa!",
      q2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit eveniet consequuntur impedit illum qui necessitatibus quam asperiores molestias, esse dolores earum ex expedita perspiciatis a ipsam itaque sequi culpa!\n\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit eveniet consequuntur impedit illum qui necessitatibus quam asperiores molestias, esse dolores earum ex expedita perspiciatis a ipsam itaque sequi culpa!",
      q3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit eveniet consequuntur impedit illum qui necessitatibus quam asperiores molestias, esse dolores earum ex expedita perspiciatis a ipsam itaque sequi culpa!\n\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit eveniet consequuntur impedit illum qui necessitatibus quam asperiores molestias, esse dolores earum ex expedita perspiciatis a ipsam itaque sequi culpa!",
      q4: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit eveniet consequuntur impedit illum qui necessitatibus quam asperiores molestias, esse dolores earum ex expedita perspiciatis a ipsam itaque sequi culpa!",
    }
  ]
  const replyList = [
    {
      id: 1,
      name: "손흥민",
      date: "23-01-14 23:52:33",
      comment: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세"
    },
    {
      id: 2,
      name: "황희찬",
      date: "23-01-14 23:55:31",
      comment: "Every man, as long as he does not violate the laws of justice, is left perfectly free to pursue his own interest his own way, and to bring both his industry and capital into competition with those of any other man or order of men."
    },
    {
      id: 3,
      name: "박지성",
      date: "23-01-14 23:56:12",
      comment: "If a man coaches himself, then he has only himself to blame when he is beaten."
    }
  ]

  axios
  .get('https://my-json-server.typicode.com/typicode/demo/posts')
  .then(function (response) {
    console.log(response)
  });

  return (
    <div className="App">
      <section>
        <Header data={userInfo}/>
        <Article1 data={result}></Article1>
        <Article2 data={result}></Article2>
        <Article3 data={result}></Article3>
        <Article4 data={replyList}></Article4>
      </section>
        <Nav></Nav>
    </div>
  );
}

export default App;
