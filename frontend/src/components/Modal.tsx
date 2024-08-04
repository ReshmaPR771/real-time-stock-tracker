import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
  onChange: (symbol: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onChange }) => {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = () => {
    onChange(symbol);
    onClose();
  };

  return (
    <div className="modal">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock or crypto symbol"
      />
      <button onClick={handleSubmit}>Change</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
