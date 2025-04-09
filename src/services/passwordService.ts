export default function generatePass(){
    let password: string = ''
    let chars: string = 'QWERTYUIOPÇLKJHGFDSZXCVBNM<>:?!@#$%¨&*()0987654321'
    let passwordLength = 8
    for (let i = 0; i<passwordLength; i++){
        password += chars.charAt(
           Math.floor(Math.random() * chars.length)
        )

    }

    console.log(password)

    return password
}
