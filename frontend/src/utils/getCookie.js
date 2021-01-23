
export default function getCookie(cookieName) {
    let cookie = document.cookie.split(";").find(cookie => cookie.trim().startsWith(`${cookieName}`))
    let token = cookie ? cookie.split("=")[1] : null
    return token
}