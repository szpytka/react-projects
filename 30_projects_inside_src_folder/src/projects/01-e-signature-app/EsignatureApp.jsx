import React, { useState } from 'react';
import Title from '../components/Title';

export default function EsignatureApp() {
  const [name, setName] = useState('Your Signature');
  const [date, setDate] = useState('');
  const inputStyle = {
    border: 'none',
    borderBottom: '2px dotted',
    outline: 'none',
    padding: '.35rem .20rem',
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className="container text-center">
      <Title text={name} classes={'title'} />
      <Title text={!date ? 'DoB' : date} classes={'subtitle'} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        consectetur incidunt veniam laborum deleniti, aliquid voluptatibus est
        quibusdam accusamus, inventore cupiditate. Qui maxime dignissimos
        accusantium corrupti harum dolore repellendus eaque sint et, asperiores
        soluta officiis. Quibusdam minima, saepe est atque rem doloremque id
        quae, adipisci maxime nulla repudiandae nesciunt! Iure, quibusdam
        doloribus? Inventore tempora pariatur doloribus eos voluptatem aperiam,
        corporis vitae id temporibus, veritatis sequi, modi fugiat. Quos in
        cupiditate beatae facilis quod quaerat iste soluta laboriosam. Dolore
        eaque doloremque delectus? Iusto, et tempore inventore aliquam voluptate
        velit fugit sapiente autem doloribus assumenda excepturi, amet quis
        ratione molestiae placeat repellendus? Ipsa, modi laboriosam distinctio
        commodi facere, sed possimus autem nostrum nesciunt officia officiis at
        repudiandae quaerat maiores est laudantium dicta velit dolorum delectus,
        earum repellat quae consequatur. Vero dolor sequi vitae dolores, veniam
        excepturi quibusdam reprehenderit nulla sit consectetur minus quas sed
        natus iste cum ipsam iure nihil tempore consequuntur vel similique
        facilis, est ullam. Est saepe amet alias minus quaerat aliquid pariatur
        architecto error ducimus facere dolorem delectus itaque neque earum
        voluptatum voluptas expedita, quos ad perspiciatis dignissimos non porro
        nisi quod omnis? Atque iusto officia rerum! Id, velit minus rem odit
        quia sit mollitia veniam dolorem in voluptate.
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: 'space-around',
          position: 'relative',
          top: '30vh',
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          style={inputStyle}
          onChange={handleNameChange}
          placeholder="Signature"
        />
      </footer>
    </div>
  );
}
