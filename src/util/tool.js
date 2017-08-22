import { Toast } from 'mint-ui'

/**
 * 加密解密
 */
export function custBase64(){
	_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; 

	// public method for encoding 
	this.encode = function (input) { 
		var output = ""; 
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4; 
		var i = 0; 
		input = _utf8_encode(input); 
		while (i < input.length) { 
			chr1 = input.charCodeAt(i++); 
			chr2 = input.charCodeAt(i++); 
			chr3 = input.charCodeAt(i++); 
			enc1 = chr1 >> 2; 
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); 
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); 
			enc4 = chr3 & 63; 
			if (isNaN(chr2)) { 
				enc3 = enc4 = 64; 
			} else if (isNaN(chr3)) { 
				enc4 = 64; 
			} 
			output = output + 
			_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + 
			_keyStr.charAt(enc3) + _keyStr.charAt(enc4); 
		} 
		return output; 
	} 

	// public method for decoding 
	this.decode = function (input) { 
		var output = ""; 
		var chr1, chr2, chr3; 
		var enc1, enc2, enc3, enc4; 
		var i = 0; 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); 
		while (i < input.length) { 
			enc1 = _keyStr.indexOf(input.charAt(i++)); 
			enc2 = _keyStr.indexOf(input.charAt(i++)); 
			enc3 = _keyStr.indexOf(input.charAt(i++)); 
			enc4 = _keyStr.indexOf(input.charAt(i++)); 
			chr1 = (enc1 << 2) | (enc2 >> 4); 
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); 
			chr3 = ((enc3 & 3) << 6) | enc4; 
			output = output + String.fromCharCode(chr1); 
			if (enc3 != 64) { 
				output = output + String.fromCharCode(chr2); 
			} 
			if (enc4 != 64) { 
				output = output + String.fromCharCode(chr3); 
			} 
		} 
		output = _utf8_decode(output); 
		return output; 
	} 

	// private method for UTF-8 encoding 
	_utf8_encode = function (string) { 
		string = string.replace(/\r\n/g,"\n"); 
		var utftext = ""; 
		for (var n = 0; n < string.length; n++) { 
			var c = string.charCodeAt(n); 
			if (c < 128) { 
				utftext += String.fromCharCode(c); 
			} else if((c > 127) && (c < 2048)) { 
				utftext += String.fromCharCode((c >> 6) | 192); 
				utftext += String.fromCharCode((c & 63) | 128); 
			} else { 
				utftext += String.fromCharCode((c >> 12) | 224); 
				utftext += String.fromCharCode(((c >> 6) & 63) | 128); 
				utftext += String.fromCharCode((c & 63) | 128); 
			} 
		} 
		return utftext; 
	} 

	// private method for UTF-8 decoding 
	_utf8_decode = function (utftext) { 
		var string = ""; 
		var i = 0; 
		var c = c1 = c2 = 0; 
		while ( i < utftext.length ) { 
			c = utftext.charCodeAt(i); 
			if (c < 128) { 
				string += String.fromCharCode(c); 
				i++; 
			} else if((c > 191) && (c < 224)) { 
				c2 = utftext.charCodeAt(i+1); 
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63)); 
				i += 2; 
			} else { 
				c2 = utftext.charCodeAt(i+1); 
				c3 = utftext.charCodeAt(i+2); 
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); 
				i += 3; 
			} 
		} 
		return string; 
	} 
}

/**
 * 弹窗
 */
export function alert(msg,pos){
	Toast({message: msg,position: pos || 'bottom'})
	return false
}

/**
 * 校验手机号格式
 */
export function validPhone(phone){
	let reg = /^(13|15|18|14|17)[0-9]{9}$/;
	return reg.test(phone)
}

/**
 * 校验密码强度
 */
export const checkPwdStrong = {
	check (password){			
		if(password.length < 4){
			return 0;//太短
		}
		Modes = 0;
		for(i=0;i<password.length;i++){
			Modes |= this.charMode(password.charCodeAt(i));//返回密码的Unicode编码
		}
		return this.bitTotal(Modes)
		
	},
	
	//判断输入密码的类型
	charMode(unicode){
		if(unicode >= 48 && unicode <= 57){//数字
			return 1;
		}else if(unicode >= 65 && unicode <= 90){//大写字母
			return 2;
		}else if(unicode >=97 && unicode <= 122){//小写字母
			return 4;
		}else{
			return 8;
		}
	},
	
	//计算密码模式
	bitTotal(num){
		modes = 0;
		for(var i=0; i<4;i++){
			if(num & 1) modes++;
			num >>>=1;
		}
		return modes;
	}
}
