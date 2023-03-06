import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Start />} />
        <Route path="/:winner" element={<SingleWinner />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
