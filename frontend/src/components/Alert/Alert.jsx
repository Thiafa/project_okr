import React from 'react';
import Swal from 'sweetalert2';

export function Success(text) {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    text,
    showConfirmButton: false,
    timer: 1500,
  });
}

export function Error(text) {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    text,
    showConfirmButton: false,
    timer: 1500,
  });
}
