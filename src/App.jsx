import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import questions from './data'
import { Question } from './Question'

function App() {

  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
        return <Question key={question.id} {...question}/>
        })}
      </section>
    </main>
  )
}

export default App
