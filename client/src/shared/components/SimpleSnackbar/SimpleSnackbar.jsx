import React, { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

export default function SimpleSnackbar(props) {
  useEffect(() => {
    if (props.open) {
      const timer = setTimeout(() => {
        props.setOpen();
      }, 6000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [props.open, props.setOpen]);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={() => props.setOpen()}>
        Закрыть
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={props.open}
        autoHideDuration={6000}
        onClose={() => props.setOpen()}
        message={`${props.text}`}
        action={action}
      />
    </div>
  );
}
