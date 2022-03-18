import aesjs from 'aes-js'
import pidCrypt from 'pidcrypt'
import pidCryptUtil from 'pidcrypt/pidcrypt_util'
import objRSA from 'pidcrypt/rsa'
import objASN1 from 'pidcrypt/asn1'


//https://www.npmjs.com/package/aes-js
// An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)
var key_128 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var key_192 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23]
var key_256 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29, 30, 31]

var own = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 49, 50, 51, 52, 53, 54  ]

export default {
    encrypt(value){
        
        // Convert text to bytes
        var textBytes = aesjs.utils.utf8.toBytes(value);            
        // The counter is optional, and if omitted will begin at 1
        var aesCtr = new aesjs.ModeOfOperation.ctr(key_256, new aesjs.Counter(5));
        var encryptedBytes = aesCtr.encrypt(textBytes);
        // To print or store the binary data, you may convert it to hex
        var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
      
        return encryptedHex
    },
    encryptPidCrypt(value){
        var pub_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxnl84xDziCm8bJt87lUP3dH5daD0LaDbtTUZ6yz9Jobg8VFN01W9ShaisEUS5YQnHwtH9VbscsmNTttvm40u1X317bOyVzKd9HdQ1riHMxd4rVFGTE/2LdjqCJyRzG8WAG9nerurEMFgnUN3K+hvvCXcrN6RPerL62briCdVGyY3TnxCssoAiKM4DVehLNAb/rJxQFFeY1w7LuDga6oMJMzliarxU5HX/ZkYtInxRTomg3k/kZCQ5+RLwgmdHgtH8v1t7OaScG3+qXmaP70Xb81fmAXLtf+jcY0aBkfLISPDY9XuUcrEwF32Wo041dsehRd3kiJ7M+uAjoBa6kPghwIDAQAB";
        var pem = pidCryptUtil.decodeBase64(pub_key);
        var rsa = new pidCrypt.RSA();
        var asn = pidCrypt.ASN1.decode(pidCryptUtil.toByteArray(pem));
        var tree = asn.toHexTree();
        rsa.setPublicKeyFromASN(tree);
        var crypted = rsa.encrypt(value);
        return crypted
    }

}