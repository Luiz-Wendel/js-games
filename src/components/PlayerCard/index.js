import React from 'react'

const PlayerCard = ({ id, title, image }) => {
  return (
    <section id={ id }>
      <h2>{ title }</h2>
      { image }
    </section>
  )
};

export default PlayerCard
