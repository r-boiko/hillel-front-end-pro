import * as React from 'react';
import Button from '@mui/material/Button';

import './styles.css';

const Button = ({ text, variant }) => (
 <div className="test-button">
   <Button variant={variant}>{text}</Button>
 </div>
)


export default Button;
