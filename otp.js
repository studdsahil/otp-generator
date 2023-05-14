function generatorOtp(limit){
    let digits = '0123456789';
    let OTP = '';
    for(let i = 0;i<limit;i++){
        OTP += digits[Math.floor(Math.random()*10)];
    }
    return OTP;
}
console.log(generatorOtp(4));
console.log(generatorOtp(6));
