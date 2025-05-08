export const isValidLoginId = (id) => /^[a-zA-Z0-9]{4,12}$/.test(id)

export const isValidPassword = (pw) => /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/.test(pw)

export const isValidName = (name) => /^[가-힣]{2,8}$/.test(name)
