import React from 'react';

export default function ErrorMessage({ error }) {
  return <span className="text-danger">{error}</span>;
}
