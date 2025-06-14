export const ERROR_MESSAGES = {
  /** 로그인 */
  usernameRequired: '아이디를 입력해주세요.',
  passwordRequired: '비밀번호를 입력해주세요.',

  /** 회원가입 */
  emailInvalid: '이메일 형식이 올바르지 않습니다.',
  emailRequired: '이메일을 입력해주세요.',
  duplicateEmail: '이미 존재하는 회원입니다.',
  passwordInvalid: '비밀번호는 8~16자의 영문, 숫자, 특수문자를 포함해야 합니다.',
  passwordConfirmInvalid: '비밀번호가 일치하지 않습니다.',
  phoneNumberInvalid: '번호는 - 를 뺀 01012341234로 입력해주세요.',
  phoneNumberRequired: '휴대전화 번호를 입력해주세요.',
  phoneNumberResponseFailed: '휴대전화 인증번호가 틀렸습니다.',
  phoneNumberCodeInvalid: '휴대전화 인증번호는 6자리의 숫자입니다.',

  /** 비밀번호 변경 */
  passwordCheckInvalid: '비밀번호 양식이 올바르지 않거나, 비밀번호가 일치하지 않습니다.',
  emailCheckInvalid: '존재하는 아이디가 없습니다.',
  emailPhoneNumberNotMatched: '이메일과 휴대전화 번호가 일치하지 않습니다.',

  /** 기타 */
  blockRecirect: '작성하신 내용이 저장되지 않았습니다. 이 페이지를 떠나시겠습니까?',

  /** 권한 에러 */
  unauthorized: '로그인이 필요합니다.',
  forbidden: '접근 권한이 없습니다.',
  musicianForbidden: '뮤지션 회원만 이용 가능합니다.',
};

export const HELPER_MESSAGES = {
  /** 유저 관련 */
  userDeleteSuccess: '해당 회원이 탈퇴되었습니다.',

  /** Auth Form 관련 */
  emailValid: '사용 가능한 이메일입니다.',
  passwordValid: '사용 가능한 비밀번호입니다.',
  passwordConfirmValid: '비밀번호가 일치합니다.',

  /** 비밀번호 변경 */
  emailCheckValid: '이메일이 확인되었습니다.',
  passwordChangeSuccess: '비밀번호 변경이 완료되었습니다.',

  /** 본인 인증 */
  phoneNumberSended: '휴대전화 인증번호가 발송되었습니다.',
  phoneCheckValid: '휴대전화 인증이 완료되었습니다.',

  /** 로그인 */
  loginSuccess: '로그인 되었습니다.',
  logoutSuccess: '로그아웃 되었습니다.',
};
