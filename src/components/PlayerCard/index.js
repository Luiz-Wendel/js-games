import React from 'react'

const PlayerCard = ({ id, title, image }) => {
  return (
    <section id={ id }>
      <h2>{ title }</h2>
      <span>{ image }</span>
    </section>
  )
};

export default PlayerCard
