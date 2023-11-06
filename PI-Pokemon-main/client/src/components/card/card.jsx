import style from '../card/card.module.css';

function Card() {
  return (
    <div className={style.card}>
      <p>imagen</p>
      <p>nombre</p>
      <p>tipo</p>
    </div>
  );
}

export default Card;
