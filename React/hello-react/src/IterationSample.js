import React, { useState } from 'react';

const IterationSample = () => {
  const [Names, setNames] = useState([
    { id: 1, text: '1번' },
    { id: 2, text: '2번' },
  ]);

  const [inputText, setinputText] = useState('');
  const [nextId, setnextId] = useState('3');

  const onChange = (e) => {
    setinputText(e.target.value);
  };
  const onClick = () => {
    const nextname = Names.concat({ id: nextId, text: inputText });
    setnextId(nextId + 1);
    setNames(nextname);
    setinputText('');
  };
  const onRemove = (id) => {
    const nextname = Names.filter((name) => name.id !== id);
    setNames(nextname);
  };

  const NameList = Names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => {
        onRemove(name.id);
      }}
    >
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{NameList}</ul>
    </div>
  );
};

export default IterationSample;
