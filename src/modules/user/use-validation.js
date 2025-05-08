import {
  isValidDomain,
  isValidEmailId,
  isValidLoginId,
  isValidName,
  isValidPassword,
  isValidPhone,
} from '@/modules/user/re-validation.js'

export const useValidation = (form, errors) => {
  const validateId = () => {
    errors.id = !form.id || !isValidLoginId(form.id) ? '4~12자의 영문 또는 숫자를 입력하세요.' : ''
  }

  const validatePassword = () => {
    errors.password =
      !form.password || !isValidPassword(form.password)
        ? '비밀번호는 문자와 숫자를 포함한 6~20자여야 합니다.'
        : ''
  }

  const validateConfirmPassword = () => {
    errors.confirmPassword =
      form.password !== form.confirmPassword ? '비밀번호가 일치하지 않습니다.' : ''
  }

  const validateName = () => {
    errors.name = !form.name || !isValidName(form.name) ? '이름은 한글 2~8자만 가능합니다.' : ''
  }

  const validateEmail = () => {
    const domain = form.selectedDomain === 'custom' ? form.customDomain : form.selectedDomain
    const isValid = isValidEmailId(form.email.id) && isValidDomain(domain)
    errors.email = !isValid ? '유효한 이메일을 입력하세요.' : ''
  }

  const validatePhone = () => {
    const isValid = isValidPhone(form.phone.first, form.phone.middle, form.phone.last)
    errors.phone = !isValid ? '유효한 휴대폰 번호를 입력하세요.' : ''
  }

  const validateAgreeTerms = () => {
    errors.agreeTerms = !form.agreeTerms ? '약관에 동의해야 합니다.' : ''
  }

  const validateAll = () => {
    validateId()
    validatePassword()
    validateConfirmPassword()
    validateName()
    validateEmail()
    validatePhone()
    validateAgreeTerms()

    return Object.values(errors).every((e) => !e)
  }

  const validateLogin = () => {
    validateId()
    validatePassword()

    return Object.values(errors).every((e) => !e)
  }

  return {
    validateId,
    validatePassword,
    validateConfirmPassword,
    validateName,
    validateEmail,
    validatePhone,
    validateAgreeTerms,
    validateAll,
    validateLogin,
  }
}
