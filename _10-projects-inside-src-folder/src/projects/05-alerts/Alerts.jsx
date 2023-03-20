import React from 'react';
import Alert from '../components/Alert';

export default function Alerts() {
  return (
    <div className="container mx-auto">
      <Alert
        type={'success'}
        message={'Success Message'}
        delay={true}
        delayTime={2000}
      />
      <Alert
        type={'info'}
        message={'Info Message'}
        delay={true}
        delayTime={3000}
      />
    </div>
  );
}
