import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({ username: '', message: '' });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한뒤
      [e.target.name]: e.target.value,
    }; //원하는값을 넣어줌

    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ' : ' + message);
    setForm({ username: '', message: '' });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      이벤트 연습
      <input
        type="text"
        name="username"
        placeholder="사용자이름"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무키나 누르세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
