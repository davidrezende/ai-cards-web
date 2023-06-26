import React, { useState } from 'react';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Lógica para lidar com o envio do formulário
    // Aqui você pode fazer algo com o valor inserido no campo de input
    console.log('Valor inserido:', inputValue);

    // Fechar o diálogo
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog-overlay ">
      <div className="dialog-content">
        <h2>Diálogo</h2>
        <p>Insira um valor:</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Enviar</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Dialog;