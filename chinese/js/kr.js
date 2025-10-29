function generateHangulTable() {
  const table = [];
  for (let i = 0xAC00; i <= 0xD7A3; i++) {
    table.push(String.fromCharCode(i));
  }
  return table;
}

const TABLE = generateHangulTable();
const BASE = TABLE.length;
const CHAR_TO_INDEX = new Map(TABLE.map((ch, i) => [ch, i]));

function strToBytes(str) {
  return new TextEncoder().encode(str);
}
function bytesToStr(bytes) {
  return new TextDecoder().decode(bytes);
}


function bytesToBigInt(bytes) {
  let n = 0n;
  for (const b of bytes) {
    n = (n << 8n) + BigInt(b);
  }
  return n;
}

function bigIntToBytes(n) {
  const bytes = [];
  while (n > 0n) {
    bytes.unshift(Number(n & 0xFFn));
    n >>= 8n;
  }
  return new Uint8Array(bytes);
}

function encryptToHangul(str) {
  const bytes = strToBytes(str);
  let n = bytesToBigInt(bytes);

  // Base-11172 编码
  let out = "";
  while (n > 0n) {
    const idx = Number(n % BigInt(BASE));
    out = TABLE[idx] + out;
    n /= BigInt(BASE);
  }
  return out || TABLE[0];
}

function decryptFromHangul(cipher) {
  let n = 0n;
  for (const ch of cipher) {
    if (!CHAR_TO_INDEX.has(ch)) throw new Error("非法字符: " + ch);
    n = n * BigInt(BASE) + BigInt(CHAR_TO_INDEX.get(ch));
  }
  const bytes = bigIntToBytes(n);
  return bytesToStr(bytes);
}

const text = "Hello, 世界! 🔥";
const cipher = encryptToHangul(text);
const plain = decryptFromHangul(cipher);

console.log("原文:", text);
console.log("密文:", cipher);
console.log("解密:", plain);
