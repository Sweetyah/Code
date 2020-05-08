export const messageForAuthErrorCode = code => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'That email address is already in use!';

    case 'auth/invalid-email':
      return 'That email address is invalid!';

    default:
      return code;
  }
};
