import _0x1826c4 from'node-fetch';import{FormData,Blob}from'formdata-node';import{fileTypeFromBuffer}from'file-type';export default async _0x1bb30e=>{const {ext:_0x3496c6,mime:_0x432be9}=await fileTypeFromBuffer(_0x1bb30e),_0x97b183=new FormData(),_0x5a4f4c=new Blob([_0x1bb30e['toArrayBuffer']()],{'type':_0x432be9});_0x97b183['append']('file',_0x5a4f4c,'tmp.'+_0x3496c6);const _0x404cf6=await _0x1826c4('https://telegra.ph/upload',{'method':'POST','body':_0x97b183}),_0x455126=await _0x404cf6['json']();if(_0x455126['error'])throw _0x455126['error'];return'https://telegra.ph'+_0x455126[0x0]['src'];};