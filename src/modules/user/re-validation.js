export const isValidLoginId = (id) => /^[a-zA-Z0-9]{4,12}$/.test(id)

export const isValidPassword = (pw) => /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/.test(pw)

export const isValidName = (name) => /^[가-힣]{2,8}$/.test(name)

export const isValidEmailId = (email) => /^[a-zA-Z0-9._%+-]{4,12}$/.test(email)
export const isValidDomain = (domain) => /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain)

export const isValidPhone = (first, middle, last) =>
  /^01[0-9]$/.test(first) && /^\d{3,4}$/.test(middle) && /^\d{4}$/.test(last)
