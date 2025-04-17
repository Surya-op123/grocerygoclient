import Swal from 'sweetalert2';

const ShowToast = ({
   message = '',
   type = 'success', // 'success', 'error', 'warning', 'info', or 'question'
   position = 'top-end',
   background = type === 'success' ? '#28a745' : '#dc3545',
   color = '#fff',
   timer = 3000
}) => {
   Swal.fire({
      text: message,
      icon: type,
      position,
      toast: true,
      timer,
      timerProgressBar: true,
      showConfirmButton: false,
      background,
      color,
      showClass: {
         popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
         popup: 'animate__animated animate__fadeOut',
      },
      showCloseButton: true,
      customClass: {
         closeButton: 'swal2-close-custom',
      },
      didOpen: (toast) => {
         toast.addEventListener('mouseenter', Swal.stopTimer);
         toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
   });
};

export default ShowToast;
